import type { Metadata } from "next";
import { SITE_NAME } from "@/utils/env";

export const metadata: Metadata = {
  title: "Checkout | " + SITE_NAME,
};

export default function CheckoutLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Include shared UI here e.g. a header or sidebar */}
      {children}
    </>
  )
}