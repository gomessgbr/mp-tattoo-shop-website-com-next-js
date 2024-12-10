import Image from "next/image";
import React from "react";
import portrait from "./_assets/portrait.svg";

export default function Home() {
  return (
    <main className="relative h-full flex flex-1 ">
      <h1 className="absolute -z-10 text-[400px] font-londrina -left-20 top-0 leading-tight text-zinc-800 ">
        Tattoo
      </h1>
      <div className="font-black text-muted text-8xl pt-56 uppercase">
        <h2>Inspire-se</h2>
        <h2>Expresse-se</h2>
        <h2 className="text-brand">Tatue-se</h2>
      </div>
      <Image
        width={400}
        src={portrait}
        alt="Retrato de Sandro Luz"
        className="absolute -right-16 -bottom-20 grayscale"
      />
    </main>
  );
}
