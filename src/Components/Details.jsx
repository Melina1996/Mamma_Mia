import React from "react";
import data from "../assets/JSON/data.json";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add, remove } from "../features/basketSlice";
import { NavLink } from "react-router-dom";

import Navbar from "./Navbar";
import Back from "../assets/img/back.png";
import Ingredients from "./Ingredients";

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
        <div className="flex flex-col justify-center items-center w-screen">
          <div className="w-[50%] flex justify-center items-center">
            <img
              className="rounded md:w-[60%] drop-shadow-xl transform-all hover:rotate-90"
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

          <div className="flex flex-col justify-center items-center w-[50%] gap-3">
            <div className="flex justify-center items-center gap-4">
              <h1 className="font-semibold xl:text-[25px] lg:text-[22px] tracking-wider">
                {data[id].name.toUpperCase()}
              </h1>

                <p className="text-[#006214ff] xl:text-[25px] lg:text-[22px] font-semibold tracking-wider">
                  {data[id].price} €
                </p>
  
            </div>

            <p className="xl:text-[18px] lg:text-[16px] tracking-wider">
              {data[id].ingredients.join(" | ")}
            </p>

              <button
                onClick={() => dispatch(add(data[id]))}
                className="bg-black text-white p-2 rounded-full w-[100px] shadow-lg tracking-widest"
              >
                ORDER
              </button>

          </div>
        </div>
      ) : (
        <Ingredients />
      )}
    </div>
  );
}
