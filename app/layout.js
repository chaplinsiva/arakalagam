import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Arakalagam TV | Independent Tamil Media Powering Social Change",
  description:
    "Arakalagam TV is a high-impact independent Tamil digital news media network focused on social justice, political analysis, investigative journalism, and historical awareness. 300K+ subscribers, 5000+ videos.",
  keywords: [
    "Arakalagam TV",
    "Tamil media",
    "independent journalism",
    "social justice",
    "political analysis",
    "Tamil news",
    "investigative journalism",
  ],
  openGraph: {
    title: "Arakalagam TV | Independent Tamil Media Powering Social Change",
    description:
      "A high-impact independent Tamil media network shaping political and social discourse.",
    type: "website",
  },
  icons: {
    icon: "https://yt3.googleusercontent.com/m3rHVIVMOHyoujV49Kjb2x9o4o5Hp7TpHNBh7GbRGx9L3UHSbdqfLLwfDsFcBdUOIRZXk-sb=s160-c-k-c0x00ffffff-no-rj",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-background text-text-primary font-[var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  );
}
