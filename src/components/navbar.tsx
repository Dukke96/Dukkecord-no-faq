"use client";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/resizable-navbar";
import { ModeToggle } from "@/components/theme-switcher";
import { useState } from "react";
import { BackgroundGradient } from "./background-gradient";

const navItems = [
  { name: "Home", link: "#" },
  { name: "Features", link: "#features" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Team", link: "#team" },
  { name: "Pricing", link: "#pricing" },
];

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton
            className="bg-transparent hover:bg-transparent"
            variant="secondary"
          >
            <ModeToggle />
          </NavbarButton>
          <a href="https://forms.gle/HcYaYr26zMXpvPoG8" target="_blank">
            <BackgroundGradient className="p-[0px] rounded-xl">
              <NavbarButton variant="primary">Try Bot</NavbarButton>
            </BackgroundGradient>
          </a>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-2">
            <ModeToggle />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-muted-foreground hover:text-foreground"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <a href="https://forms.gle/HcYaYr26zMXpvPoG8" target="_blank">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Try Bot
              </NavbarButton>
            </a>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
