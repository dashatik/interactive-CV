
import './globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Daria Tikho - Interactive CV",
  description: "An interactive resume showcasing Daria Tikho's skills, projects, and contact details.",
  keywords: ["Daria Tikho", "Interactive Resume", "Frontend Developer", "Web Designer"],
  openGraph: {
    title: "Daria Tikho - Interactive CV",
    description: "Explore Daria Tikho's skills and projects in an engaging, interactive resume format.",
    url: "https://interactive-cv-omega.vercel.app/",
    type: "website",
    images: [
      {
        url: "/globe.svg",
        width: 1200,
        height: 630,
        alt: "Daria Tikho's Interactive CV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DariaTikho",
    title: "Daria Tikho - Interactive CV",
    description: "Explore Daria Tikho's skills and projects in an engaging, interactive resume format.",
    images: ["/globe.svg"],
  },
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
