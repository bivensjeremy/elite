import { Arvo, Fira_Code as FontMono, Inter as FontSans, Montserrat, Nunito_Sans, Roboto, Roboto_Slab, Work_Sans, Zilla_Slab } from "next/font/google";

// export const fontBody = Roboto({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

// export const fontBody = Roboto({
//   subsets: ["latin"],
//   variable: "--font-body",
//   weight: ["400", "800"],
//   display: "swap",
// });

export const fontBody = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  display: 'swap'
})


export const fontHeader = Roboto_Slab({
  subsets: ['latin'],
  weight: '900',
  display: 'auto'
})