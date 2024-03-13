import React from "react";
import { useState } from "react";

import Dropdown from "./Dropdown";

export default function Filters(props) {

    const [toggle, setToggle] = useState(false);

    //to be able to change btn-color correspondingly
    const[btn,setBtn]=useState("")

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

    </div>
  );
}
