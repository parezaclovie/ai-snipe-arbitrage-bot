
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import { Menu, Zap, Wallet, Search, BarChart2, Settings, ChevronDown, Menu as MenuIcon } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [connected, setConnected] = useState(false);
  const isMobile = useIsMobile();

  const handleConnect = () => {
    // This would actually connect to a wallet
    setConnected(!connected);
  };

  const NavigationItems = () => (
    <NavigationMenuList className="space-x-2">
      <NavigationMenuItem>
        <Link to="/">
          <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
            Dashboard
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/sniper">
          <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
            Token Sniper
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/arbitrage">
          <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
            Arbitrage
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>More</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[200px] gap-2 p-2">
            <li>
              <Link to="/nft-sniper">
                <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div className="text-sm font-medium leading-none">NFT Sniper</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Smart NFT opportunity detection
                  </p>
                </NavigationMenuLink>
              </Link>
            </li>
            <li>
              <Link to="/mev-protection">
                <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div className="text-sm font-medium leading-none">MEV Protection</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Guard against frontrunning
                  </p>
                </NavigationMenuLink>
              </Link>
            </li>
            <li>
              <Link to="/settings">
                <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div className="text-sm font-medium leading-none">Settings</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Configure bot parameters
                  </p>
                </NavigationMenuLink>
              </Link>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="hidden font-semibold sm:inline-block">EtherSnipe AI</span>
          </Link>
          
          {!isMobile && (
            <NavigationMenu className="ml-6 hidden md:flex">
              <NavigationItems />
            </NavigationMenu>
          )}
        </div>

        <div className="flex items-center gap-2">
          {!connected ? (
            <Button 
              onClick={handleConnect} 
              size="sm" 
              className="animate-pulse-subtle"
            >
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </Button>
          ) : (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleConnect}
              className="border border-green-200 bg-green-50 text-green-700 hover:bg-green-100 hover:text-green-800"
            >
              <Badge variant="outline" className="mr-2 border-green-200 px-1 text-green-700">
                <span className="mr-1 inline-block h-2 w-2 rounded-full bg-green-500"></span>
                ETH
              </Badge>
              0x71...3f92
            </Button>
          )}

          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <MenuIcon className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link to="/" className="flex items-center py-2 px-3 rounded-md hover:bg-accent">
                    Dashboard
                  </Link>
                  <Link to="/sniper" className="flex items-center py-2 px-3 rounded-md hover:bg-accent">
                    Token Sniper
                  </Link>
                  <Link to="/arbitrage" className="flex items-center py-2 px-3 rounded-md hover:bg-accent">
                    Arbitrage
                  </Link>
                  <Link to="/nft-sniper" className="flex items-center py-2 px-3 rounded-md hover:bg-accent">
                    NFT Sniper
                  </Link>
                  <Link to="/mev-protection" className="flex items-center py-2 px-3 rounded-md hover:bg-accent">
                    MEV Protection
                  </Link>
                  <Link to="/settings" className="flex items-center py-2 px-3 rounded-md hover:bg-accent">
                    Settings
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
