"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function NavigMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="font-thunder">
          <NavigationMenuTrigger className="bg-black text-pink-500 hover:bg-black text-xl">
            About
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-black text-pink-500 border-pink-500 border-2">
            <div className="flex justify-center items-center flex-col gap-y-2 text-center px-10 py-6 font-thunder text-xl">
              <Link href="/about/development">Development</Link>
              <Link href="/about/architecture">Architecture</Link>
              <Link href="/about/clothing">Clothing</Link>
              <Link href="/about/work">Work</Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
