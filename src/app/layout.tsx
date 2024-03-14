import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/main.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aperitivo Landing Page",
  description:
    "Vive la experiencia de descubrir nuevos y delicados sabores en Aperitivo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preload" href="/public/assets/images/barman-aperitivo.webp" as="image" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
