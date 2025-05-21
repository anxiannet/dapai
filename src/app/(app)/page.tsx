import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageTitle } from '@/components/PageTitle';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { NAV_ITEMS } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function DashboardPage() {
  const features = NAV_ITEMS.filter(item => item.href !== '/');

  return (
    <PageWrapper>
      <PageTitle 
        title="Welcome to SkillShare Connect!"
        description="Your platform to find and offer skills within your community."
      />
      
      <section className="mb-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Get Started</CardTitle>
            <CardDescription>Explore the features of SkillShare Connect.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Link href={feature.href} key={feature.href} passHref>
                  <Card className="h-full transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                    <CardHeader className="flex-row items-center gap-4 pb-2">
                      <feature.icon className="h-8 w-8 text-primary" />
                      <CardTitle className="text-xl">{feature.label}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {feature.label === 'Post a Demand' && 'Need help with a task? Post your requirements here.'}
                        {feature.label === 'Find Talents' && 'Discover skilled individuals ready to assist you.'}
                        {feature.label === 'Review Analyzer' && 'Get AI-powered insights from service provider reviews.'}
                      </p>
                      <Button variant="link" className="px-0 text-primary">
                        Go to {feature.label} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="Community Collaboration" 
                width={600} 
                height={400} 
                className="h-full w-full object-cover"
                data-ai-hint="collaboration community"
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Empowering Connections</h3>
              <p className="text-muted-foreground mb-6">
                SkillShare Connect is designed to bridge the gap between those who need services and those who can provide them. 
                Join our growing community and make meaningful connections.
              </p>
              <div className="flex gap-4">
                <Link href={NAV_ITEMS.find(item => item.label === 'Post a Demand')?.href || '/'} passHref>
                  <Button variant="cta">Post Your First Demand</Button>
                </Link>
                <Link href={NAV_ITEMS.find(item => item.label === 'Find Talents')?.href || '/'} passHref>
                  <Button variant="outline">Browse Talents</Button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </PageWrapper>
  );
}
