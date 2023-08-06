import Image from "next/image";
import Navbar from "../components/Navbar"

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar/>
    </main>
  );
}
