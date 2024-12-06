import React from "react";

import { PointSeparator } from "app/_components/point-separator/point-separator";

import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-2 flex-wrap items-center justify-center text-xs text-muted">
      <p>Sandro Luz Tattoo Shop</p>
      <PointSeparator size="large" />
      <p>Rua Limoeiro, 1000 - Catalão - SP</p>
      <PointSeparator size="small" />
      <div className="flex items-center gap-1">
        <FaWhatsapp />
        <p>(+55 11) 99999 9999</p>
      </div>
    </footer>
  );
}
