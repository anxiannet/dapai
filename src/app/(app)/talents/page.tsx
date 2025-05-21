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
        title="Find Talents"
        description="Browse skilled individuals ready to help with your tasks."
      />
      
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Input type="search" placeholder="Search by skill, name, or location..." className="pl-10" />
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filters
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
          <p className="text-xl text-muted-foreground">No talents found matching your criteria.</p>
          <p className="text-sm text-muted-foreground mt-2">Try adjusting your search or filters.</p>
        </div>
      )}
    </PageWrapper>
  );
}
