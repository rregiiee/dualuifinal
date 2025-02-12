"use client"; // Jika pakai App Router

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between">
      <h1 className="text-2xl font-bold">My CV</h1>
      <div className="space-x-4">
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#services">Services</Link>
        <Link href="#portfolio">Portfolio</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
