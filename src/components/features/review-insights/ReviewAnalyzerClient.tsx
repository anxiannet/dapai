"use client";

import { useState, useTransition } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Loader2, Sparkles } from "lucide-react";
import { reviewReliabilityRating, type ReviewReliabilityRatingOutput } from '@/ai/flows/review-reliability-rating';
import { useToast } from '@/hooks/use-toast';

const reviewAnalyzerSchema = z.object({
  reviewsText: z.string().min(10, { message: "请输入至少一条点评。" }),
});

type ReviewAnalyzerFormValues = z.infer<typeof reviewAnalyzerSchema>;

export function ReviewAnalyzerClient() {
  const [analysisResult, setAnalysisResult] = useState<ReviewReliabilityRatingOutput | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<ReviewAnalyzerFormValues>({
    resolver: zodResolver(reviewAnalyzerSchema),
    defaultValues: {
      reviewsText: "",
    },
  });

  const onSubmit = (data: ReviewAnalyzerFormValues) => {
    const reviewsArray = data.reviewsText.split('\n').map(review => review.trim()).filter(review => review.length > 0);

    if (reviewsArray.length === 0) {
      form.setError("reviewsText", { type: "manual", message: "请提供至少一条有效的点评。" });
      return;
    }

    setAnalysisResult(null);
    startTransition(async () => {
      try {
        const result = await reviewReliabilityRating({ reviews: reviewsArray });
        setAnalysisResult(result);
        toast({
          title: "分析完成！",
          description: "点评洞察已成功生成。",
        });
      } catch (error) {
        console.error("Error analyzing reviews:", error);
        toast({
          title: "分析失败",
          description: "无法生成点评洞察。请重试。",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>分析服务提供商点评</CardTitle>
          <CardDescription>粘贴点评（每行一条），获取AI驱动的可靠性评级和摘要。</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="reviewsText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>点评内容</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="示例点评1...\n另一个示例点评..."
                        className="resize-y min-h-[200px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPending} variant="cta" className="w-full">
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    分析中...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    获取AI洞察
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card className="shadow-lg sticky top-24"> {/* Sticky for visibility while scrolling long reviews */}
        <CardHeader>
          <CardTitle>AI驱动的洞察</CardTitle>
          <CardDescription>点评分析结果将在此处显示。</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {isPending && !analysisResult && (
            <div className="flex flex-col items-center justify-center h-40 text-muted-foreground">
              <Loader2 className="h-8 w-8 animate-spin mb-2" />
              <p>正在生成洞察...</p>
            </div>
          )}
          {!isPending && !analysisResult && (
             <div className="flex flex-col items-center justify-center h-40 text-muted-foreground">
              <Sparkles className="h-8 w-8 mb-2" />
              <p>输入点评以查看洞察。</p>
            </div>
          )}
          {analysisResult && (
            <>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">可靠性评级</h3>
                <div className="flex items-center gap-3">
                  <Progress value={analysisResult.reliabilityRating * 100} className="w-full h-3" />
                  <span className="font-bold text-primary text-lg">
                    {(analysisResult.reliabilityRating * 100).toFixed(0)}%
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  根据提供的点评，预估可靠性为 { (analysisResult.reliabilityRating * 100).toFixed(0) }%。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">反馈摘要</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap bg-secondary/30 p-3 rounded-md">
                  {analysisResult.summary}
                </p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
