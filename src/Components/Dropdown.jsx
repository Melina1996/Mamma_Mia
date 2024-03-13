import React from "react";
import { useDispatch } from "react-redux";
import { chose } from "../features/ingredientsSlice";

export default function Dropdown() {
  const dispatch = useDispatch();

  return (
    <div className="absolute top-[70px] max-[426px]:top-[150px] r-0 text-black p-2 md:w-auto max-[426px]:w-screen max-[426px]:bg-black max-[426px]:text-white z-40 max-[426px]:py-4 max-[426px]:shadow-xl">
      <ul className="flex max-[426px]:flex-col justify-center items-center gap-4 z-30">
        <button
          onClick={() => dispatch(chose("tomatoes"))}
          className="hover:font-bold hover:text-[#006214ff] flex justify-start"
        >
          <p>Tomatoes</p>
        </button>
        <button
          onClick={() => dispatch(chose("cheese"))}
          className="hover:font-bold hover:text-[#006214ff] flex justify-start"
        >
          <p>Cheese</p>
        </button>
        <button
          onClick={() => dispatch(chose("basil"))}
          className="hover:font-bold hover:text-[#006214ff] flex justify-start"
        >
          <p>Basil</p>
        </button>
        <button
          onClick={() => dispatch(chose("onions"))}
          className="hover:font-bold hover:text-[#006214ff] flex justify-start"
        >
          <p>Onions</p>
        </button>
        <button
          onClick={() => dispatch(chose("tuna"))}
          className="hover:font-bold hover:text-[#006214ff] flex justify-start"
        >
          <p>Tuna</p>
        </button>
        <button
          onClick={() => dispatch(chose("mushrooms"))}
          className="hover:font-bold hover:text-[#006214ff] flex justify-start"
        >
          <p>Mushrooms</p>
        </button>
      </ul>
    </div>
  );
}
