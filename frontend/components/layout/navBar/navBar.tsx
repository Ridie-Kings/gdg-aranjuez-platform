"use client";
import Avatar from "@/components/elements/avatar/avatar";
import Link from "next/link";
import { useSelectedLayoutSegment } from 'next/navigation';

export default function NavBar() {
  const router = useSelectedLayoutSegment();

  if (router === 'login' || router === 'register')
    return <></>;

  return (
    <nav className="w-full sticky top-0 z-50 flex items-center justify-between px-8 py-4 border-2 border-orange rounded-md bg-gray-900/80 shadow-[inset_0_0_12px_#FF7518,0_0_15px_#FF7518]">
      <div className="hidden xl:flex text-white gap-16">
        <Link href="/foro" className="hover:text-customOrange transition-colors duration-300">
          Foro
        </Link>
        <Link href="/recursos" className="hover:text-customOrange transition-colors duration-300">
          Recursos
        </Link>
        <Link href="/trucos" className="hover:text-customOrange transition-colors duration-300">
          Retos
        </Link>
      </div>

      {/* <Burger /> */}
      <p>Menu</p>

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <h1 className="text-[64px] text-white font-display animate-flicker text-shadow-glow">
          <Link href="/home">CODECRYPT</Link>
        </h1>
      </div>

      <Avatar />
    </nav>
  );
}

