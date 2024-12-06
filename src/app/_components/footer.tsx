import React from "react";

import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-footer py-8 row-start-3 flex gap-2 flex-wrap items-center justify-center text-xs text-muted">
      <div className="container flex gap-2 items-center">
        <p>Sandro Luz Tattoo Shop</p>
        <span className="text-brand leading-3">&#8226;</span>
        {/* <PointSeparator size="large" /> */}
        <p>Rua Limoeiro, 1000 - Catalão - SP</p>
        {/* <PointSeparator size="small" /> */}
        <span className="text-brand">&#8226;</span>
        <p className="flex items-center gap-1">
          <FaWhatsapp /> (+55 11) 99999 9999
        </p>
      </div>
    </footer>
  );
}
