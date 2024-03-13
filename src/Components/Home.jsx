import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { chose } from "../features/ingredientsSlice";
import { Link } from "react-router-dom";

import data from "../assets/JSON/data.json";

import Navbar from "./Navbar";
import Filters from "./Filters";

import Banner from "../assets/img/pizzaBanner.jpg"

export default function Home() {

  const myIngredient = useSelector((state) => state.ingredients.value);

  //state to set order of displayed pizzas
  const[myPizzas,setPizzas]=useState(data)

  //order products based on their price
  const numAscending = [...data].sort((a, b) => a.price - b.price);

  const numDescending = [...data].sort((a, b) => b.price - a.price)

//MACHE 2 TASTEN für jeweils WERT!!
  return (
    <div className="w-screen flex flex-col justify-center bg-[#FFF7EFff]">
      
        <Navbar />

        <div className="flex justify-center items-end xl:h-[500px] lg:h-[400px] md:h-[350px] max-[426px]:h-[300px]">

          <img src={Banner} className="w-[30%] max-[426px]:w-[50%]" alt=""/>

        </div>

        <Filters setPizzas={setPizzas} numAscending={numAscending} numDescending={numDescending} myPizzas={myPizzas}/>


      <div className="flex flex-wrap justify-center items-center">
        {myIngredient != ""
          ? myPizzas.map((item, key) =>
              item.ingredients.includes(myIngredient) ? (
                <div
                  key={key}
                  className="flex flex-col justify-center items-center text-center xl:w-[400px] xl:h-[400px] lg:w-[300px] lg:h-[300px] md:w-[350px] md:h-[350px] max-[426px]:w-[200px] max-[426px]:h-[200px]"
                >
                  <img
                    className="rounded xl:w-[70%] lg:w-[65%] md:w-[70%] max-[426px]:w-[40%] transition-all hover:rotate-180 drop-shadow-xl"
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
                    <Link to={`/details/${key}`} className="font-semibold md:text-[18px] max-[426px]:text-[15px]">
                      {item.name.toUpperCase()}
                    </Link>
                    <p className="text-[#006214ff] font-semibold">{item.price}€</p>
                    <p className="max-[426px]:text-[15px] max-[426px]:h-[60px]">{item.ingredients.join(" | ")}</p>
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
                  className="rounded xl:w-[70%] lg:w-[65%] md:w-[70%] max-[426px]:w-[40%] transition-all hover:rotate-180 drop-shadow-xl"
                  src={
                    new URL(
                      //image path starts from HERE
                      `../assets/img/${item.image}`,
                      import.meta.url
                    ).href
                  }
                  alt=""
                />
                <div className="flex flex-col gap-2">

                  <div className="flex justify-center items-center gap-2">

                    <Link to={`/details/${key}`} className="font-semibold md:text-[18px] max-[426px]:text-[15px]">
                      {item.name.toUpperCase()}
                    </Link>

                    <p className="text-[#006214ff] font-semibold">{item.price}€</p>

                  </div>
                  <p className="max-[426px]:text-[15px] max-[426px]:h-[60px] lg:h-[60px]">{item.ingredients.join(" | ")}</p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
