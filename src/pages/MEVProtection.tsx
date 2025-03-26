
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle2, 
  Zap, 
  Eye, 
  EyeOff, 
  Info,
  Timer,
  DollarSign,
  ShieldOff
} from 'lucide-react';

const MEVProtection: React.FC = () => {
  return (
    <PageLayout>
      <div className="space-y-10 animate-fade-in">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">MEV Protection</h1>
          <p className="text-muted-foreground">
            Guard your transactions against frontrunning and sandwich attacks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Protection Settings</CardTitle>
              <CardDescription>Configure your MEV protection strategies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 rounded-lg border border-green-200 bg-green-50 flex items-start">
                <Shield className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-green-800 font-medium">MEV Protection is active</p>
                  <p className="text-sm text-green-700 mt-1">
                    Your transactions are protected from frontrunning and sandwich attacks.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="space-y-0.5 flex-1">
                    <Label htmlFor="flashbots-protection" className="text-base">Flashbots Protection</Label>
                    <p className="text-sm text-muted-foreground">
                      Send transactions directly to miners to avoid the public mempool.
                    </p>
                  </div>
                  <div className="flex items-center h-6">
                    <Switch id="flashbots-protection" defaultChecked />
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="space-y-0.5 flex-1">
                    <Label htmlFor="slippage-protection" className="text-base">Slippage Protection</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically set optimal slippage to avoid sandwich attacks.
                    </p>
                  </div>
                  <div className="flex items-center h-6">
                    <Switch id="slippage-protection" defaultChecked />
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="space-y-0.5 flex-1">
                    <Label htmlFor="time-lock" className="text-base">Transaction Time Lock</Label>
                    <p className="text-sm text-muted-foreground">
                      Delay transaction execution to detect malicious patterns.
                    </p>
                  </div>
                  <div className="flex items-center h-6">
                    <Switch id="time-lock" />
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="space-y-0.5 flex-1">
                    <Label htmlFor="ai-monitoring" className="text-base">AI Risk Monitoring</Label>
                    <p className="text-sm text-muted-foreground">
                      Use AI to detect and prevent potential MEV attacks in real-time.
                    </p>
                  </div>
                  <div className="flex items-center h-6">
                    <Switch id="ai-monitoring" defaultChecked />
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="space-y-0.5 flex-1">
                    <div className="flex items-center">
                      <Label htmlFor="stealth-mode" className="text-base">Stealth Mode</Label>
                      <Badge variant="outline" className="ml-2 bg-blue-50 text-blue-700 border-blue-200">
                        Premium
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Advanced obfuscation techniques to hide transaction intent.
                    </p>
                  </div>
                  <div className="flex items-center h-6">
                    <Switch id="stealth-mode" />
                  </div>
                </div>
              </div>
              
              <Button className="w-full" size="lg">
                <Shield className="mr-2 h-4 w-4" />
                Update Protection Settings
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Protection Status</CardTitle>
              <CardDescription>Current MEV protection metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <span className="text-sm font-medium">Protection Level</span>
                    <div className="flex items-center">
                      <span className="font-bold text-green-600">High</span>
                      <CheckCircle2 className="h-4 w-4 text-green-600 ml-1" />
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-secondary/70">
                    <div className="text-sm font-medium mb-1">Attacks Blocked</div>
                    <div className="text-2xl font-bold">24</div>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/70">
                    <div className="text-sm font-medium mb-1">Savings</div>
                    <div className="text-2xl font-bold text-green-600">Ξ 0.38</div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4 bg-secondary/50">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Frontrunning Protection</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        <CheckCircle2 className="mr-1 h-3 w-3" />
                        Active
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Sandwich Attack Defense</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        <CheckCircle2 className="mr-1 h-3 w-3" />
                        Active
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Mempool Privacy</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        <EyeOff className="mr-1 h-3 w-3" />
                        Private
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Stealth Mode</span>
                      <Badge variant="outline" className="bg-muted text-muted-foreground border-input">
                        Inactive
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Protection History</CardTitle>
            <CardDescription>Recent MEV protection activity</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="attacks">
              <TabsList>
                <TabsTrigger value="attacks">Attacks Blocked</TabsTrigger>
                <TabsTrigger value="transactions">Protected Transactions</TabsTrigger>
                <TabsTrigger value="savings">Savings</TabsTrigger>
              </TabsList>
              <TabsContent value="attacks" className="py-4">
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start space-x-4 p-4 rounded-lg border bg-card">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex-shrink-0 flex items-center justify-center">
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Frontrunning Attempt Blocked</div>
                          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">High Risk</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Transaction to swap ETH for TOKEN would have been frontrun by MEV bots.
                        </p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Timer className="h-3 w-3 mr-1" />
                          {i} hour{i !== 1 ? 's' : ''} ago
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="transactions" className="py-4">
                <div className="text-center p-12 text-muted-foreground">
                  <Shield className="mx-auto h-12 w-12 opacity-30 mb-2" />
                  <p className="font-medium">Protected transaction history</p>
                  <p className="text-sm max-w-md mx-auto mt-2">
                    Connect your wallet to view your protected transaction history.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="savings" className="py-4">
                <div className="text-center p-12 text-muted-foreground">
                  <DollarSign className="mx-auto h-12 w-12 opacity-30 mb-2" />
                  <p className="font-medium">Protection savings analysis</p>
                  <p className="text-sm max-w-md mx-auto mt-2">
                    Connect your wallet to view a detailed breakdown of your savings from MEV protection.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <Card className="bg-amber-50 border-amber-200">
          <CardHeader>
            <CardTitle className="flex items-center text-amber-800">
              <Info className="h-5 w-5 mr-2" />
              MEV Protection Information
            </CardTitle>
          </CardHeader>
          <CardContent className="text-amber-700">
            <div className="space-y-4">
              <p>
                <strong>What is MEV?</strong> Maximal Extractable Value (MEV) refers to the profit miners can extract from users by manipulating transaction order in a block.
              </p>
              <p>
                <strong>Common MEV Attacks:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Frontrunning:</strong> Observing a pending transaction and placing a similar one with higher gas to execute first.
                </li>
                <li>
                  <strong>Sandwich Attacks:</strong> Placing transactions before and after a user's transaction to profit from price movements.
                </li>
                <li>
                  <strong>Backrunning:</strong> Placing a transaction immediately after another to benefit from state changes.
                </li>
              </ul>
              <p>Our protection mechanisms use Flashbots, optimal slippage settings, and AI monitoring to shield your transactions from these common MEV attacks.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default MEVProtection;
