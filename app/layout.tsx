import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shantanu Kamble | Personal Portfolio",
  description:
    "Digital Marketer, Performance Marketer & Software Developer with a focus on scalable systems and automation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative pt-28 sm:pt-36 bg-[rgb(240,245,242)] text-gray-950 dark:bg-[rgb(19,67,38)] dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* Accent Blob 1 – Blue */}
        <div
          className="
            absolute top-[-6rem] -z-10 right-[11rem]
            h-[31.25rem] w-[31.25rem] rounded-full
            blur-[10rem] sm:w-[68.75rem]
            bg-[rgb(62,123,157)] opacity-40
            dark:bg-[rgb(62,123,157)] dark:opacity-30
          "
        />

        {/* Accent Blob 2 – Green */}
        <div
          className="
            absolute top-[-1rem] -z-10 left-[-35rem]
            h-[31.25rem] w-[50rem] rounded-full
            blur-[10rem] sm:w-[68.75rem]
            md:left-[-33rem] lg:left-[-28rem]
            xl:left-[-15rem] 2xl:left-[-5rem]
            bg-[rgb(55,129,111)] opacity-40
            dark:bg-[rgb(55,129,111)] dark:opacity-30
          "
        />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
