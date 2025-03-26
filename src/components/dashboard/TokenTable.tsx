
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ChevronUp, ChevronDown, AlertTriangle, Shield, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface Token {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap?: number;
  volume24h?: number;
  riskScore?: number;
  logoUrl?: string;
  hasMEVProtection?: boolean;
  isFlashbots?: boolean;
}

interface TokenTableProps {
  tokens: Token[];
  className?: string;
}

type SortField = 'name' | 'price' | 'change24h' | 'marketCap' | 'volume24h' | 'riskScore';
type SortDirection = 'asc' | 'desc';

const TokenTable: React.FC<TokenTableProps> = ({ tokens, className }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<SortField>('marketCap');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const getSortedTokens = () => {
    const filteredTokens = tokens.filter(token => 
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return filteredTokens.sort((a, b) => {
      const aValue = a[sortField as keyof Token];
      const bValue = b[sortField as keyof Token];
      
      if (aValue === undefined || bValue === undefined) return 0;
      
      const compareResult = typeof aValue === 'string' 
        ? (aValue as string).localeCompare(bValue as string)
        : Number(aValue) - Number(bValue);
        
      return sortDirection === 'asc' ? compareResult : -compareResult;
    });
  };

  const formatMarketCap = (value?: number) => {
    if (value === undefined) return '--';
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    if (value >= 1e3) return `$${(value / 1e3).toFixed(2)}K`;
    return `$${value.toFixed(2)}`;
  };

  const formatVolume = (value?: number) => {
    if (value === undefined) return '--';
    if (value >= 1e9) return `$${(value / 1e9).toFixed(1)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(1)}M`;
    if (value >= 1e3) return `$${(value / 1e3).toFixed(1)}K`;
    return `$${value.toFixed(0)}`;
  };

  const getRiskBadge = (score?: number) => {
    if (score === undefined) return null;
    
    if (score <= 20) {
      return <Badge variant="outline" className="bg-red-50 border-red-200 text-red-700">High Risk</Badge>;
    } else if (score <= 50) {
      return <Badge variant="outline" className="bg-amber-50 border-amber-200 text-amber-700">Medium Risk</Badge>;
    } else {
      return <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700">Low Risk</Badge>;
    }
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ChevronUp className="h-4 w-4 opacity-0 group-hover:opacity-50" />;
    return sortDirection === 'asc' 
      ? <ChevronUp className="h-4 w-4" /> 
      : <ChevronDown className="h-4 w-4" />;
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          placeholder="Search tokens..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1"
          icon={<Search className="h-4 w-4 opacity-50" />}
        />
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead 
                className="group cursor-pointer"
                onClick={() => handleSort('name')}
              >
                <div className="flex items-center">
                  Token <SortIcon field="name" />
                </div>
              </TableHead>
              <TableHead 
                className="group cursor-pointer text-right"
                onClick={() => handleSort('price')}
              >
                <div className="flex items-center justify-end">
                  Price <SortIcon field="price" />
                </div>
              </TableHead>
              <TableHead 
                className="group cursor-pointer text-right"
                onClick={() => handleSort('change24h')}
              >
                <div className="flex items-center justify-end">
                  24h % <SortIcon field="change24h" />
                </div>
              </TableHead>
              <TableHead 
                className="group cursor-pointer text-right hidden md:table-cell"
                onClick={() => handleSort('marketCap')}
              >
                <div className="flex items-center justify-end">
                  Market Cap <SortIcon field="marketCap" />
                </div>
              </TableHead>
              <TableHead 
                className="group cursor-pointer text-right hidden md:table-cell"
                onClick={() => handleSort('volume24h')}
              >
                <div className="flex items-center justify-end">
                  Volume <SortIcon field="volume24h" />
                </div>
              </TableHead>
              <TableHead 
                className="group cursor-pointer text-center hidden md:table-cell"
                onClick={() => handleSort('riskScore')}
              >
                <div className="flex items-center justify-center">
                  Risk <SortIcon field="riskScore" />
                </div>
              </TableHead>
              <TableHead className="text-right">
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {getSortedTokens().map((token) => (
              <TableRow key={token.id} className="transition-colors hover:bg-muted/50">
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    {token.logoUrl ? (
                      <img src={token.logoUrl} alt={token.name} className="w-6 h-6 rounded-full" />
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        {token.symbol.charAt(0)}
                      </div>
                    )}
                    <div>
                      <div className="font-medium">{token.symbol}</div>
                      <div className="text-xs text-muted-foreground">{token.name}</div>
                    </div>
                    <div className="flex gap-1 ml-1">
                      {token.hasMEVProtection && (
                        <Shield className="h-4 w-4 text-primary" />
                      )}
                      {token.isFlashbots && (
                        <Zap className="h-4 w-4 text-blue-500" />
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium">
                  ${token.price.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 8
                  })}
                </TableCell>
                <TableCell 
                  className={cn(
                    "text-right font-medium",
                    token.change24h >= 0 ? "text-green-600" : "text-red-600"
                  )}
                >
                  {token.change24h >= 0 ? "+" : ""}{token.change24h.toFixed(2)}%
                </TableCell>
                <TableCell className="text-right hidden md:table-cell">
                  {formatMarketCap(token.marketCap)}
                </TableCell>
                <TableCell className="text-right hidden md:table-cell">
                  {formatVolume(token.volume24h)}
                </TableCell>
                <TableCell className="text-center hidden md:table-cell">
                  {getRiskBadge(token.riskScore)}
                </TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="outline">Trade</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TokenTable;
