'use client'
import HomeBanner from "@/components/home/HomeBanner";
import { useEffect } from "react";
import HeroSection from "./../components/home/HeroSection/HeroSection"
import Statistic from "./../components/home/Statistic/Statistic"
import PromoteSection from "@/components/home/PromoteSection";
export default function Home() {

  return (
    <div className="">
      <HomeBanner/>
      <Statistic />
      <PromoteSection/>
    </div>
  );
}
