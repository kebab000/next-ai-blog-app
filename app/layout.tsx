import Navbar from "./(shared)/Navbar";
import Footer from "./(shared)/Footer";
import "./globals.css";
// import { Open_Sans } from "next/font/google";

// const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Blog AI App",
  description: "Blog built in Next JS that uses AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
