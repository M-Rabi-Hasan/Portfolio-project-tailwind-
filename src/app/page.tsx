import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar/page";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="text-center">
          <Navbar/>
        <h1 className="text-4xl font-bold mt-3">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">Hi, I’m Rabi Hassan, a Full Stack Developer.</p>
        <Image src="/profile3.jpg" alt="Profile Picture" width={130} height={150} className="rounded-full mx-auto" />
      </header>
    </div>
  );
}
