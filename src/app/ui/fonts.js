import { Hind_Siliguri, Inter } from "next/font/google";

export const InterFont = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "cyrillic"],
});

export const hindSiliguri = Hind_Siliguri({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "american"],
  variable: "--font-hind-siliguri",
  style: ["normal"],
});
