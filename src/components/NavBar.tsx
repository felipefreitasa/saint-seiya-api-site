"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/docs", label: "Docs" },
  { href: "/about", label: "About" },
];

interface NavItemProps {
  href: string;
  label: string;
}

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <header
        className={`p-4 bg-black/50 shadow-md border-b-1 border-[#333333] fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md" : "backdrop-blur-none"
        }`}
      >
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
    </motion.div>
  );
}

function NavItem({ href, label }: NavItemProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`text-sm font-inter font-light transition-all duration-300  ${
        pathname === href ? "text-white" : "text-[#888888] hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
}
