import type { LucideIcon } from 'lucide-react';

interface PageTitleProps {
  title: string;
  icon?: LucideIcon;
  description?: string;
  className?: string;
}

export function PageTitle({ title, icon: Icon, description, className }: PageTitleProps) {
  return (
    <div className={`mb-8 ${className || ''}`}>
      <div className="flex items-center gap-3">
        {Icon && <Icon className="h-8 w-8 text-primary" />}
        <h1 className="text-3xl font-bold tracking-tight text-foreground">{title}</h1>
      </div>
      {description && <p className="mt-2 text-lg text-muted-foreground">{description}</p>}
    </div>
  );
}
