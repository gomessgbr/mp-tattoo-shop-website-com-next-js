import { Inter, Londrina_Solid, Island_Moments } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "900"],
});

export const londrina_solid = Londrina_Solid({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-londrina-solid",
  weight: "400",
});
export const island_moments = Island_Moments({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-island-moments",
  display: "swap",
});
