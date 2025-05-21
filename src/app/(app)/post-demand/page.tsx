import { PageTitle } from '@/components/PageTitle';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { DemandForm } from '@/components/features/demand-posting/DemandForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function PostDemandPage() {
  return (
    <PageWrapper>
      <PageTitle
        title="发布新需求"
        description="让社区了解您需要什么帮助。请填写以下详细信息。"
      />
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle>需求详情</CardTitle>
          <CardDescription>请提供尽可能详细的信息，以便获得最佳匹配。</CardDescription>
        </CardHeader>
        <CardContent>
          <DemandForm />
        </CardContent>
      </Card>
    </PageWrapper>
  );
}
