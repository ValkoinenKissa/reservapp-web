import { MobileNav } from "@/components/hero/mobile-nav";
import { DesktopNav } from "@/components/hero/desktop-nav";

const navItems = [
  {
    label: "Funciones",
    href: "/#features",
  },
  {
    label: "Legal",
    href: "/terms-and-conditions",
  },
  {
    label: "GitHub",
    href: "https://github.com/ValkoinenKissa/reservapp-web",
  },
];

export function Nav() {
  return (
    <>
      <MobileNav className="flex md:hidden" items={navItems} />
      <DesktopNav className="hidden md:flex" items={navItems} />
    </>
  );
}
