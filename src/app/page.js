import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { PrimaryButton } from "@/subcomponents/Buttons";

export default function Home() {
  return (
    <div className="hero-section overflow-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}
