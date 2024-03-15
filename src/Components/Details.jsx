import React from "react";
import data from "../assets/JSON/data.json";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add, remove } from "../features/basketSlice";
import { NavLink } from "react-router-dom";

import Navbar from "./Navbar";
import Back from "../assets/img/back.png";
import Ingredients from "./Ingredients";
import Footer from "./Footer";

export default function Details() {
  const { id } = useParams();

  const dispatch = useDispatch();

  return (
    <div className="bg-[#FFF7EFff] h-screen">
      <Navbar></Navbar>

      <div className="pl-14 pt-28">
        <NavLink to={`/`}>
          <img src={Back} alt="" className="w-[70px] h-[70px] drop-shadow-xl" />
        </NavLink>
      </div>

      {data[id].name != "DIY" ? (
        <div className="flex flex-col lg:flex-row justify-center items-center w-screen pb-10">
          <div className="xl:w-[50%] lg:w-[40%] flex justify-center items-center">
            <img
              className="rounded md:w-[60%] lg:w-[70%] drop-shadow-xl transform-all hover:rotate-90"
              src={
                new URL(
                  //image path starts from HERE
                  `../assets/img/${data[id].image}`,
                  import.meta.url
                ).href
              }
              alt=""
            />
          </div>

          <div className="flex flex-col justify-center lg:items-start items-center xl:w-[50%] lg:w-[60%] gap-3">
            <div className="flex justify-center items-center gap-4 max-[426px]:w-screen">
              <h1 className="font-semibold lg:text-[20px] tracking-wider">
                {data[id].name.toUpperCase()}
              </h1>

              <p className="text-[#006214ff] lg:text-[22px] font-semibold tracking-wider">
                {data[id].price} €
              </p>
            </div>

            <p className="lg:text-[16px] xl:text-[18px] tracking-wider max-[426px]:w-screen text-center">
              {data[id].ingredients.join(" | ")}
            </p>

            <p className="md:w-[500px] w-[80%] xl:w-[600px] lg:text-[15px] xl:text-[17px] text-justify tracking-wider leading-7">
              {data[id].description}
            </p>

            <button
              onClick={() => dispatch(add(data[id]))}
              className="bg-black text-white p-2 rounded-full w-[80px] shadow-lg tracking-widest hover:bg-[#006214ff]"
            >
              ADD
            </button>
          </div>
        </div>
      ) : (
        <Ingredients />
      )}

      <Footer />
    </div>
  );
}
