import { PageTitle } from '@/components/PageTitle';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { ReviewAnalyzerClient } from '@/components/features/review-insights/ReviewAnalyzerClient';

export default function ReviewAnalyzerPage() {
  return (
    <PageWrapper>
      <PageTitle
        title="点评洞察"
        description="利用AI从用户点评中了解服务提供商的可靠性。"
      />
      <ReviewAnalyzerClient />
    </PageWrapper>
  );
}
