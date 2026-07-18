import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
  <Navbar/>

      <main className="flex-1 px-6 py-8 lg:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col">{children}</div>
      </main>
    <Footer/>
    </div>
  );
}
