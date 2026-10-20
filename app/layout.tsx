import "./globals.css";
import { Oswald, Caveat, Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Shantanu Kamble | Software Developer & AI Systems",
  description:
    "Editorial portfolio featuring Full-Stack Engineering, AI Systems, and Performance Marketing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`!scroll-smooth ${inter.variable} ${oswald.variable} ${caveat.variable}`}
    >
      <body
        className={`${inter.className} bg-[#070709] text-white selection:bg-red-600 selection:text-white antialiased min-h-screen overflow-x-hidden`}
      >
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
