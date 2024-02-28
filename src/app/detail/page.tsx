import { SITE_NAME } from "@/utils/env";
import { Metadata } from "next";
import BookInfo from "@/components/detail/BookInfo";
import DocumentInfo from "@/components/detail/DocumentInfo";

export const metadata: Metadata = {
  title: "Book detail | " + SITE_NAME,
};
// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <div className="container mx-auto mt-10 mb-20">
      <BookInfo />
      <div className="flex mt-5">
        <div className="basis-9/12">
          <DocumentInfo/>
        </div>
        <div className="flex-1">dd</div>
      </div>
    </div>
  );
}
