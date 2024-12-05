import Image from "next/image";
import logo from "@assets/logo.svg";

export function DefaultNavbar() {
  return (
    <nav>
      <div>
        <Image alt="logo da navbar" src={logo} />
      </div>
    </nav>
  );
}
