import React from "react";
import { useState } from "react";

import Up from "../assets/img/up.png"

export default function ScrollBtn() {
  //SCROLL BTN
  const [visible, setVisible] = useState(false);

  //Btn is displayed once I scrolled 100px
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  //I scroll until top-0: on click of btn
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div>
      <button
        className="fixed bottom-5 right-3"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <img src={Up} alt="" className="w-[70px]"/>
      </button>
    </div>
  );
}