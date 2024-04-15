'use client';
import HomeBanner from "@/components/home/HomeBanner";
import Statistic from "./../components/home/Statistic/Statistic";
import PromoteSection from "@/components/home/PromoteSection";
import BookCategory from "@/components/home/Category/BookCategory";
import NewComingList from "@/components/home/NewComing/NewComingList";
import ScrollButton from "@/components/scrollButton/ScrollButton";
import { useGenreStore } from "@/hooks/genre";
import { useEffect } from "react";
export default function Home() {
  const fetchGenre = useGenreStore(state => state.fetch);
  useEffect(() => {
    fetchGenre();
  }, [])
  
  return (
    <div className="">
      <HomeBanner />
      <Statistic />
      <PromoteSection />
      <BookCategory />
      {/* <NewComingList /> */}
    </div>
  );
}
