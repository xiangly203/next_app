import { Noto_Sans_Mono as FontMono, Noto_Sans_SC as FontSans, Noto_Serif as FontSerif} from "next/font/google"

export const fontSans = FontSans({
  // weight: ["100","200","300",],
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})