import { Suspense } from "react";
import "./globals.css";
import Toast from "@/components/Toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "FALCON- an e-Commerce platform",
  description:
    "FALCON is an e-Commerce platform built with Next.js, and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        <Suspense>
          <Toast />
          {/* Navbar */}
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
