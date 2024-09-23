'use client';
import HomeBanner from "@/components/home/HomeBanner";
import Statistic from "./../components/home/Statistic/Statistic";
import PromoteSection from "@/components/home/PromoteSection";
import BookCategory from "@/components/home/Category/BookCategory";
import { useGenreStore } from "@/hooks/genre";
import { useEffect } from "react";
import { useListNewBookStore } from "@/hooks/listNewBook";
export default function Home() {
  const fetchGenre = useGenreStore(state => state.fetch);
  const fetchListBook = useListNewBookStore(state=>state.fetch)
  useEffect(() => {
    fetchGenre();
    fetchListBook();
  }, [fetchGenre, fetchListBook])
  
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
