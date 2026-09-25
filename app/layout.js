import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import Footer from "@/components/Footer";
import { FavoritesProvider } from "@/components/FavoritesProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-nova",
  display: "swap",
});

export const metadata = {
  title: {
    default: "NovaPlay — Gaming Platform",
    template: "%s · NovaPlay",
  },
  description:
    "NovaPlay is a demo gaming platform frontend. Browse a curated library of fictional games.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-bg text-white">
        <FavoritesProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex min-w-0 flex-1 flex-col lg:pl-64">
              <Header />
              <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-12 pt-6 sm:px-6 lg:px-10">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </FavoritesProvider>
      </body>
    </html>
  );
}
