"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div className="py-4 flex justify-between items-center relative">
      <Image
        src="/logo.png"
        width={135}
        height={80}
        className="object-contain"
      />

      <nav
        className={`${
          isMenuOpened ? "flex" : "hidden"
        } flex-col gap-6 font-Roboto font-bold w-[200px] md:w-auto md:flex md:flex-row md:static absolute top-full right-0 shadow md:shadow-none items-start md:items-center p-4 md:p-0 rounded bg-white md:bg-transparent`}
      >
        <Link href={"/"}>Home</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/about"}>About</Link>
        <button className="rounded-full py-2 px-6 bg-black text-cyan-50">
          Follow Me
        </button>
      </nav>

      <button
        className="md:hidden"
        aria-expanded={isMenuOpened}
        onClick={() => setIsMenuOpened((prev) => !prev)}
      >
        {isMenuOpened ? (
          <LiaTimesSolid className="w-6 h-6" />
        ) : (
          <CiMenuFries className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}

export default Header;
