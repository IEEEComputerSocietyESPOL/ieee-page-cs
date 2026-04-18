"use client";
import React, { useState, useEffect } from "react";
import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src?: string;
    component?: React.ReactNode;
    alt?: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
  };
  forceScrolled?: boolean;
  darkMode?: boolean;
}

const Navbar1 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://www.shadcnblocks.com/images/block/block-1.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  menu = [
    { title: "Home", url: "#" },
    {
      title: "Products",
      url: "#",
      items: [
        {
          title: "Blog",
          description: "The latest industry news, updates, and info",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Company",
          description: "Our mission is to innovate and empower the world",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Careers",
          description: "Browse job listing and discover our workspace",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Support",
          description:
            "Get in touch with our support team or visit our community forums",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      items: [
        {
          title: "Help Center",
          description: "Get all the answers you need right here",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Contact Us",
          description: "We are here to help you with any questions you have",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Status",
          description: "Check the current status of our services and APIs",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Terms of Service",
          description: "Our terms and conditions for using our services",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Pricing",
      url: "#",
    },
    {
      title: "Blog",
      url: "#",
    },
  ],
  mobileExtraLinks = [
    { name: "Press", url: "#" },
    { name: "Contact", url: "#" },
    { name: "Imprint", url: "#" },
    { name: "Sitemap", url: "#" },
  ],
  auth = {
    login: { text: "Log in", url: "#" },
    signup: { text: "Join IEEE", url: "https://www.ieee.org/membership/join/index.html" },
  },
  forceScrolled = false,
  darkMode = false,
}: Navbar1Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrolled = forceScrolled || isScrolled;
  useEffect(() => {
    const handleScroll = () => {
      // 100px or hero section height. Let's use 100 for immediate stickiness or a reasonable threshold like 50.
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-4 ${
        scrolled 
          ? darkMode
            ? "bg-[#020b14] py-3 text-white"
            : "bg-white/95 backdrop-blur-md shadow-md py-3 text-[#0b5ea8]"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto w-full max-w-[1500px] px-4 lg:px-8">
        <nav className="hidden xl:flex items-center justify-between gap-6 relative">
          <div className="flex items-center shrink-0">
            <a href={logo.url} className="flex items-center gap-2">
              {logo.component ? logo.component : (logo.src && <img src={logo.src} className="w-8" alt={logo.alt} />)}
              {!logo.component && <span className="text-lg font-semibold whitespace-nowrap">{logo.title}</span>}
            </a>
          </div>
          
          <div className="flex-1 flex justify-center w-full">
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => renderMenuItem(item, scrolled, darkMode))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex gap-2 items-center shrink-0">
            <Button asChild size="sm" className="bg-[#0b5ea8] text-white hover:bg-[#0b5ea8]/90">
              <a href={auth.signup.url} target="_blank" rel="noopener noreferrer">{auth.signup.text}</a>
            </Button>
          </div>
        </nav>
        <div className="block xl:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              {logo.component ? logo.component : (logo.src && <img src={logo.src} className="w-8" alt={logo.alt} />)}
              <span className="text-lg font-semibold">{logo.title}</span>
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className={`border-black/20 bg-transparent ${scrolled ? "text-[#0b5ea8] hover:bg-[#0b5ea8]/10" : "text-white hover:bg-white/10 border-white/20"} hover:text-current`}>
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      {logo.component ? logo.component : (logo.src && <img src={logo.src} className="w-8" alt={logo.alt} />)}
                      <span className="text-lg font-semibold">
                        {logo.title}
                      </span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <div className="border-t py-4">
                    <div className="grid grid-cols-2 justify-start">
                      {mobileExtraLinks.map((link, idx) => (
                        <a
                          key={idx}
                          className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                          href={link.url}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button asChild>
                      <a href={auth.signup.url} target="_blank" rel="noopener noreferrer">{auth.signup.text}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem, isScrolled: boolean, darkMode: boolean = false) => {
  const triggerText = isScrolled && !darkMode? "text-[#0b5ea8]" : "text-white";
  const triggerHover = isScrolled && !darkMode
    ? "hover:bg-[#0b5ea8]/10 hover:text-[#0b5ea8] focus:bg-[#0b5ea8]/10 focus:text-[#0b5ea8] data-[state=open]:bg-[#0b5ea8]/10 data-[state=open]:text-[#0b5ea8]" 
    : "hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white";

  const dropdownBg = isScrolled && !darkMode ? "bg-white/95 border-gray-200" : "bg-[#020b14]/90 border-white/10";
  const dropdownItemText = isScrolled && !darkMode ? "text-[#0b1f33]" : "text-white";
  const dropdownItemHover = isScrolled && !darkMode ? "hover:bg-gray-100/80" : "hover:bg-white/10";
  const dropdownDescText = isScrolled && !darkMode ? "text-gray-500" : "text-gray-400";

  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className={triggerText}>
        <NavigationMenuTrigger className={`bg-transparent px-2 2xl:px-3 text-[13px] font-semibold whitespace-nowrap ${triggerText} ${triggerHover}`}>
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className={`min-w-[16rem] p-3 backdrop-blur-md rounded-xl border shadow-2xl ${dropdownBg}`}>
            {item.items.map((subItem) => (
              <li key={subItem.title}>
                <NavigationMenuLink asChild>
                  <a
                    className={`flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors ${dropdownItemHover} ${dropdownItemText}`}
                    href={subItem.url}
                  >
                    {subItem.icon && (
                      <div className="text-[#0b5ea8] shrink-0">
                        {subItem.icon}
                      </div>
                    )}
                    <div>
                      <div className={`text-sm font-semibold ${dropdownItemText}`}>
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <p className={`text-sm leading-snug mt-1 ${dropdownDescText}`}>
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink asChild>
        <a
          className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-2 2xl:px-3 text-[13px] font-semibold whitespace-nowrap transition-colors ${triggerText} ${triggerHover}`}
          href={item.url}
        >
          {item.title}
        </a>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <a
              key={subItem.title}
              className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
              href={subItem.url}
            >
              {subItem.icon}
              <div>
                <div className="text-sm font-semibold">{subItem.title}</div>
                {subItem.description && (
                  <p className="text-sm leading-snug text-muted-foreground">
                    {subItem.description}
                  </p>
                )}
              </div>
            </a>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="font-semibold">
      {item.title}
    </a>
  );
};

export { Navbar1, type MenuItem };
