import React from "react";
import Mail from "./Mail";
import BookCategoryList from "./BookCategoryList";
import Info from "./Info";
import ScrollButton from "../scrollButton/ScrollButton";

const Footer = () => {
  return (
    <>
      <Mail />
      {/* <BookCategoryList /> */}
      <Info />
      <ScrollButton /> 

    </>
  );
};

export default Footer;
