"use client";
import Avatar from "@/components/elements/avatar/avatar";
import Burger from "@/components/elements/burger/burger";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from 'next/navigation'


export default function NavBar() {
  const router = useSelectedLayoutSegment();

  if (router === 'login' || router === 'register')
    return <></>

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 border-2 border-customOrange rounded-md bg-transparent shadow-[inset_0_0_12px_#FF7518,0_0_15px_#FF7518]">
      <div className="hidden xl:flex text-customGray gap-16 ">
        <Link href="/achievements" className="hover:text-customOrange transition-colors duration-300">
          Achievements
        </Link>
        <Link href="/challenges" className="hover:text-customOrange transition-colors duration-300">
          Challenges
        </Link>
        <Link href="/q-and-a" className="hover:text-customOrange transition-colors duration-300">
          Q&A
        </Link>
        <Link href="/resources" className="hover:text-customOrange transition-colors duration-300">
          Resources
        </Link>
      </div>
      <Burger />

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <h1
          className="text-[64px] text-white font-display animate-flicker"
          style={{
            textShadow: "0 0 10px #FF7518, 0 0 20px #FF7518, 0 0 10px #FF7518",
          }}
        >
          CODECRYPT
        </h1>
      </div>

      <Avatar menu />

    </nav>
  );
}
