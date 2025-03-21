"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/docs", label: "Docs" },
  { href: "/about", label: "Post" },
];

interface NavItemProps {
  href: string;
  label: string;
}

export function NavBar() {
  return (
    <header className="p-4 bg-black shadow-md border-b-1 border-[#333333]">
      <nav className="container mx-auto flex justify-between items-center max-w-7xl">
        <Link href="/" className="text-lg font-bold">
          <Image
            priority
            width={90}
            height={45}
            alt="Saint Seiya Logo"
            src="/saint-seiya-logo.png"
          />
        </Link>

        <div className="space-x-4 flex items-center justify-center">
          {navLinks.map(({ href, label }) => (
            <NavItem key={href} href={href} label={label} />
          ))}
        </div>
      </nav>
    </header>
  );
}

function NavItem({ href, label }: NavItemProps) {
  const pathname = usePathname();

  return (
    <Link
      key={href}
      href={href}
      className={`text-sm font-inter font-light  ${
        pathname === href ? "text-white" : "text-[#888888] hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
}
