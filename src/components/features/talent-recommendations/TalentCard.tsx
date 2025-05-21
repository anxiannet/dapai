import Image from 'next/image';
import type { Talent } from '@/lib/mock-data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Briefcase } from 'lucide-react';

interface TalentCardProps {
  talent: Talent;
}

// Helper to get initials from name
const getInitials = (name: string) => {
  if (!name) return '';
  const names = name.split(' ');
  // For Chinese names, usually take the last one or two characters.
  // This is a simple heuristic, might need refinement for complex names.
  if (/[\u4e00-\u9fa5]/.test(name)) {
    if (names.length > 0) {
      const lastName = names[names.length - 1];
      return lastName.length > 1 ? lastName.substring(lastName.length - 2) : lastName;
    }
  }
  // For non-Chinese names
  if (names.length > 1) {
    return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};


export function TalentCard({ talent }: TalentCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-3">
        <Avatar className="h-16 w-16 border-2 border-primary">
          <AvatarImage src={talent.avatarUrl} alt={talent.name} data-ai-hint="portrait professional" />
          <AvatarFallback>{getInitials(talent.name)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <CardTitle className="text-xl mb-1">{talent.name}</CardTitle>
          <div className="flex items-center text-sm text-muted-foreground mb-1">
            <MapPin className="h-4 w-4 mr-1 text-accent" /> {talent.city}
          </div>
          <div className="flex items-center text-sm">
            <Star className="h-4 w-4 mr-1 text-yellow-400 fill-yellow-400" /> 
            {talent.rating.toFixed(1)} 
            <span className="text-muted-foreground ml-1">({talent.serviceHistoryCount} 次服务)</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-3 h-16 overflow-hidden text-ellipsis">
          {talent.description || "暂无描述。"}
        </p>
        <div className="mb-3">
          <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-1">技能</h4>
          <div className="flex flex-wrap gap-1">
            {talent.skills && talent.skills.length > 0 ? (
              talent.skills.slice(0, 5).map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs bg-accent/20 text-accent-foreground border-accent/30">{skill}</Badge>
              ))
            ) : (
              <span className="text-xs text-muted-foreground">未列出技能。</span>
            )}
            {talent.skills && talent.skills.length > 5 && <Badge variant="outline">+{talent.skills.length - 5} 更多</Badge>}
          </div>
        </div>
        {talent.reviewsSummary && (
           <div>
             <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-1">点评摘要</h4>
             <p className="text-xs text-muted-foreground italic">"{talent.reviewsSummary}"</p>
           </div>
        )}
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          查看资料
        </Button>
      </CardFooter>
    </Card>
  );
}
