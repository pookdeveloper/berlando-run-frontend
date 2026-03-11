'use client'

import Link from "next/link";
import { ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/stores/cartStore";
import { CartDrawer } from "@/components/cart/CartDrawer";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const getItemCount = useCart((state) => state.getItemCount);
  const itemCount = getItemCount();

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-stone/95 backdrop-blur supports-[backdrop-filter]:bg-stone/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-semibold tracking-tight">BERLANDO</span>
              </Link>
              
              <nav className="hidden md:flex items-center gap-6 text-sm">
                <Link
                  href="/products"
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  Shop
                </Link>
                <Link
                  href="/community"
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  Community
                </Link>
                <Link
                  href="/journal"
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  Journal
                </Link>
                <Link
                  href="/about"
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  About
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative transition-colors hover:text-foreground/80 text-foreground/60"
                aria-label="Shopping cart"
              >
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] font-medium text-white">
                    {itemCount}
                  </span>
                )}
              </button>
              
              <button
                className="md:hidden transition-colors hover:text-foreground/80 text-foreground/60"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  );
}
