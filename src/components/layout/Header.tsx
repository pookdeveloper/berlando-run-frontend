'use client'

import Link from "next/link";
import { ShoppingBag, Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/stores/cartStore";
import { CartDrawer } from "@/components/cart/CartDrawer";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

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
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger className="flex items-center gap-1 transition-colors hover:text-foreground/80 text-foreground/60 outline-none">
                    Shop
                    <ChevronDown className="h-3 w-3" />
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      className="min-w-[200px] bg-stone border border-black/10 rounded-sm p-1 shadow-lg"
                      sideOffset={5}
                    >
                      <DropdownMenu.Item asChild>
                        <Link
                          href="/products"
                          className="block px-3 py-2 text-sm text-foreground/60 hover:text-foreground hover:bg-black/5 rounded-sm outline-none cursor-pointer transition-colors"
                        >
                          All Products
                        </Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item asChild>
                        <Link
                          href="/products?category=trail-shorts"
                          className="block px-3 py-2 text-sm text-foreground/60 hover:text-foreground hover:bg-black/5 rounded-sm outline-none cursor-pointer transition-colors"
                        >
                          Trail Shorts
                        </Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item asChild>
                        <Link
                          href="/products?category=technical-tees"
                          className="block px-3 py-2 text-sm text-foreground/60 hover:text-foreground hover:bg-black/5 rounded-sm outline-none cursor-pointer transition-colors"
                        >
                          Technical Tees
                        </Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item asChild>
                        <Link
                          href="/products?category=outerwear"
                          className="block px-3 py-2 text-sm text-foreground/60 hover:text-foreground hover:bg-black/5 rounded-sm outline-none cursor-pointer transition-colors"
                        >
                          Outerwear
                        </Link>
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>

                <DropdownMenu.Root>
                  <DropdownMenu.Trigger className="flex items-center gap-1 transition-colors hover:text-foreground/80 text-foreground/60 outline-none">
                    Community
                    <ChevronDown className="h-3 w-3" />
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      className="min-w-[200px] bg-stone border border-black/10 rounded-sm p-1 shadow-lg"
                      sideOffset={5}
                    >
                      <DropdownMenu.Item asChild>
                        <Link
                          href="/community"
                          className="block px-3 py-2 text-sm text-foreground/60 hover:text-foreground hover:bg-black/5 rounded-sm outline-none cursor-pointer transition-colors"
                        >
                          Overview
                        </Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item asChild>
                        <Link
                          href="/community#run-clubs"
                          className="block px-3 py-2 text-sm text-foreground/60 hover:text-foreground hover:bg-black/5 rounded-sm outline-none cursor-pointer transition-colors"
                        >
                          Run Clubs
                        </Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item asChild>
                        <Link
                          href="/community#events"
                          className="block px-3 py-2 text-sm text-foreground/60 hover:text-foreground hover:bg-black/5 rounded-sm outline-none cursor-pointer transition-colors"
                        >
                          Events
                        </Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item asChild>
                        <Link
                          href="/community#challenges"
                          className="block px-3 py-2 text-sm text-foreground/60 hover:text-foreground hover:bg-black/5 rounded-sm outline-none cursor-pointer transition-colors"
                        >
                          Challenges
                        </Link>
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>

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
