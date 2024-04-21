import { Lato, Playfair_Display } from "next/font/google";
import { cn } from "../lib/utils";
import "./globals.css";
import ToastProvider from "@/provider/ToastProvider";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["300", "400"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const metadata = {
  title: "Arivla E-Commerce",
  description: "E-commerce, Online shopping for native African wears",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex flex-col min-h-screen bg-white font-lato antialiased",
          lato.variable,
          playfair.variable
        )}
      >
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
