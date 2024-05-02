"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Logo from "./logo";
import { useEffect, useState } from "react";
import { User, currentUser } from "@clerk/nextjs/server";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { ThemeSwitcherBtn } from "./theme-switcher-btn";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Dashboard", link: "/dashboard" },
    { label: "Transactions", link: "/transactions" },
    { label: "Manage", link: "/manage" },
  ];

  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      //   isMenuOpen={isMenuOpen}
      //   onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="backdrop-blur sm:hidden"
      />
      <NavbarBrand>
        <Logo />
      </NavbarBrand>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {menuItems.map((item) => (
          <Item key={item.label} link={item.link} label={item.label} />
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <ClerkLoading>
          <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
        </ClerkLoading>

        <ClerkLoaded>
          <SignedOut>
            <SignInButton mode="modal">
              <NavbarItem className="hidden lg:flex">
                <Link href="/sign-in">Login</Link>
              </NavbarItem>
            </SignInButton>

            <SignUpButton mode="modal">
              <NavbarItem>
                <Button
                  as={Link}
                  color="secondary"
                  href="/sign-up"
                  variant="ghost"
                >
                  Sign Up
                </Button>
              </NavbarItem>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <ThemeSwitcherBtn />
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </ClerkLoaded>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item) => (
          <Item key={item.label} link={item.link} label={item.label} />
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;

function Item({ link, label }: { link: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <div className="relative flex items-center">
      <Link
        href={link}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "w-full justify-start text-lg text-muted-foreground hover:text-foreground",
          isActive && "text-blue-600",
        )}
      >
        {label}
      </Link>
      {isActive && (
        <div className="absolute -bottom-[10px] left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-blue-600 md:block" />
      )}
    </div>
  );
}
