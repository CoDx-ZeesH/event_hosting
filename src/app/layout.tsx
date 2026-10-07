import type { Metadata } from "next";
import { Space_Grotesk, Public_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["700"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "ZEESHAN - Emcee, Event Host, Content Creator, Yapper",
  description: "Neo-Brutalist personal portfolio for Zeeshan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${publicSans.variable} font-body bg-cream text-black antialiased overflow-x-hidden selection:bg-magenta selection:text-white`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
