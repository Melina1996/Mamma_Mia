import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { chose } from "../features/ingredientsSlice";
import data from "../assets/JSON/data.json";

import Dropdown from "./Dropdown";
import X from "../assets/img/x.png";

export default function Filters(props) {
  const [toggle, setToggle] = useState(false);

  //to be able to change btn-color correspondingly
  const [btn, setBtn] = useState("");

  const dispatch = useDispatch();

  return (
    <div className="flex justify-center max-[426px]:flex-col items-center gap-2 pt-4 pb-4 relative">
      <h1 className="font-semibold tracking-widest">SORT BY:</h1>

      <div className="flex justify-end items-center relative gap-2">
        <button
          onClick={() => {
            props.setPizzas(props.numAscending), setBtn("lowest");
          }}
          className={`${
            btn == "lowest" ? "bg-[#006214ff]" : "bg-black"
          } hover:bg-[#006214ff] text-white p-2 rounded-full w-[160px] shadow-lg`}
        >
          <p className="tracking-widest text-[15px]">LOWEST PRICE</p>
        </button>
        <button
          onClick={() => {
            props.setPizzas(props.numDescending), setBtn("highest");
          }}
          className={`${
            btn == "highest" ? "bg-[#006214ff]" : "bg-black"
          } hover:bg-[#006214ff] text-white p-2 rounded-full w-[160px] shadow-lg`}
        >
          <p className="tracking-widest text-[15px]">HIGHEST PRICE</p>
        </button>
      </div>

      <button
        onClick={() => setToggle(!toggle)}
        className="hover:bg-[#006214ff] border-[#006214ff] border-2 text-black hover:text-white p-2 rounded-full w-[150px] shadow"
      >
        <p className="tracking-widest text-[15px]">INGREDIENTS</p>
      </button>
      {toggle ? <Dropdown /> : ""}

      <button
        onClick={() => {
          props.setPizzas(data), dispatch(chose("")), setBtn("");
        }}
        className="hover:bg-[#FF383Dff] text-white p-2 rounded-full bg-black shadow"
      >
        <img
          src={X}
          alt=""
          className="w-[20px] h-[20px] transition-all hover:rotate-90"
        />
      </button>
    </div>
  );
}
