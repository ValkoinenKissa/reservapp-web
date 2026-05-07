import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";

type Props = {
  items: {
    label: string;
    href: string;
  }[];
  className?: string;
};

export function DesktopNav({ items, className }: Props) {
  return (
    <nav className={cn("mx-auto flex w-full max-w-7xl items-center justify-between gap-4", className)}>
      <Logo />
      <NavigationMenu>
        <NavigationMenuList className="gap-8">
          {items.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Button asChild>
        <Link href={process.env.NEXT_PUBLIC_DOWNLOAD_URL || "#download"}>Comenzar</Link>
      </Button>
    </nav>
  );
}
