"use client";
import Image from "next/image";
import logo from "../_assets/logo.svg";
import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  const isActive = (currentPath: string, pathname: string) => {
    if (currentPath.includes(pathname)) return "underline";
  };
  return (
    <nav className="container flex justify-between py-8 ">
      <Link href={"/"}>
        <Image alt="logo da página" src={logo} />
      </Link>
      <ul className="flex gap-6 text-headings font-londrina font-bold text-3xl">
        <li className={`${isActive(pathName, "services")}`}>
          <Link href={"/services"}>Serviços</Link>
        </li>
        <li className={`${isActive(pathName, "about")}`}>
          <Link href={"/about"}>Sobre mim</Link>
        </li>
        <li className={`text-right flex gap-1`}>
          <Link href={"/contact"}>
            <span className={`${isActive(pathName, "contact")}`}>
              Contato <br />
            </span>

            <span className="font-sans text-xs font-extralight flex gap-1 text-muted items-center">
              <FaWhatsapp /> (+55 11) 99999 9999
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
