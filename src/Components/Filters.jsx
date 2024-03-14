import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { chose } from "../features/ingredientsSlice";
import data from "../assets/JSON/data.json"

import Dropdown from "./Dropdown";
import X from "../assets/img/x.png"

export default function Filters(props) {

    const [toggle, setToggle] = useState(false);

    //to be able to change btn-color correspondingly
    const[btn,setBtn]=useState("")

    const dispatch = useDispatch()

  return (
    <div className="flex justify-center max-[426px]:flex-col items-center gap-2 pt-4 pb-4 relative">

      <h1 className="font-semibold">SORT BY:</h1>

      <div className="flex justify-end items-center relative gap-2">
        <button
          onClick={() => {props.setPizzas(props.numAscending), setBtn("lowest")}}
          className={`${btn == "lowest" ? "bg-[#006214ff]" : "bg-black"} text-white p-2 rounded-full w-[150px] shadow`}
        >
          <p>LOWEST PRICE</p>
        </button>
        <button
          onClick={() => {props.setPizzas(props.numDescending), setBtn("highest")}}
          className="hover:bg-[#006214ff] bg-black text-white p-2 rounded-full w-[150px] shadow"
        >
          <p>HIGHEST PRICE</p>
        </button>
      </div>

        <button
          onClick={() => setToggle(!toggle)}
          className="hover:bg-[#006214ff] border-[#006214ff] border-2 text-black hover:text-white p-2 rounded-full w-[150px] shadow"
        >
          INGREDIENTS
        </button>
        {toggle ? <Dropdown /> : ""}

        <button
          onClick={() => {props.setPizzas(data),dispatch(chose(""))}}
          className="hover:bg-red-600 text-white p-2 rounded-full bg-black shadow"
        >
          <img src={X} alt="" className="w-[20px] h-[20px] transition-all hover:rotate-90"/>
        </button>

    </div>
  );
}
