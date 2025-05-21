import { PageTitle } from '@/components/PageTitle';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { TalentCard } from '@/components/features/talent-recommendations/TalentCard';
import { mockTalents } from '@/lib/mock-data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

export default function TalentsPage() {
  return (
    <PageWrapper>
      <PageTitle
        title="发现人才"
        description="浏览准备好协助您完成任务的专业人士。"
      />
      
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Input type="search" placeholder="按技能、姓名或地点搜索..." className="pl-10" />
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          筛选
        </Button>
      </div>

      {mockTalents.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mockTalents.map((talent) => (
            <TalentCard key={talent.id} talent={talent} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">未找到符合您条件的人才。</p>
          <p className="text-sm text-muted-foreground mt-2">请尝试调整您的搜索或筛选条件。</p>
        </div>
      )}
    </PageWrapper>
  );
}
