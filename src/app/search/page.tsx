import FilterComponent from "@/components/search/Filter";
import HeaderListBook from "@/components/search/HeaderListBook";
import ListSearchBook from "@/components/search/ListSearchBook";
import { SITE_NAME } from "@/utils/env";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "List book | " + SITE_NAME,
};
// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <div className="container mx-auto mt-10 mb-20 flex gap-7 flex-row">
      <div className="basis-1/5 ">
        <FilterComponent />
      </div>
      <div className="flex-1">
        <HeaderListBook/>
        <ListSearchBook/>
      </div>
    </div>
  );
}
