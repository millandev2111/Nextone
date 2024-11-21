import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/common/navbar";
import { Footer } from "./components/common/footer";
import { Providers } from "./provider";

export const metadata: Metadata = {
  title: "Nextone",
  description: "Nextone es una plataforma para que los artistas emergentes puedan compartir su musica y conocer nuevas personas de la escena musical de Cali-Colombia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
        <Navbar/>
        {children}
        <Footer/>
        </Providers>
      </body>
    </html>
  );
}
