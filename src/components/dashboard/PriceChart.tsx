
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { cn } from '@/lib/utils';

export interface PriceChartProps {
  title: string;
  description?: string;
  data: Array<{
    time: string;
    price: number;
  }>;
  timeFrames?: Array<{
    value: string;
    label: string;
  }>;
  selectedTimeFrame?: string;
  onTimeFrameChange?: (value: string) => void;
  className?: string;
  lineColor?: string;
}

const PriceChart: React.FC<PriceChartProps> = ({
  title,
  description,
  data,
  timeFrames = [
    { value: '1h', label: '1H' },
    { value: '24h', label: '24H' },
    { value: '7d', label: '7D' },
    { value: '30d', label: '30D' },
  ],
  selectedTimeFrame = '24h',
  onTimeFrameChange,
  className,
  lineColor = "#3b82f6"
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver(entries => {
        for (const entry of entries) {
          setContainerWidth(entry.contentRect.width);
        }
      });
      
      resizeObserver.observe(containerRef.current);
      
      return () => {
        if (containerRef.current) {
          resizeObserver.unobserve(containerRef.current);
        }
      };
    }
  }, []);

  const formatPrice = (value: number) => {
    return `$${value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };

  return (
    <Card className={cn("overflow-hidden", className)} ref={containerRef}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </div>
          <Select 
            value={selectedTimeFrame} 
            onValueChange={onTimeFrameChange}
          >
            <SelectTrigger className="w-[80px]">
              <SelectValue placeholder="Time" />
            </SelectTrigger>
            <SelectContent>
              {timeFrames.map((timeFrame) => (
                <SelectItem key={timeFrame.value} value={timeFrame.value}>
                  {timeFrame.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="p-0 pt-2 h-64 sm:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="time" 
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              tick={{ fontSize: 12 }}
              minTickGap={30}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tickFormatter={formatPrice}
              tick={{ fontSize: 12 }}
              tickMargin={10}
              width={60}
            />
            <Tooltip 
              formatter={(value) => [formatPrice(value as number), 'Price']}
              contentStyle={{ 
                borderRadius: '8px',
                border: '1px solid #eaeaea',
                boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="price" 
              stroke={lineColor} 
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6, strokeWidth: 2, stroke: 'white' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PriceChart;
