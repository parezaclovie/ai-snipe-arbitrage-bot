
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon: Icon,
  description,
  trend,
  trendValue,
  className
}) => {
  return (
    <Card className={cn("overflow-hidden transition-all duration-200 hover:shadow-md", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        <div className="h-8 w-8 rounded-md bg-primary/10 p-1.5 text-primary">
          <Icon className="h-full w-full" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {(description || trend) && (
          <p className="mt-2 text-xs text-muted-foreground">
            {description}
            {trend && trendValue && (
              <span className={cn(
                "ml-1 font-medium",
                trend === 'up' ? "text-green-600" : 
                trend === 'down' ? "text-red-600" : 
                "text-muted-foreground"
              )}>
                {trend === 'up' && '+'}{trendValue}
              </span>
            )}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;
