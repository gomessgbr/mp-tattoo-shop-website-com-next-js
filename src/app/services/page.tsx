import React from "react";

export default function Services() {
  return (
    <main className="">
      <h1 className="text-brand text-3xl font-bold py-16">Serviços</h1>
      <section className="grid lg:grid-cols-4 gap-20 ">
        <article className="grid gap-6">
          <p className="text-headings text-lg font-bold">
            Tatuagens Personalizadas
          </p>
          <p className="text-sm text-left font-extralight text-typograph">
            Oferecemos a criação de tatuagens personalizadas, onde cada design é
            desenvolvido em colaboração direta com o cliente. A partir de uma
            ideia inicial, trabalhamos juntos para criar uma obra de arte única
            que reflete sua personalidade e sentimentos.
          </p>
        </article>
        <article className="grid gap-6">
          <p className="text-headings text-lg font-bold">Cover-Up</p>
          <p className="text-sm text-left font-extralight text-typograph">
            Especializamo-nos em transformar tatuagens antigas ou indesejadas em
            novas obras de arte. Se você tem uma tatuagem que não representa
            mais quem você é, nós podemos ajudá-lo a reformulá-la com um design
            criativo e original.
          </p>
        </article>
        <article className="grid gap-6">
          <p className="text-headings text-lg font-bold">Restauração</p>
          <p className="text-sm text-left font-extralight text-typograph">
            Com o tempo, algumas tatuagens podem desbotar ou perder a definição.
            Oferecemos serviços de restauração para revitalizar sua tatuagem
            antiga, realçando as cores e contornos para que ela volte a ter a
            aparência de quando foi feita pela primeira vez.
          </p>
        </article>
        <article className="grid gap-6">
          <p className="text-headings text-lg font-bold">Henna</p>
          <p className="text-sm text-left font-extralight text-typograph">
            Para aqueles que não estão prontos para um compromisso permanente ou
            desejam testar um design antes de tatuá-lo definitivamente,
            oferecemos tatuagens temporárias de alta qualidade que duram de
            algumas semanas a alguns meses.
          </p>
        </article>
      </section>
    </main>
  );
}
