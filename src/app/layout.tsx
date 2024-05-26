import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PerfomaLearn",
  description: "Personalized Education, Optimized Results",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
