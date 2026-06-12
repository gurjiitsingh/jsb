// app/page.tsx

import { Suspense } from "react";
//import AOSInit from "@/components/AOSInit";

import HeroSectionCustom from "@/custom/cus-components/HeroSectionCustom";
import CategorySliderLight from "@/components/level-1/CategorySliderLight";
import Products from "@/components/level-1/Products";
import BestOfMonth from "@/custom/cus-components/BestOfMonth";
import ContactInfoWrapper from "@/components/ContactInfoWrapper";
import ProductsWrapper from "@/components/ProductsWrapper";
import AboutSection from "@/custom/cus-components/aboutsection";
import FeaturedProjects from "@/custom/cus-components/FeaturedProjects";
import ServicesSection from "@/custom/cus-components/ServicesSection";
import DesignProcessSection from "@/custom/cus-components/DesignProcessSection";
import HeroSlider from "@/custom/cus-components/HeroSlider";

export default function Page() {
  return (
    <main className="text-gray-900 font-sans">

      {/* ✅ Client-only animation init */}
      {/* <AOSInit /> */}

      {/* Sections */}
       <HeroSlider />
      <HeroSectionCustom />
      <AboutSection />
<FeaturedProjects  />
<ServicesSection />
<DesignProcessSection />

      {/* <BestOfMonth /> */}
      {/* <CategorySliderLight />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsWrapper />
      </Suspense> */}

      {/* ✅ Server async component with streaming */}
      <Suspense fallback={<div className="h-40" />}>
        <ContactInfoWrapper />
      </Suspense>

    </main>
  );
}