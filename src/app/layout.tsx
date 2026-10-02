import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { StorefrontProvider } from "@/components/storefront-provider";
import { SiteFooter } from "@/components/site-footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: { default: "LEVEL Studio | Considered Gaming Equipment", template: "%s | LEVEL Studio" },
  description: "Independent gaming equipment designed in Copenhagen. Purpose-built essentials for the modern player.",
  openGraph: { title: "LEVEL Studio | Considered Gaming Equipment", description: "Purpose-built essentials for the modern player.", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
      <body>
        <StorefrontProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </StorefrontProvider>
      </body>
    </html>
  );
}
