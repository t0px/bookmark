"use client"

import { navLinks } from "@/constants";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";

const Navbar = () => {

  const path = usePathname();

  return (
    <nav className="w-full py-3 justify-center flex items-center bg-white shadow-sm z-10 fixed top-0 left-0 right-0">
      <div className="w-full px-10 flex items-center justify-between">
        <ul className="flex items-center gap-8">
          <Link href="/" className="font-bold text-lg">
            Bookmark
          </Link>
          {navLinks.map((link, index) => (
            <li key={index} className="">
              <Link
                href={link.href}
                className="hover:bg-neutral-100 rounded-md px-3 py-2 transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 items-center">
          <Input type="text" placeholder="Search blogs or users..." />
          <Button asChild className="whitespace-nowrap">
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button asChild variant="secondary" className="whitespace-nowrap">
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
