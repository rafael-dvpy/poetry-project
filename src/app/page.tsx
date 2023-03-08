import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import NavBarPoem from "@/Components/NavBarPoem";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <NavBarPoem />
      <main>
        <div>
          <h1>Hello_World</h1>
        </div>
      </main>
    </>
  );
}
