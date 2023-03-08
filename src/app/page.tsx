import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/Components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div>
          <h1>Hello_World</h1>
        </div>
      </main>
    </>
  );
}
