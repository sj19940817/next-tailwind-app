"use client";

import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar: FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Next.js Shadcn App</h1>
        <div className="space-x-4">
          <Button
            variant="outline"
            size="icon"
            className="text-black dark:text-white"
            onClick={() => setTheme(theme === "dark" ? "system" : "dark")}
          >
            {theme === "dark" && <Sun />}
            {theme === "system" && <Moon />}
          </Button>
          <Link href="/">
            <Button variant="link" className="text-white hover:underline">
              Home
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="link" className="text-white hover:underline">
              About
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
