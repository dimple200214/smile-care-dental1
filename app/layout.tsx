import MobileCTA from "@/components/MobileCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Agar aapka footer component hai
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 pb-16 md:pb-0">
        <Navbar />
        {children}
        <MobileCTA />
      </body>
    </html>
  );
}