
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { 
  Settings as SettingsIcon, 
  Wallet, 
  Bell, 
  ShieldAlert, 
  Zap, 
  Bot, 
  Globe, 
  Key,
  BarChart2
} from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <PageLayout>
      <div className="space-y-10 animate-fade-in">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Configure your trading bot parameters and preferences.
          </p>
        </div>
        
        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="wallets">Wallets</TabsTrigger>
            <TabsTrigger value="api">API Keys</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>Configure basic bot behavior</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="default-network">Default Network</Label>
                  <Select defaultValue="ethereum">
                    <SelectTrigger id="default-network">
                      <SelectValue placeholder="Select network" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ethereum">Ethereum Mainnet</SelectItem>
                      <SelectItem value="bsc">Binance Smart Chain</SelectItem>
                      <SelectItem value="polygon">Polygon</SelectItem>
                      <SelectItem value="arbitrum">Arbitrum</SelectItem>
                      <SelectItem value="optimism">Optimism</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="default-dex">Default DEX</Label>
                  <Select defaultValue="uniswap">
                    <SelectTrigger id="default-dex">
                      <SelectValue placeholder="Select DEX" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="uniswap">Uniswap V3</SelectItem>
                      <SelectItem value="sushiswap">SushiSwap</SelectItem>
                      <SelectItem value="curve">Curve</SelectItem>
                      <SelectItem value="balancer">Balancer</SelectItem>
                      <SelectItem value="pancakeswap">PancakeSwap</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="default-slippage">Default Slippage (%)</Label>
                    <span className="text-sm text-muted-foreground">0.5%</span>
                  </div>
                  <Slider id="default-slippage" defaultValue={[0.5]} max={5} step={0.1} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="gas-multiplier">Gas Price Multiplier</Label>
                  <Select defaultValue="1.1">
                    <SelectTrigger id="gas-multiplier">
                      <SelectValue placeholder="Select multiplier" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1.0x (Standard)</SelectItem>
                      <SelectItem value="1.1">1.1x (Fast)</SelectItem>
                      <SelectItem value="1.2">1.2x (Faster)</SelectItem>
                      <SelectItem value="1.5">1.5x (Very Fast)</SelectItem>
                      <SelectItem value="2">2.0x (Instant)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Separator />
                
                <div className="space-y-6 pt-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-gas-settings">Auto Gas Settings</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically optimize gas prices based on network conditions.
                      </p>
                    </div>
                    <Switch id="auto-gas-settings" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-slippage">Auto Slippage</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically calculate optimal slippage based on token volatility.
                      </p>
                    </div>
                    <Switch id="auto-slippage" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="dark-mode">Dark Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        Toggle between light and dark interface theme.
                      </p>
                    </div>
                    <Switch id="dark-mode" />
                  </div>
                </div>
                
                <Button>
                  <SettingsIcon className="mr-2 h-4 w-4" />
                  Save General Settings
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>AI Settings</CardTitle>
                <CardDescription>Configure AI-powered trading behavior</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="ai-risk-threshold">AI Risk Tolerance</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger id="ai-risk-threshold">
                      <SelectValue placeholder="Select risk level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="very-low">Very Low (Most Conservative)</SelectItem>
                      <SelectItem value="low">Low (Conservative)</SelectItem>
                      <SelectItem value="medium">Medium (Balanced)</SelectItem>
                      <SelectItem value="high">High (Aggressive)</SelectItem>
                      <SelectItem value="very-high">Very High (Most Aggressive)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="ai-confidence-threshold">Minimum AI Confidence (%)</Label>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <Slider id="ai-confidence-threshold" defaultValue={[75]} max={100} step={5} />
                </div>
                
                <div className="space-y-6 pt-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="ai-auto-trade">AI Auto Trading</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow AI to automatically execute trades based on analysis.
                      </p>
                    </div>
                    <Switch id="ai-auto-trade" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="ai-analytics">AI Analytics</Label>
                      <p className="text-sm text-muted-foreground">
                        Use AI to analyze trading patterns and suggest optimizations.
                      </p>
                    </div>
                    <Switch id="ai-analytics" defaultChecked />
                  </div>
                </div>
                
                <Button>
                  <Bot className="mr-2 h-4 w-4" />
                  Save AI Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="wallets" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Connected Wallets</CardTitle>
                <CardDescription>Manage wallet connections and permissions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-12 text-muted-foreground">
                  <Wallet className="mx-auto h-12 w-12 opacity-30 mb-2" />
                  <p className="font-medium">No wallets connected</p>
                  <p className="text-sm max-w-md mx-auto mt-2">
                    Connect a wallet to manage your trading accounts and permissions.
                  </p>
                  <Button className="mt-4">
                    <Wallet className="mr-2 h-4 w-4" />
                    Connect Wallet
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="api" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>API Keys & Integrations</CardTitle>
                <CardDescription>Manage external API connections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="flashbots-key">Flashbots Relay Key</Label>
                    <div className="flex w-full items-center space-x-2">
                      <Input id="flashbots-key" type="password" placeholder="••••••••••••••••" />
                      <Button variant="outline">Verify</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="etherscan-key">Etherscan API Key</Label>
                    <div className="flex w-full items-center space-x-2">
                      <Input id="etherscan-key" type="password" placeholder="••••••••••••••••" />
                      <Button variant="outline">Verify</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="infura-key">Infura Project ID</Label>
                    <div className="flex w-full items-center space-x-2">
                      <Input id="infura-key" type="password" placeholder="••••••••••••••••" />
                      <Button variant="outline">Verify</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="telegram-bot">Telegram Bot Token</Label>
                    <div className="flex w-full items-center space-x-2">
                      <Input id="telegram-bot" type="password" placeholder="••••••••••••••••" />
                      <Button variant="outline">Verify</Button>
                    </div>
                  </div>
                </div>
                
                <Button>
                  <Key className="mr-2 h-4 w-4" />
                  Save API Keys
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Configure alerts and notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Notification Channels</Label>
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <span>Browser Notifications</span>
                      </div>
                      <Switch id="browser-notifications" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Bell className="h-4 w-4 text-muted-foreground" />
                        <span>Telegram Alerts</span>
                      </div>
                      <Switch id="telegram-notifications" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <BarChart2 className="h-4 w-4 text-muted-foreground" />
                        <span>Daily Summary Reports</span>
                      </div>
                      <Switch id="daily-reports" defaultChecked />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label>Alert Types</Label>
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="flex items-center space-x-2">
                          <Zap className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Transaction Alerts</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Notify when transactions are executed or fail.
                        </p>
                      </div>
                      <Switch id="transaction-alerts" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="flex items-center space-x-2">
                          <ShieldAlert className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Security Alerts</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Notify about MEV attacks and security issues.
                        </p>
                      </div>
                      <Switch id="security-alerts" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="flex items-center space-x-2">
                          <Bot className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">AI Recommendations</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Notify about AI-detected trading opportunities.
                        </p>
                      </div>
                      <Switch id="ai-alerts" defaultChecked />
                    </div>
                  </div>
                </div>
                
                <Button>
                  <Bell className="mr-2 h-4 w-4" />
                  Save Notification Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Settings;
