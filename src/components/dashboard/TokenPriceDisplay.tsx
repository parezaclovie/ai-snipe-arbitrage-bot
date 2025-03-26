
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TokenPriceDisplayProps {
  name: string;
  symbol: string;
  price: number;
  change: number;
  logoUrl?: string;
  className?: string;
}

const TokenPriceDisplay: React.FC<TokenPriceDisplayProps> = ({
  name,
  symbol,
  price,
  change,
  logoUrl,
  className
}) => {
  const positive = change >= 0;
  
  return (
    <Card className={cn("overflow-hidden transition-all duration-200 hover:shadow-md", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          {logoUrl && (
            <img 
              src={logoUrl} 
              alt={`${symbol} logo`} 
              className="w-6 h-6 rounded-full" 
            />
          )}
          <span>{symbol}</span>
          <span className="text-muted-foreground font-normal text-xs">{name}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between">
          <div className="text-2xl font-bold">${price.toLocaleString()}</div>
          <div className={cn(
            "flex items-center text-sm font-medium",
            positive ? "text-green-600" : "text-red-600"
          )}>
            {positive ? <TrendingUp className="mr-1 h-4 w-4" /> : <TrendingDown className="mr-1 h-4 w-4" />}
            {positive && '+'}{change.toFixed(2)}%
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TokenPriceDisplay;
