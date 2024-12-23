import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";
import axios from "axios";

export const metadata: Metadata = {
  title: "Unit Ops Media | Tech Consultancy & BusyLittleScanner",
  description: "Unit Ops Media - Tech consultancy services and BusyLittleScanner for seamless e-commerce and inventory management.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Pricing />
      <Blog />
    </>
  );
}
