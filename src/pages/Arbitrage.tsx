
import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ArrowRight, ArrowDown, Zap, AlertCircle, DollarSign, ArrowRightLeft } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ArbitrageOpportunityProps } from '@/components/dashboard/ArbitrageOpportunity';

// Mock data for arbitrage opportunities
const mockArbitrageOpportunities: ArbitrageOpportunityProps[] = [
  {
    id: '1',
    token: { name: 'Ethereum', symbol: 'ETH', logoUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
    buyDex: 'Uniswap V3',
    sellDex: 'SushiSwap',
    profitPercentage: 1.23,
    estimatedProfit: 52.47,
    timeRemaining: 45,
    aiConfidence: 87,
    flashbots: true
  },
  {
    id: '2',
    token: { name: 'UNI Token', symbol: 'UNI', logoUrl: 'https://cryptologos.cc/logos/uniswap-uni-logo.png' },
    buyDex: 'Curve',
    sellDex: 'Uniswap V3',
    profitPercentage: 0.86,
    estimatedProfit: 31.22,
    timeRemaining: 30,
    aiConfidence: 74,
    flashbots: false
  },
  {
    id: '3',
    token: { name: 'Chainlink', symbol: 'LINK', logoUrl: 'https://cryptologos.cc/logos/chainlink-link-logo.png' },
    buyDex: 'PancakeSwap',
    sellDex: 'SushiSwap',
    profitPercentage: 1.58,
    estimatedProfit: 42.36,
    timeRemaining: 60,
    aiConfidence: 92,
    flashbots: true
  },
  {
    id: '4',
    token: { name: 'Aave', symbol: 'AAVE', logoUrl: 'https://cryptologos.cc/logos/aave-aave-logo.png' },
    buyDex: 'Balancer',
    sellDex: 'Uniswap V3',
    profitPercentage: 0.95,
    estimatedProfit: 28.17,
    timeRemaining: 25,
    aiConfidence: 81,
    flashbots: true
  },
];

const Arbitrage: React.FC = () => {
  const [scanActive, setScanActive] = useState(false);
  
  return (
    <PageLayout>
      <div className="space-y-10 animate-fade-in">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Arbitrage Finder</h1>
          <p className="text-muted-foreground">
            Discover and execute cross-DEX arbitrage opportunities with AI-optimized routing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="md:col-span-2 lg:col-span-2">
            <CardHeader>
              <CardTitle>Arbitrage Scanner</CardTitle>
              <CardDescription>Configure your arbitrage parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="min-profit">Minimum Profit (%)</Label>
                    <Input id="min-profit" type="number" placeholder="0.5" defaultValue="0.5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-amount">Maximum Amount (ETH)</Label>
                    <Input id="max-amount" type="number" placeholder="1.0" defaultValue="1.0" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="from-dex">From DEXes</Label>
                    <Select defaultValue="all">
                      <SelectTrigger id="from-dex">
                        <SelectValue placeholder="Select DEXes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All DEXes</SelectItem>
                        <SelectItem value="uniswap">Uniswap</SelectItem>
                        <SelectItem value="sushiswap">SushiSwap</SelectItem>
                        <SelectItem value="curve">Curve</SelectItem>
                        <SelectItem value="balancer">Balancer</SelectItem>
                        <SelectItem value="pancakeswap">PancakeSwap</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="to-dex">To DEXes</Label>
                    <Select defaultValue="all">
                      <SelectTrigger id="to-dex">
                        <SelectValue placeholder="Select DEXes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All DEXes</SelectItem>
                        <SelectItem value="uniswap">Uniswap</SelectItem>
                        <SelectItem value="sushiswap">SushiSwap</SelectItem>
                        <SelectItem value="curve">Curve</SelectItem>
                        <SelectItem value="balancer">Balancer</SelectItem>
                        <SelectItem value="pancakeswap">PancakeSwap</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tokens">Tokens to Monitor</Label>
                  <Select defaultValue="major">
                    <SelectTrigger id="tokens">
                      <SelectValue placeholder="Select tokens" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Tokens</SelectItem>
                      <SelectItem value="major">Major Tokens</SelectItem>
                      <SelectItem value="custom">Custom List</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="auto-execute" />
                    <Label htmlFor="auto-execute">Auto-Execute Trades</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="flashbots-arb" defaultChecked />
                    <Label htmlFor="flashbots-arb">Use Flashbots</Label>
                    <Badge variant="outline" className="ml-2 bg-blue-50 border-blue-200 text-blue-700">
                      <Zap className="mr-1 h-3 w-3" />
                      Private TX
                    </Badge>
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full"
                size="lg"
                variant={scanActive ? "destructive" : "default"}
                onClick={() => setScanActive(!scanActive)}
              >
                {scanActive ? (
                  <>
                    <AlertCircle className="mr-2 h-4 w-4" />
                    Stop Scanning
                  </>
                ) : (
                  <>
                    <ArrowRightLeft className="mr-2 h-4 w-4" />
                    Start Scanning
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Performance</CardTitle>
              <CardDescription>Arbitrage statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Today's Profit</span>
                    <span className="font-bold text-green-600">+$124.38</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Weekly Profit</span>
                    <span className="font-bold text-green-600">+$842.75</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Success Rate</span>
                    <span className="font-medium">98.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Total Executions</span>
                    <span className="font-medium">125</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Avg. Profit/Trade</span>
                    <span className="font-medium text-green-600">+$6.74</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Gas Efficiency</span>
                    <span className="text-sm font-medium text-green-600">High</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full" style={{ width: '87%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Live Opportunities</CardTitle>
            <CardDescription>Current cross-DEX arbitrage opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Opportunities</TabsTrigger>
                <TabsTrigger value="highconf">High Confidence</TabsTrigger>
                <TabsTrigger value="executed">Executed</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="py-4">
                {scanActive ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mockArbitrageOpportunities.map((opportunity) => (
                      <Card key={opportunity.id} className="overflow-hidden">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-2">
                              {opportunity.token.logoUrl && (
                                <img 
                                  src={opportunity.token.logoUrl} 
                                  alt={`${opportunity.token.symbol} logo`} 
                                  className="w-6 h-6 rounded-full" 
                                />
                              )}
                              <div>
                                <div className="font-medium">{opportunity.token.symbol}</div>
                                <div className="text-xs text-muted-foreground">{opportunity.token.name}</div>
                              </div>
                            </div>
                            <Badge 
                              variant="outline" 
                              className={
                                opportunity.aiConfidence > 80 
                                  ? "bg-green-50 text-green-700 border-green-200" 
                                  : opportunity.aiConfidence > 50 
                                    ? "bg-amber-50 text-amber-700 border-amber-200"
                                    : "bg-red-50 text-red-700 border-red-200"
                              }
                            >
                              {opportunity.aiConfidence}% AI confidence
                            </Badge>
                          </div>
                          
                          <div className="flex items-center justify-between my-3">
                            <div className="text-sm font-medium">{opportunity.buyDex}</div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground" />
                            <div className="text-sm font-medium">{opportunity.sellDex}</div>
                          </div>
                          
                          <div className="flex justify-between items-baseline mb-3">
                            <div className="text-lg font-bold text-green-600">
                              +{opportunity.profitPercentage.toFixed(2)}%
                            </div>
                            <div className="text-sm">
                              Est. profit: <span className="font-medium">${opportunity.estimatedProfit.toFixed(2)}</span>
                            </div>
                          </div>
                          
                          <Button className="w-full" size="sm">Execute Trade</Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-12 text-muted-foreground">
                    <ArrowRightLeft className="mx-auto h-12 w-12 opacity-30 mb-2" />
                    <p className="font-medium">Scanner is currently inactive</p>
                    <p className="text-sm max-w-md mx-auto mt-2">
                      Start the arbitrage scanner to discover real-time opportunities across multiple DEXes.
                    </p>
                  </div>
                )}
              </TabsContent>
              <TabsContent value="highconf" className="py-4">
                <div className="text-center p-12 text-muted-foreground">
                  <DollarSign className="mx-auto h-12 w-12 opacity-30 mb-2" />
                  <p className="font-medium">High confidence opportunities</p>
                  <p className="text-sm max-w-md mx-auto mt-2">
                    Start the scanner to view arbitrage opportunities with AI confidence score above 80%.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="executed" className="py-4">
                <div className="text-center p-12 text-muted-foreground">
                  <p>Connect your wallet to view executed arbitrage trades.</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Arbitrage;
