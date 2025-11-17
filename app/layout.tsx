import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "sahildmk",
  description: "Hi 👋 I'm Sahil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-stone-900">
      <body>{children}</body>
    </html>
  );
}
