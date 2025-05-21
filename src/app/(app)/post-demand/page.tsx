import { PageTitle } from '@/components/PageTitle';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { DemandForm } from '@/components/features/demand-posting/DemandForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function PostDemandPage() {
  return (
    <PageWrapper>
      <PageTitle
        title="Post a New Demand"
        description="Let the community know what help you need. Fill out the details below."
      />
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle>Demand Details</CardTitle>
          <CardDescription>Provide as much information as possible for the best matches.</CardDescription>
        </CardHeader>
        <CardContent>
          <DemandForm />
        </CardContent>
      </Card>
    </PageWrapper>
  );
}
