import Navbar from "@/components/Navbar";
import MobileCTA from "@/components/MobileCTA";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 antialiased pb-16 md:pb-0">
        <Navbar />
        <main className="bg-slate-950">{children}</main>
        <MobileCTA />
      </body>
    </html>
  );
}