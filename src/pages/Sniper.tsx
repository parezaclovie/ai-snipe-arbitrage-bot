
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Search, Zap, Shield, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Sniper: React.FC = () => {
  return (
    <PageLayout>
      <div className="space-y-10 animate-fade-in">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Token Sniper</h1>
          <p className="text-muted-foreground">
            Find and trade new tokens with AI-powered risk assessment and MEV protection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Sniper Settings</CardTitle>
              <CardDescription>Configure your token sniping parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="token-address">Token Address</Label>
                    <div className="flex w-full items-center space-x-2">
                      <Input id="token-address" placeholder="0x..." />
                      <Button variant="outline" size="icon">
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount (ETH)</Label>
                    <Input id="amount" type="number" placeholder="0.1" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="slippage">Slippage Tolerance</Label>
                    <span className="text-sm text-muted-foreground">5%</span>
                  </div>
                  <Slider id="slippage" defaultValue={[5]} max={20} step={0.5} />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch id="gas-boost" />
                  <Label htmlFor="gas-boost">Gas Boost (Fast Execution)</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch id="mev-protection" defaultChecked />
                  <Label htmlFor="mev-protection">MEV Protection</Label>
                  <Badge variant="outline" className="ml-2 bg-blue-50 text-blue-700 border-blue-200">
                    <Shield className="mr-1 h-3 w-3" />
                    Recommended
                  </Badge>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch id="flashbots" defaultChecked />
                  <Label htmlFor="flashbots">Use Flashbots</Label>
                  <Badge variant="outline" className="ml-2 bg-blue-50 text-blue-700 border-blue-200">
                    <Zap className="mr-1 h-3 w-3" />
                    Private TX
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="custom-data">Custom Transaction Data (Optional)</Label>
                  <Textarea id="custom-data" placeholder="0x..." />
                </div>
              </div>
              
              <Button className="w-full" size="lg">
                <Zap className="mr-2 h-4 w-4" />
                Execute Snipe
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>AI Risk Assessment</CardTitle>
              <CardDescription>Real-time token analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2 text-center">
                <AlertTriangle className="mx-auto h-12 w-12 text-amber-500" />
                <p className="font-medium">Enter a token address to analyze</p>
                <p className="text-sm text-muted-foreground">
                  Our AI will scan for potential risks and provide a comprehensive assessment.
                </p>
              </div>
              
              <div className="border rounded-lg p-4 bg-secondary/50">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Contract Verified</span>
                    <span className="text-sm">--</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Honeypot Risk</span>
                    <span className="text-sm">--</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Sell Tax</span>
                    <span className="text-sm">--</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Buy Tax</span>
                    <span className="text-sm">--</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Liquidity Locked</span>
                    <span className="text-sm">--</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Creator Reputation</span>
                    <span className="text-sm">--</span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="mb-2">
                  <Label>AI Confidence Score</Label>
                </div>
                <div className="h-4 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: '0%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>High Risk</span>
                  <span>Low Risk</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Sniper History</CardTitle>
            <CardDescription>Your recent token snipes and performance</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="active">
              <TabsList>
                <TabsTrigger value="active">Active Trades</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
              <TabsContent value="active" className="py-4">
                <div className="text-center p-12 text-muted-foreground">
                  <p>Connect your wallet to view active trades.</p>
                </div>
              </TabsContent>
              <TabsContent value="completed" className="py-4">
                <div className="text-center p-12 text-muted-foreground">
                  <p>Connect your wallet to view completed trades.</p>
                </div>
              </TabsContent>
              <TabsContent value="analytics" className="py-4">
                <div className="text-center p-12 text-muted-foreground">
                  <p>Connect your wallet to view trading analytics.</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Sniper;
