"use client";

import FilterProperties from "@/components/FilterProperties";
import Footer from "@/components/Footer";
import HeaderSection from "@/components/HeaderSection";
import { Navbar } from "@/components/Navbar";
import PropertySection from "@/components/PropertySection";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <HeaderSection></HeaderSection>
      <FilterProperties></FilterProperties>
      <PropertySection></PropertySection>
      <Footer></Footer>
    </div>
  );
}
