import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { chose } from "../features/ingredientsSlice";
import { Link } from "react-router-dom";

import data from "../assets/JSON/data.json";

import Navbar from "./Navbar";
import Filters from "./Filters";
import Footer from "./Footer";
import ScrollBtn from "./ScrollBtn";

import Banner from "../assets/img/pizzaBanner.jpg";

export default function Home() {
  const myIngredient = useSelector((state) => state.ingredients.value);

  //state to set order of displayed pizzas
  const [myPizzas, setPizzas] = useState(data);

  //order products based on their price
  const numAscending = [...data].sort((a, b) => a.price - b.price);

  const numDescending = [...data].sort((a, b) => b.price - a.price);

  //MACHE 2 TASTEN für jeweils WERT!!
  return (
    <div className="w-screen flex flex-col justify-center bg-[#FFF7EFff]">
      <Navbar />

      <div className="flex justify-center items-end xl:h-[500px] lg:h-[400px] md:h-[350px] max-[426px]:h-[300px]">
        <img src={Banner} className="w-[30%] max-[426px]:w-[50%]" alt="" />
      </div>

      <Filters
        setPizzas={setPizzas}
        numAscending={numAscending}
        numDescending={numDescending}
        myPizzas={myPizzas}
      />

      <div className="flex flex-wrap justify-center items-center pt-4">
        {myIngredient != ""
          ? myPizzas.map((item, key) =>
              item.ingredients.includes(myIngredient) ? (
                <div
                  key={key}
                  className="flex flex-col justify-center items-center text-center xl:w-[400px] xl:h-[400px] lg:w-[300px] lg:h-[300px] md:w-[350px] md:h-[350px] max-[426px]:w-[200px] max-[426px]:h-[200px]"
                >
                  <img
                    className={`${
                      item.name == "DIY" ? "xl:w-[80%]" : "xl:w-[70%]"
                    } rounded lg:w-[65%] md:w-[70%] max-[426px]:w-[40%] transition-all hover:rotate-180 drop-shadow-xl`}
                    src={
                      new URL(
                        //image path starts from HERE
                        `../assets/img/${item.image}`,
                        import.meta.url
                      ).href
                    }
                    alt=""
                  />
                  <div className="flex flex-col gap-2 pt-4">
                    <div className="max-[426px]:flex max-[426px]:flex-col">
                      <Link
                        to={`/details/${key}`}
                        className="font-semibold md:text-[18px] max-[426px]:text-[15px] tracking-wider"
                      >
                        {item.name.toUpperCase()}
                      </Link>
                      <p className="text-[#006214ff] font-semibold tracking-wider">
                        {item.price}€
                      </p>
                    </div>

                    <p className="max-[426px]:text-[15px] max-[426px]:h-[60px] md:h-[60px] tracking-wider">
                      {item.ingredients.join(" | ")}
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )
            )
          : myPizzas.map((item, key) => (
              <div
                key={key}
                className="flex flex-col justify-center items-center text-center xl:w-[400px] xl:h-[400px] lg:w-[300px] lg:h-[300px] md:w-[350px] md:h-[350px] max-[426px]:w-[200px] max-[426px]:h-[200px]"
              >
                <img
                  className={`rounded lg:w-[65%] md:w-[70%] max-[426px]:w-[40%] transition-all hover:rotate-180 drop-shadow-xl`}
                  src={
                    new URL(
                      //image path starts from HERE
                      `../assets/img/${item.image}`,
                      import.meta.url
                    ).href
                  }
                  alt=""
                />
                <div className="flex flex-col gap-2 max-[426px]:justify-center max-[426px]:items-center">
                  <div className="flex justify-center items-center gap-2 max-[426px]:h-[40px]">
                    <div className="max-[426px]:flex max-[426px]:flex-col md:flex md:flex-row md:gap-2">
                      <Link
                        to={`/details/${key}`}
                        className="font-semibold md:text-[18px] max-[426px]:text-[15px] tracking-wider"
                      >
                        {item.name.toUpperCase()}
                      </Link>
                      <p className="text-[#006214ff] font-semibold tracking-wider">
                        {item.price}€
                      </p>
                    </div>
                  </div>
                  <div className="max-[426px]:text-[15px] max-[426px]:w-[80%] max-[375px]:w-[100%] max-[426px]:h-[60px] md:h-[60px] tracking-wider max-[426px]:flex max-[426px]:justify-center max-[426px]:items-center">
                    <p>
                      {item.ingredients.join(" | ")}
                    </p>

                  </div>

                </div>
              </div>
            ))}
      </div>

      <ScrollBtn />
      <Footer />
    </div>
  );
}
