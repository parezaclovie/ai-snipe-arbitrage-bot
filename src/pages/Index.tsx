
import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import TokenPriceDisplay from '@/components/dashboard/TokenPriceDisplay';
import StatsCard from '@/components/dashboard/StatsCard';
import ArbitrageOpportunity, { ArbitrageOpportunityProps } from '@/components/dashboard/ArbitrageOpportunity';
import PriceChart from '@/components/dashboard/PriceChart';
import TokenTable, { Token } from '@/components/dashboard/TokenTable';
import { BarChart2, Zap, DollarSign, Shield, CircleDollarSign, Clock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

// Mock data for the dashboard
const topTokens = [
  { name: 'Ethereum', symbol: 'ETH', price: 2895.42, change: 3.42, logoUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
  { name: 'Bitcoin', symbol: 'BTC', price: 56289.73, change: 2.18, logoUrl: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
  { name: 'Solana', symbol: 'SOL', price: 102.35, change: 7.64, logoUrl: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
  { name: 'Binance Coin', symbol: 'BNB', price: 508.91, change: -1.23, logoUrl: 'https://cryptologos.cc/logos/bnb-bnb-logo.png' },
];

const arbitrageOpportunities: ArbitrageOpportunityProps[] = [
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
];

// Mock data for price chart
const generateChartData = (basePrice: number, points: number = 24) => {
  const data = [];
  for (let i = 0; i < points; i++) {
    const time = new Date(Date.now() - (points - i) * 3600000);
    const variance = (Math.random() - 0.5) * basePrice * 0.05;
    const price = basePrice + variance + (i * basePrice * 0.001);
    data.push({
      time: `${time.getHours().toString().padStart(2, '0')}:00`,
      price: parseFloat(price.toFixed(2))
    });
  }
  return data;
};

const ethChartData = generateChartData(2895.42);

// Mock data for tokens table
const mockTokens: Token[] = [
  {
    id: '1',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 2895.42,
    change24h: 3.42,
    marketCap: 342_000_000_000,
    volume24h: 25_600_000_000,
    riskScore: 95,
    logoUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    hasMEVProtection: true,
    isFlashbots: true
  },
  {
    id: '2',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 56289.73,
    change24h: 2.18,
    marketCap: 1_082_000_000_000,
    volume24h: 45_800_000_000,
    riskScore: 97,
    logoUrl: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    hasMEVProtection: true,
    isFlashbots: false
  },
  {
    id: '3',
    name: 'Solana',
    symbol: 'SOL',
    price: 102.35,
    change24h: 7.64,
    marketCap: 42_800_000_000,
    volume24h: 5_200_000_000,
    riskScore: 84,
    logoUrl: 'https://cryptologos.cc/logos/solana-sol-logo.png',
    hasMEVProtection: false,
    isFlashbots: false
  },
  {
    id: '4',
    name: 'Binance Coin',
    symbol: 'BNB',
    price: 508.91,
    change24h: -1.23,
    marketCap: 79_300_000_000,
    volume24h: 2_800_000_000,
    riskScore: 89,
    logoUrl: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
    hasMEVProtection: true,
    isFlashbots: true
  },
  {
    id: '5',
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.448,
    change24h: 1.05,
    marketCap: 15_700_000_000,
    volume24h: 823_000_000,
    riskScore: 81,
    logoUrl: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
    hasMEVProtection: false,
    isFlashbots: false
  },
  {
    id: '6',
    name: 'XRP',
    symbol: 'XRP',
    price: 0.512,
    change24h: -0.87,
    marketCap: 26_900_000_000,
    volume24h: 1_450_000_000,
    riskScore: 76,
    logoUrl: 'https://cryptologos.cc/logos/xrp-xrp-logo.png',
    hasMEVProtection: false,
    isFlashbots: false
  },
  {
    id: '7',
    name: 'Dogecoin',
    symbol: 'DOGE',
    price: 0.124,
    change24h: 5.32,
    marketCap: 16_400_000_000,
    volume24h: 1_200_000_000,
    riskScore: 65,
    logoUrl: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png',
    hasMEVProtection: false,
    isFlashbots: false
  },
  {
    id: '8',
    name: 'Chainlink',
    symbol: 'LINK',
    price: 15.63,
    change24h: 4.21,
    marketCap: 8_700_000_000,
    volume24h: 567_000_000,
    riskScore: 82,
    logoUrl: 'https://cryptologos.cc/logos/chainlink-link-logo.png',
    hasMEVProtection: true,
    isFlashbots: false
  },
  {
    id: '9',
    name: 'Uniswap',
    symbol: 'UNI',
    price: 7.28,
    change24h: 2.45,
    marketCap: 4_200_000_000,
    volume24h: 287_000_000,
    riskScore: 79,
    logoUrl: 'https://cryptologos.cc/logos/uniswap-uni-logo.png',
    hasMEVProtection: true,
    isFlashbots: true
  }
];

const Dashboard: React.FC = () => {
  const [chartTimeFrame, setChartTimeFrame] = useState('24h');

  return (
    <PageLayout>
      <div className="space-y-10 animate-fade-in">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            AI-powered insights for Ethereum trading and arbitrage opportunities.
          </p>
        </div>

        {/* Top tokens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topTokens.map((token, i) => (
            <TokenPriceDisplay
              key={token.symbol}
              name={token.name}
              symbol={token.symbol}
              price={token.price}
              change={token.change}
              logoUrl={token.logoUrl}
              className="animate-slide-in"
              style={{ animationDelay: `${i * 50}ms` }}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Total Trades"
            value="842"
            icon={BarChart2}
            description="Last 30 days"
            trend="up"
            trendValue="12.5%"
          />
          <StatsCard
            title="MEV Protected"
            value="98.2%"
            icon={Shield}
            description="Trades secured"
          />
          <StatsCard
            title="Gas Saved"
            value="Ξ 4.23"
            icon={Zap}
            description="Last 30 days"
            trend="up"
            trendValue="32.7%"
          />
          <StatsCard
            title="Total Profit"
            value="$14,289.35"
            icon={CircleDollarSign}
            description="Last 30 days"
            trend="up"
            trendValue="23.4%"
          />
        </div>

        {/* Price Chart and Arbitrage Opportunities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <PriceChart
            title="ETH Price"
            description="Real-time Ethereum price data"
            data={ethChartData}
            timeFrames={[
              { value: '1h', label: '1H' },
              { value: '24h', label: '24H' },
              { value: '7d', label: '7D' },
              { value: '30d', label: '30D' },
            ]}
            selectedTimeFrame={chartTimeFrame}
            onTimeFrameChange={setChartTimeFrame}
            className="lg:col-span-2"
            lineColor="#3b82f6"
          />
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Arbitrage Opportunities</CardTitle>
              <CardDescription>AI-detected price differences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {arbitrageOpportunities.map((opportunity, index) => (
                <ArbitrageOpportunity
                  key={opportunity.id}
                  {...opportunity}
                  className={index === arbitrageOpportunities.length - 1 ? "" : "border-b pb-4"}
                />
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Tokens Table */}
        <Tabs defaultValue="tokens" className="w-full">
          <TabsList>
            <TabsTrigger value="tokens">Tokens</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="arbitrage">Arbitrage</TabsTrigger>
          </TabsList>
          <TabsContent value="tokens" className="py-4">
            <TokenTable tokens={mockTokens} />
          </TabsContent>
          <TabsContent value="transactions" className="py-4">
            <div className="rounded-md border p-12 flex justify-center items-center">
              <div className="text-center text-muted-foreground">
                <Clock className="mx-auto h-12 w-12 opacity-50 mb-2" />
                <h3 className="text-lg font-medium">Transaction History</h3>
                <p className="max-w-md mx-auto mt-2">
                  Connect your wallet to view your transaction history and trading performance.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="arbitrage" className="py-4">
            <div className="rounded-md border p-12 flex justify-center items-center">
              <div className="text-center text-muted-foreground">
                <DollarSign className="mx-auto h-12 w-12 opacity-50 mb-2" />
                <h3 className="text-lg font-medium">Arbitrage History</h3>
                <p className="max-w-md mx-auto mt-2">
                  Connect your wallet to view your arbitrage execution history and profit analytics.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
