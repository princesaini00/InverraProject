import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white p-6">
      {/* Hero Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600">
          INVERRA
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          Open new paths in your career with expert mock interview preparation. Learn, practice, and succeed with Inverra.
        </p>
      </div>

      {/* Button */}
      <div className="mt-8">
        <a href="http://localhost:3000/dashboard"><Button className="px-8 py-4 bg-yellow-400 text-gray-900 text-lg rounded-full shadow-lg transform transition-transform hover:scale-105" >
          OPEN INVERRA
        </Button></a>
      </div>

      {/* Visual Section */}
      <div className="mt-12">
        {/* <Image
          src="/inverra-hero-image.png" // Replace with your own image path
          alt="Inverra Hero Image"
          width={500}
          height={350}
          className="rounded-lg shadow-lg"
        /> */}
      </div>

      {/* Footer or Additional Info */}
      <footer className="mt-16 text-gray-500 text-sm">
        © 2024 Inverra. All rights reserved. | Empowering your career.
      </footer>
    </div>
  );
} 