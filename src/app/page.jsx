import Link from "next/link";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";          
import Specialties from "@/components/Specialties";
import LavenderSection from "@/components/LavenderSection";
import BioSection from "@/components/BioSection"; 
import Office from "@/components/Office";
import GetStarted from "@/components/GetStarted";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />              
      <Specialties />        
      <LavenderSection />    
      <BioSection />
      <Office />             
      <FAQ />                
      <GetStarted />         
    </main>
  );
}
