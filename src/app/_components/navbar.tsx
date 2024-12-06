import React from "react";
import Image from "next/image";
import logo from "../_assets/logo.svg";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="container flex justify-between font-londrina py-8 ">
      <Link href={"/"}>
        <Image alt="logo da página" src={logo} />
      </Link>
      <ul className="flex gap-6 text-headings font-londrina font-bold text-3xl ">
        <li>
          <Link href={"#"}>Serviços</Link>
        </li>
        <li>
          <Link href={"#"}>Sobre mim</Link>
        </li>
        <li className="text-right">
          <Link href={"#"}>Contato</Link> <br />
          <span className="text-xs font-extralight flex gap-1 text-muted items-center">
            {" "}
            <FaWhatsapp /> (+55 11) 99999 9999
          </span>
        </li>
      </ul>
    </nav>
  );
}
