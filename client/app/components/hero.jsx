import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
function HeroSection() {
  return (
    <div className="py-11 h-[90vh]  flex items-center">
      <div className="w-6/12 ">
        <h1 className="font-Jersey tracking-tight font-extrabold text-3xl uppercase">
          Hi , I am FLAN BEN FLAN , ki nSna3 Kda O Kda
        </h1>
        <p className="desc text-slate-400 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          nostrum.
        </p>
        <div className="flex gap-3 mt-3">
          <Link href={""}>
            <FaLinkedin className="w-6 h-6" />
          </Link>
          <Link href={""}>
            <FaXTwitter className="w-6 h-6" />
          </Link>
          <Link href={""}>
            <FaGithub className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <div className="relative w-6/12 flex items-center justify-end">
        <Image
          className="rounded shadow"
          src={"/hero.png"}
          width={500}
          height={200}
          objectFit="cover"
        />
      </div>
      
    </div>
  );
}

export default HeroSection;
