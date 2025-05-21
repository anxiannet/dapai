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
  reviewsText: z.string().min(10, { message: "Please enter at least one review." }),
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
      form.setError("reviewsText", { type: "manual", message: "Please provide at least one valid review." });
      return;
    }

    setAnalysisResult(null);
    startTransition(async () => {
      try {
        const result = await reviewReliabilityRating({ reviews: reviewsArray });
        setAnalysisResult(result);
        toast({
          title: "Analysis Complete!",
          description: "Review insights generated successfully.",
        });
      } catch (error) {
        console.error("Error analyzing reviews:", error);
        toast({
          title: "Analysis Failed",
          description: "Could not generate review insights. Please try again.",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Analyze Service Provider Reviews</CardTitle>
          <CardDescription>Paste reviews (one per line) to get an AI-powered reliability rating and summary.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="reviewsText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reviews</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Example Review 1...\nAnother Example Review..."
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
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Get AI Insights
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card className="shadow-lg sticky top-24"> {/* Sticky for visibility while scrolling long reviews */}
        <CardHeader>
          <CardTitle>AI-Powered Insights</CardTitle>
          <CardDescription>Results of the review analysis will appear here.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {isPending && !analysisResult && (
            <div className="flex flex-col items-center justify-center h-40 text-muted-foreground">
              <Loader2 className="h-8 w-8 animate-spin mb-2" />
              <p>Generating insights...</p>
            </div>
          )}
          {!isPending && !analysisResult && (
             <div className="flex flex-col items-center justify-center h-40 text-muted-foreground">
              <Sparkles className="h-8 w-8 mb-2" />
              <p>Enter reviews to see insights.</p>
            </div>
          )}
          {analysisResult && (
            <>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Reliability Rating</h3>
                <div className="flex items-center gap-3">
                  <Progress value={analysisResult.reliabilityRating * 100} className="w-full h-3" />
                  <span className="font-bold text-primary text-lg">
                    {(analysisResult.reliabilityRating * 100).toFixed(0)}%
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Based on the provided reviews, the estimated reliability is { (analysisResult.reliabilityRating * 100).toFixed(0) }%.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Feedback Summary</h3>
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
