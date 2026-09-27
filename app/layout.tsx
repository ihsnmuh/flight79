import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://flight79-kbp.astral-giant-6903.chatgpt.site"),
  title: "Flight 79 | Aviation-Themed Coffee & Eatery",
  description: "Enjoy first-class flavor at Flight 79, an aviation-themed coffee and eatery in Kota Baru Parahyangan.",
  openGraph: {
    title: "Flight 79 | First-Class Flavor, On the Ground",
    description: "Coffee, comfort food, and an aviation-themed dining experience in Kota Baru Parahyangan.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/flight79-logo.svg",
    shortcut: "/flight79-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
