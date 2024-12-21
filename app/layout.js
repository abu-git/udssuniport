import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UDSS Uniport",
  description: "",
  icon: "./favicon/favicon-32x32.png",
  shortcut: './favicon/favicon-16x16.png',
  apple: './favicon/apple-touch-icon.png',
  openGraph: {
    title: 'UDSS Uniport',
    description: "Trusted and dependable educators and teachers",
    images: [
      {
        url: 'https://res.cloudinary.com/dbqn6vejg/image/upload/v1734775238/meta_dwjz4r.png', // Must be an absolute URL
        width: 1083,
        height: 609,
      }
    ],
  }

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
