"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { zhCN } from 'date-fns/locale';
import { useToast } from "@/hooks/use-toast";

const demandFormSchema = z.object({
  title: z.string().min(5, { message: "标题至少需要5个字符。" }).max(100),
  description: z.string().min(20, { message: "描述至少需要20个字符。" }).max(1000),
  skills: z.string().min(2, { message: "请输入至少一个技能或标签。"}), 
  location: z.string().min(3, { message: "地点是必填项。" }).max(100),
  deadline: z.date().optional(),
});

type DemandFormValues = z.infer<typeof demandFormSchema>;

const defaultValues: Partial<DemandFormValues> = {
  title: "",
  description: "",
  skills: "",
  location: "",
};

export function DemandForm() {
  const { toast } = useToast();
  const form = useForm<DemandFormValues>({
    resolver: zodResolver(demandFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: DemandFormValues) {
    console.log(data);
    toast({
      title: "需求已发布！",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>需求标题</FormLabel>
              <FormControl>
                <Input placeholder="例如：需要帮忙搬沙发" {...field} />
              </FormControl>
              <FormDescription>为您的需求填写一个简短清晰的标题。</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>详细描述</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="请详细描述您的需求，包括物品尺寸、任务时长等具体信息。"
                  className="resize-y min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <FormLabel>技能 / 标签</FormLabel>
              <FormControl>
                <div className="relative">
                  <Tag className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="例如：管道维修，翻译，搬运重物" className="pl-10" {...field} />
                </div>
              </FormControl>
              <FormDescription>输入相关技能或标签，用逗号分隔。</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>地点</FormLabel>
              <FormControl>
                <Input placeholder="例如：某某市某某街123号 或 '远程'" {...field} />
              </FormControl>
              <FormDescription>服务需要的地点是哪里？</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deadline"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>截止日期（可选）</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP", { locale: zhCN })
                      ) : (
                        <span>选择日期</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date(new Date().setHours(0,0,0,0)) 
                    }
                    initialFocus
                    locale={zhCN}
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                您希望此任务何时完成？
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="cta" size="lg" className="w-full sm:w-auto">发布需求</Button>
      </form>
    </Form>
  );
}
