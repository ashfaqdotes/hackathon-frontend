import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/auth-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Saylani Microfinance App",
  description: "Conscept by Ashfaq Ahmed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        >
          <Toaster position="bottom-left" />
          <Header />
          {children}
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
