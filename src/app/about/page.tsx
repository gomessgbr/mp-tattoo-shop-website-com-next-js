import Image from "next/image";
import React from "react";
import portrait from "../_assets/portrait.svg";
export default function About() {
  return (
    <main className="grid lg:grid-cols-2">
      <section className="flex flex-1 flex-col gap-6">
        <article className="grid gap-10 text-left text-typograph font-light text-base">
          <span className="text-headings font-bold text-3xl">
            Prazer, sou <strong className="text-brand">Sandro Luz</strong>
          </span>

          <p>
            Olá! Sou Sandro Luz, apaixonado pela arte que transcende o tempo e
            se imprime na pele. Com mais de 10 anos de experiência no mundo da
            tatuagem, dedico-me a transformar visões e emoções em arte corporal
            que expressa quem você é e o que você ama.
          </p>
          <p>
            Cada tatuagem em meu estúdio é um trabalho de colaboração; ouço
            atentamente os desejos e as histórias de meus clientes para que cada
            peça seja única e pessoal. Especializo-me em vários estilos, desde o
            delicado traço fino até composições mais robustas e coloridas,
            garantindo que cada design não só atenda, mas supere as
            expectativas.
          </p>
          <p>
            Além da dedicação à arte, a segurança e o conforto são prioridades
            no meu estúdio. Utilizo apenas equipamentos esterilizados e de alta
            qualidade, e sou rigoroso quanto aos protocolos de higiene e
            segurança, garantindo uma experiência segura e confortável para
            todos.
          </p>
          <p>
            Visite meu estúdio e veja como a arte pode se manifestar em sua
            pele. Estou aqui para ajudá-lo a contar sua história de uma maneira
            única e eterna. Agende sua consulta e vamos juntos criar algo
            extraordinário!
          </p>
        </article>
        <span className="font-island text-4xl text-typograph">Sandro Luz</span>
      </section>
      <Image
        width={400}
        src={portrait}
        alt="Retrato de Sandro Luz"
        className="absolute right-0 -bottom-0"
      />
    </main>
  );
}
