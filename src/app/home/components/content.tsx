import Image from "next/image";
import React from "react";
import portraitImage from "../../_assets/portrait.svg";
import backgrounText from "../../_assets/backgroundText.svg";
import mainText from "../../_assets/mainHeader.svg";

export function Content() {
  return (
    <div className="grid relative">
      <div className="absolute">
        <Image src={mainText} alt="background" />
      </div>
      <div>
        <Image src={backgrounText} alt="background" />
      </div>
      <div>
        <Image src={portraitImage} alt="background" />
      </div>
    </div>
  );
}
