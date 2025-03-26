
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Paintbrush, Search, Zap, Shield, Sparkles, Box, Image } from 'lucide-react';

const NFTSniper: React.FC = () => {
  return (
    <PageLayout>
      <div className="space-y-10 animate-fade-in">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">NFT Sniper</h1>
          <p className="text-muted-foreground">
            Discover and acquire high-potential NFTs with AI-driven analysis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>NFT Launch Monitor</CardTitle>
              <CardDescription>Track and snipe upcoming NFT drops</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="collection-address">Collection Address</Label>
                  <div className="flex w-full items-center space-x-2">
                    <Input id="collection-address" placeholder="0x..." />
                    <Button variant="outline" size="icon">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="max-price">Maximum Price (ETH)</Label>
                    <Input id="max-price" type="number" placeholder="0.5" defaultValue="0.5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gas-limit">Gas Limit (GWEI)</Label>
                    <Input id="gas-limit" type="number" placeholder="100" defaultValue="100" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="auto-buy" />
                    <Label htmlFor="auto-buy">Auto-Buy Enabled</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="gas-boost-nft" defaultChecked />
                    <Label htmlFor="gas-boost-nft">Gas Price Boost</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="mev-protection-nft" defaultChecked />
                    <Label htmlFor="mev-protection-nft">MEV Protection</Label>
                    <Badge variant="outline" className="ml-2 bg-blue-50 text-blue-700 border-blue-200">
                      <Shield className="mr-1 h-3 w-3" />
                      Recommended
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="flashbots-nft" defaultChecked />
                    <Label htmlFor="flashbots-nft">Use Flashbots</Label>
                    <Badge variant="outline" className="ml-2 bg-blue-50 text-blue-700 border-blue-200">
                      <Zap className="mr-1 h-3 w-3" />
                      Private TX
                    </Badge>
                  </div>
                </div>
              </div>
              
              <Button className="w-full" size="lg">
                <Zap className="mr-2 h-4 w-4" />
                Activate NFT Sniper
              </Button>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>AI Collection Analysis</CardTitle>
              <CardDescription>Smart metrics for NFT collections</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2 text-center">
                <Paintbrush className="mx-auto h-12 w-12 text-primary opacity-70" />
                <p className="font-medium">Enter a collection address to analyze</p>
                <p className="text-sm text-muted-foreground">
                  Our AI will evaluate the collection potential and rarity metrics.
                </p>
              </div>
              
              <div className="border rounded-lg p-4 bg-secondary/50">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Floor Price</span>
                    <span className="text-sm">--</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">24h Volume</span>
                    <span className="text-sm">--</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Unique Holders</span>
                    <span className="text-sm">--</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Total Supply</span>
                    <span className="text-sm">--</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Creator Reputation</span>
                    <span className="text-sm">--</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Growth Potential</span>
                    <span className="text-sm">--</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Drops</CardTitle>
            <CardDescription>AI-curated high potential NFT launches</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <div className="aspect-square bg-muted/60 relative overflow-hidden rounded-t-lg flex items-center justify-center">
                    <Image className="h-12 w-12 text-muted-foreground/50" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-background/70 backdrop-blur-sm">
                      <div className="flex justify-between items-center">
                        <Badge variant="outline">Upcoming</Badge>
                        <span className="text-xs font-medium">2d 14h</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium">Crypto Punks {i}</h3>
                    <div className="flex justify-between items-center mt-1 text-sm">
                      <span className="text-muted-foreground">Floor:</span>
                      <span className="font-medium">0.{5 * i} ETH</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="outline" size="sm" className="w-full">
                      <Sparkles className="mr-2 h-3 w-3" />
                      Set Alert
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>My Collection</CardTitle>
            <CardDescription>View and manage your NFT portfolio</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="portfolio">
              <TabsList>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
                <TabsTrigger value="sniper">Sniper History</TabsTrigger>
              </TabsList>
              <TabsContent value="portfolio" className="py-4">
                <div className="text-center p-12 text-muted-foreground">
                  <Box className="mx-auto h-12 w-12 opacity-30 mb-2" />
                  <p className="font-medium">Connect your wallet to view your NFTs</p>
                  <p className="text-sm max-w-md mx-auto mt-2">
                    Your NFT portfolio will appear here after connecting your wallet.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="watchlist" className="py-4">
                <div className="text-center p-12 text-muted-foreground">
                  <p>Add collections to your watchlist to track them here.</p>
                </div>
              </TabsContent>
              <TabsContent value="sniper" className="py-4">
                <div className="text-center p-12 text-muted-foreground">
                  <p>Your NFT sniper history will appear here after connecting your wallet.</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default NFTSniper;
