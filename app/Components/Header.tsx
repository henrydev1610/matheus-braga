"use client";

import Image from "next/image";
import Logo from "@/app/Assets/dsp_logo.svg";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // helper para saber se o link está ativo
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8">
        <Image
          src={Logo}
          width={50}
          height={50}
          alt="logo"
          className="object-contain w-50 cursor-pointer"
        />

        {/* Botão hamburguer (mobile) */}
        <button
          className="inline-flex items-center justify-center rounded-md border border-gray-300 px-2 py-1 text-sm md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className="mr-1">Menu</span>
          <span>☰</span>
        </button>

        {/* Links – desktop */}
        <div className="hidden gap-10 md:flex">
          {/* INÍCIO */}
          <Link    
            href="/"
            className={`relative text-2xl group ${
              isActive("/") ? "text-blue-700" : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Início
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300
              ${
                isActive("/")
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            />
          </Link>

          {/* SERVIÇOS */}
          <Link
            href="/services"
            className={`relative text-2xl group ${
              isActive("/services")
                ? "text-blue-700"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Serviços
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300
              ${
                isActive("/services")
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            />
          </Link>

          {/* SOLUÇÕES */}
          <Link
            href="/soluctions"
            className={`relative text-2xl group ${
              isActive("/soluctions")
                ? "text-blue-700"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Soluções
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300
              ${
                isActive("/soluctions")
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            />
          </Link>

          {/* CONTATO */}
          <Link
            href="/contact"
            className={`relative text-2xl group ${
              isActive("/contact")
                ? "text-blue-700"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Contato
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300
              ${
                isActive("/contact")
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        </div>
      </nav>

      {/* Menu mobile dropdown */}
      {open && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2 gap-2">
            <Link
              href="/"
              className={`text-lg ${
                isActive("/") ? "font-semibold text-blue-700" : "text-gray-700"
              }`}
              onClick={() => setOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/services"
              className={`text-lg ${
                isActive("/services")
                  ? "font-semibold text-blue-700"
                  : "text-gray-700"
              }`}
              onClick={() => setOpen(false)}
            >
              Serviços
            </Link>
            <Link
              href="/soluctions"
              className={`text-lg ${
                isActive("/soluctions")
                  ? "font-semibold text-blue-700"
                  : "text-gray-700"
              }`}
              onClick={() => setOpen(false)}
            >
              Soluções
            </Link>
            <Link
              href="/contact"
              className={`text-lg ${
                isActive("/contact")
                  ? "font-semibold text-blue-700"
                  : "text-gray-700"
              }`}
              onClick={() => setOpen(false)}
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
