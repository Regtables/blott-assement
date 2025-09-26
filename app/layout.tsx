import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ScrollSmootherWrapper from "@/components/ScrollSmootherWrapper";

const albraFont = localFont({
  src: "../public/fonts/albra-thin.otf",
  variable: "--font-albra",
  display: "swap",
});

const helveticaNowFont = localFont({
  src: "../public/fonts/helvetica-now-display-light.ttf",
  variable: "--font-helvetica-now",
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blott News",
  description: "Most exciting news in the world served to you by Blott",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${albraFont.variable} ${helveticaNowFont.variable} antialiased`}
      >
        <ScrollSmootherWrapper>
          {children}
        </ScrollSmootherWrapper>
      </body>
    </html>
  );
}
