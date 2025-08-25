import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // 1. Import your main Header
import Footer from "@/components/Footer"; // 2. Import your Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mudra App",
  description: "Your Mudra Wallet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header /> {/* 3. Add the Header here */}
        {children} {/* This is where your page content will go */}
        <Footer /> {/* 4. Add the Footer here */}
      </body>
    </html>
  );
}