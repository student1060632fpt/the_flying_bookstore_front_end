import type { Metadata } from "next";
import { SITE_NAME } from "@/utils/env";
import HowToRent from "@/components/checkout/HowToRent";
import { Box, Container } from "@mui/material";

export const metadata: Metadata = {
  title: "Checkout | " + SITE_NAME,
};

export default function CheckoutLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="container mx-auto">
        <div className="mt-10">
          {/* Include shared UI here e.g. a header or sidebar */}
          {children}
        </div>
      </div>
      <HowToRent />
    </>
  );
}
