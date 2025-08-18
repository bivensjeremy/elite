import { Arvo, Fira_Code as FontMono, Inter as FontSans, Montserrat, Nunito_Sans, Roboto, Roboto_Slab, Work_Sans, Zilla_Slab } from "next/font/google";
import localFont from 'next/font/local'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontBody = Roboto({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "800"],
  display: "swap",
});

// export const fontHeader = localFont({
//   src: '/fonts/Clarendon_Bold.otf'
// });

export const fontTitle = Montserrat({
  subsets: ['latin'],
  weight: '800',
  display: 'swap'
})

export const fontHeader = Arvo({
  subsets: ['latin'],
  weight: '700'
  // weight: '800'
});