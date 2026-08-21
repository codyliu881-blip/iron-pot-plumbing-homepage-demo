import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Iron Pot Plumbing | Plumbing Services in the Huonville Region",
  description:
    "Iron Pot Plumbing provides plumbing maintenance, hot water system installations, drainage services, CCTV drain inspections and copper work from Snug, serving the Huonville region.",
  openGraph: {
    title: "Iron Pot Plumbing | Plumbing Services in the Huonville Region",
    description:
      "Local plumbing maintenance, hot water systems, drainage services, CCTV drain inspections and copper work from Snug.",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Iron Pot Plumbing — Local plumbing, done properly." }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Pot Plumbing | Plumbing Services in the Huonville Region",
    description:
      "Local plumbing maintenance, hot water systems, drainage services, CCTV drain inspections and copper work from Snug.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/iron-pot-logo.jpg",
    shortcut: "/iron-pot-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
