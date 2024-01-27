import { Yatra_One } from "next/font/google";

const titleFont = Yatra_One({
  weight: "400",
  subsets: ["devanagari"],
  adjustFontFallback: false,
});

export const NavConfig = {
  name: "Piclogue",
  description: "A social media platform for photographers",
  headingFont: titleFont,
  url: "/",
}

