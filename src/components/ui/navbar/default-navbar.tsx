import React from "react";
import Image from "next/image";
import logo from "@assets/logo.svg";
import whatsAppLogo from "@assets/whatsAppIcon.svg";
import Link from "next/link";

export function DefaultNavbar() {
  return (
    <header className="min-w-full grid grid-cols-2">
      <div>
        <Link href={"/"}>
          <Image alt="logo da navbar" src={logo} />
        </Link>
      </div>
      <nav className="grid items-center ">
        <ul className="flex gap-10 text-headings font-londrina font-bold text-2xl ">
          <li>
            <Link href={"#"}>Serviços</Link>
          </li>
          <li>
            <Link href={"#"}>Sobre mim</Link>
          </li>
          <li>
            <Link href={"#"}>Contato</Link>
          </li>
        </ul>
        <div className="flex gap-1 justify-end">
          <Image alt="logo da navbar" src={whatsAppLogo} />
          <span className="font-sans font-medium text-muted">
            (+55 11) 99999 9999
          </span>
        </div>
      </nav>
    </header>
  );
}
