'use client';
import HomeBanner from "@/components/home/HomeBanner";
import { useEffect } from "react";
import HeroSection from "./../components/home/HeroSection/HeroSection";
import Statistic from "./../components/home/Statistic/Statistic";
import PromoteSection from "@/components/home/PromoteSection";
import BookCategory from "@/components/home/Category/BookCategory";
import NewComingList from "@/components/home/NewComing/NewComingList";
import ScrollButton from "@/components/scrollButton/ScrollButton";
export default function Home() {
  return (
    <div className="">

      <HomeBanner />
      <Statistic />
      <PromoteSection />
      <BookCategory />
      <NewComingList />

    </div>
  );
}
