
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import SplitHero from "@/components/SplitHero";
import ProductSection from "@/components/ProductSection";
import SpecialEditions from "@/components/SpecialEditions";
import FashionReveal from "@/components/FashionReveal";


export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />

      <main>
        <Intro />
        <SplitHero />
        <ProductSection />
        <SpecialEditions />
        <FashionReveal />
    
      </main>
    </>
  );
}

