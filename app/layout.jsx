import "@/styles/globals.css";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontBody, fontSans } from "@/config/fonts";
import Navigation from "@/components/Navigation"
import Footer from '../components/Footer';

export const metadata = {
	title: {
			default: 'Multi-Page Site Template | '+ siteConfig.name,
			template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
	metadataBase: new URL("https://blueprintwebdev.com"), 
	openGraph: {
		title: siteConfig.name,
		description: siteConfig.description,
		url: "https://blueprintwebdev.com",
		siteName: 'Blueprint Web Dev',
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
	},
	keywords: [
		"web design Albany GA",
		"website design for bakeries",
		"small business websites",
		"responsive web design",
		"custom websites Albany Georgia",
		"Blueprint Web Dev",
		"Bivens Blueprint",
		"affordable web design Georgia",
		"web development services",
		"professional web design",
		"web agency",
		"Georgia web designers",
	],
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f4c81" }, // branded
    { media: "(prefers-color-scheme: dark)", color: "#374151" },  // unbranded
  ],
};

export default function RootLayout({children}) {
	return (
		<html suppressHydrationWarning lang="en">
		<head />
		<body
			className={clsx(
			"min-h-screen text-foreground bg-background antialiased",
			fontBody.className
			)}
		>
			<Providers themeProps={{ 
				attribute: "class", 
				defaultTheme: "light" 
			}}>
				<Navigation />

				<main className="">
				{children}
				</main>
				
				<Footer />
			</Providers>
		</body>
    </html>
	);
}
