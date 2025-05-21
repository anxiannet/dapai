import { PageTitle } from '@/components/PageTitle';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { ReviewAnalyzerClient } from '@/components/features/review-insights/ReviewAnalyzerClient';

export default function ReviewAnalyzerPage() {
  return (
    <PageWrapper>
      <PageTitle
        title="Review Insights"
        description="Leverage AI to understand service provider reliability from user reviews."
      />
      <ReviewAnalyzerClient />
    </PageWrapper>
  );
}
