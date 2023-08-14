"use client"

import { usePathname } from "next/navigation";

const Footer = () => {

  const path = usePathname();
    return (
      <footer className="py-3 w-full border-t flex items-center justify-center bg-white shadow-sm">
        <div className="w-full px-10">Meir Tubiana &copy; 2023</div>
      </footer>
    );
};

export default Footer;
