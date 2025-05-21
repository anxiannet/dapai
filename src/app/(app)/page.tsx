
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageTitle } from '@/components/PageTitle';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { NAV_ITEMS } from '@/lib/constants';
import { ArrowRight, Truck, Sparkles, Wrench, Bike, Dog, GraduationCap, Camera, Paintbrush, Languages, PlusCircle } from 'lucide-react';
import Image from 'next/image';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const popularServices = [
  { name: '搬家服务', icon: Truck, href: '/services/moving' },
  { name: '日常保洁', icon: Sparkles, href: '/services/cleaning' },
  { name: '家电维修', icon: Wrench, href: '/services/repairs' },
  { name: '跑腿代办', icon: Bike, href: '/services/errands' },
  { name: '宠物遛养', icon: Dog, href: '/services/pet-walking' },
  { name: '学业辅导', icon: GraduationCap, href: '/services/tutoring' },
  { name: '摄影摄像', icon: Camera, href: '/services/photography' },
  { name: '平面设计', icon: Paintbrush, href: '/services/design' },
  { name: '语言翻译', icon: Languages, href: '/services/translation' },
];

export default function DashboardPage() {
  const features = NAV_ITEMS.filter(item => item.href !== '/');

  return (
    <PageWrapper>
      <PageTitle 
        title="欢迎来到达派！"
        description="找专业的人，办专业的事。"
      />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">热门服务</h2>
        <div className="flex items-stretch space-x-0"> {/* Removed space-x-2, now space-x-0 or remove entirely for no gap */}
          <ScrollArea className="w-0 flex-grow min-w-0 md:max-w-2xl rounded-md border shadow-sm">
            <div className="flex w-max p-0"> {/* Changed p-4 to p-0, or adjust if very small padding needed */}
              {popularServices.map((service) => (
                <Link href={service.href} key={service.name}>
                  <div className="flex flex-col items-center justify-start p-0 rounded-lg hover:bg-accent/10 transition-colors w-28 h-32 text-center cursor-pointer border border-transparent hover:border-primary/30">
                    <service.icon className="h-8 w-8 text-primary mb-2 shrink-0" />
                    <span className="text-sm font-medium text-foreground whitespace-nowrap overflow-hidden text-ellipsis w-full">{service.name}</span>
                  </div>
                </Link>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="hidden"/>
          </ScrollArea>
          <Link href="/services" className="shrink-0">
            <div className="flex flex-col items-center justify-center p-0 rounded-lg bg-primary text-primary-foreground hover:bg-primary-hover transition-colors w-28 h-32 text-center cursor-pointer shadow-md">
              <PlusCircle className="h-8 w-8 mb-2 shrink-0" />
              <span className="text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis w-full">更多服务</span>
            </div>
          </Link>
        </div>
      </section>
      
      <section className="mb-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">快速开始</CardTitle>
            <CardDescription>探索达派的核心功能。</CardDescription>
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
                        {feature.label === '发布需求' && '需要帮忙？在这里发布您的需求。'}
                        {feature.label === '发现人才' && '发现身怀绝技的专业人士。'}
                        {feature.label === '点评分析' && '获取AI驱动的服务点评分析洞察。'}
                      </p>
                      <Button variant="link" className="px-0 text-primary">
                        前往 {feature.label} <ArrowRight className="ml-2 h-4 w-4" />
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
                alt="社区协作" 
                width={600} 
                height={400} 
                className="h-full w-full object-cover"
                data-ai-hint="collaboration community"
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-3 text-foreground">赋能连接</h3>
              <p className="text-muted-foreground mb-6">
                达派旨在连接有服务需求的用户和能提供服务的专业人士。 
                加入我们不断壮大的社区，建立有意义的连接。
              </p>
              <div className="flex gap-4">
                <Link href={NAV_ITEMS.find(item => item.label === '发布需求')?.href || '/'} passHref>
                  <Button variant="cta">发布您的第一个需求</Button>
                </Link>
                <Link href={NAV_ITEMS.find(item => item.label === '发现人才')?.href || '/'} passHref>
                  <Button variant="outline">浏览人才</Button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </PageWrapper>
  );
}
