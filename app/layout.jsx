
import { Suspense } from "react";
import "./globals.css";
import Toast from "@/components/Toaster";

export const metadata = {
  title: "FALCON- an e-Commerce platform",
  description: "FALCON is an e-Commerce platform built with Next.js, and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <Suspense>
          <Toast/>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
