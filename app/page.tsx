"use client";

import FilterProperties from "@/components/FilterProperties";
import Footer from "@/components/Footer";
import HeaderSection from "@/components/HeaderSection";
import PropertySection from "@/components/PropertySection";

export default function Home() {
  return (
    <div>
      <HeaderSection></HeaderSection>
      <FilterProperties></FilterProperties>
      <PropertySection></PropertySection>
      <Footer></Footer>
    </div>
  );
}
