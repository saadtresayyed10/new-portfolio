"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconPageBreak,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Navbar() {
  const links = [
    {
      label: "Projects",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "About",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Services",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Resume",
      href: "#",
      icon: (
        <IconPageBreak className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2 font-parkinsans">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex justify-start items-center gap-x-6">
              <Link href="/">
                <IconBrandLinkedin className="w-4 h-4 text-muted-foreground" />
              </Link>
              <Link href="/">
                <IconBrandX className="w-4 h-4 text-muted-foreground" />
              </Link>
              <Link href="/">
                <IconBrandInstagram className="w-4 h-4 text-muted-foreground" />
              </Link>
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "backOut", delay: 0.4 }}
        className="w-8 h-8"
      >
        <LogoIcon />
      </motion.div>
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "backOut", delay: 0.4 }}
        className="font-bold lg:text-xl text-black dark:text-white whitespace-pre font-parkinsans uppercase"
      >
        Saad Sayyed
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <>
      <Link href="#" className="dark:hidden block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 260 300"
          className="w-full h-full"
        >
          <polygon
            points="100,280 40,20 190,140 10,140 160,20"
            fill="none"
            stroke="black"
            stroke-width="5"
          />
        </svg>
      </Link>
      <Link href="#" className="hidden dark:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 260 300"
          className="w-full h-full"
        >
          <polygon
            points="100,280 40,20 190,140 10,140 160,20"
            fill="none"
            stroke="black"
            stroke-width="5"
          />
        </svg>
      </Link>
    </>
  );
};
