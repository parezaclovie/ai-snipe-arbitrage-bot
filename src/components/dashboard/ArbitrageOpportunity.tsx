
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, RefreshCw, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ArbitrageOpportunityProps {
  id: string;
  token: {
    name: string;
    symbol: string;
    logoUrl?: string;
  };
  buyDex: string;
  sellDex: string;
  profitPercentage: number;
  estimatedProfit: number;
  timeRemaining?: number;
  aiConfidence?: number;
  flashbots?: boolean;
  className?: string;
}

const ArbitrageOpportunity: React.FC<ArbitrageOpportunityProps> = ({
  id,
  token,
  buyDex,
  sellDex,
  profitPercentage,
  estimatedProfit,
  timeRemaining,
  aiConfidence,
  flashbots = false,
  className
}) => {
  const confidenceColor = aiConfidence 
    ? aiConfidence > 80 
      ? 'bg-green-100 text-green-800 border-green-200' 
      : aiConfidence > 50 
        ? 'bg-amber-100 text-amber-800 border-amber-200'
        : 'bg-red-100 text-red-800 border-red-200'
    : '';

  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-200 hover:shadow-md", 
      className
    )}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {token.logoUrl && (
              <img 
                src={token.logoUrl} 
                alt={`${token.symbol} logo`} 
                className="w-6 h-6 rounded-full" 
              />
            )}
            <CardTitle className="text-base font-semibold">
              {token.symbol}
              <span className="ml-1 text-xs font-normal text-muted-foreground">
                {token.name}
              </span>
            </CardTitle>
          </div>
          <div className="flex items-center space-x-2">
            {flashbots && (
              <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-700 flex items-center gap-1">
                <Zap className="h-3 w-3" />
                Flashbots
              </Badge>
            )}
            <Badge 
              variant="outline" 
              className={cn(
                "font-medium",
                confidenceColor || "bg-secondary text-secondary-foreground"
              )}
            >
              {aiConfidence ? `${aiConfidence}% AI confidence` : 'Analyzing...'}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex items-center justify-between my-3">
          <div className="text-sm font-medium">
            {buyDex}
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground" />
          <div className="text-sm font-medium">
            {sellDex}
          </div>
        </div>
        <div className="flex justify-between items-baseline">
          <div className="text-lg font-bold text-green-600">
            +{profitPercentage.toFixed(2)}%
          </div>
          <div className="text-sm">
            Est. profit: <span className="font-medium">${estimatedProfit.toFixed(2)}</span>
          </div>
        </div>
        {timeRemaining !== undefined && (
          <div className="mt-2 text-xs text-muted-foreground flex items-center">
            <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
            Opportunity expires in {timeRemaining}s
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0">
        <Button className="w-full" size="sm">
          Execute Trade
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ArbitrageOpportunity;
