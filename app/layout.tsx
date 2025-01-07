
import './globals.css';
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "My Interactive CV",
  description: "A modern, interactive CV showcasing my skills and experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
