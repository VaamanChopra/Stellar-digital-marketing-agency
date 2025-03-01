import Navbar from "@/components/Navbar";
import Image from "next/image";


export default function Home() {
  return (
     <div className="w-full md:items-center 
     md:justify-center bg-black/[0.96] 
     antialiased bg-grid-white/[0.02] relative 
     overflow-hidden">
      <Navbar />
     </div>
   );
}
