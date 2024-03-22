import Image from "next/image";
import Header from "./ui/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black flex-col container mx-auto px-12 py-4">
     <Header></Header>
    </main>
  );
}
