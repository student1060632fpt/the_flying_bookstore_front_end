"use client";
import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styled from "styled-components";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
		in place of 'smooth' */
    });
  };
  useEffect(() => {
    console.log("scroll");
    
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <Button title="Scroll to Top">
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{display: visible ? 'inline' : 'none'}} 
      />
    </Button>
  );
};

export default ScrollButton;


export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 90vw;
  bottom: 10vh;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: #EAA451;
`;
