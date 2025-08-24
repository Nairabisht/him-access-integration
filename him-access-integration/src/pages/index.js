import Image from "next/image";
import { Inter } from "next/font/google";
import LandingPage from "./landing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <LandingPage/>
  );
}
