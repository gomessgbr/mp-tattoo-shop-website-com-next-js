import Image from "next/image";
import React from "react";
import contactUs from "../_assets/contactUs.svg";
import { FaWhatsapp } from "react-icons/fa6";
export default function Contact() {
  return (
    <main className="grid lg:grid-cols-2 lg: grid-rows-1 place-items-center ">
      <section className="grid gap-9">
        <span className="font-sans font-bold text-headings text-3xl">
          Entre em <strong className="text-brand ">Contato</strong>
        </span>
        <p>
          Clique no botão abaixo e envie uma mensagem. <br />
          Vamos conversar!
        </p>
        <button
          type="button"
          className="flex place-items-center gap-7 bg-zinc-700 py-5 px-7 rounded-md"
        >
          <FaWhatsapp size={36} color="#FFF" />
          <span>
            <p className="text-headings font-sans text-lg font-medium">
              Enviar Whatsapp
            </p>
            <p className="text-muted font-sans text-xs">(+55 11) 99711 1111</p>
          </span>
        </button>
      </section>
      <Image alt="imagem de um tatuador" src={contactUs} />
    </main>
  );
}
