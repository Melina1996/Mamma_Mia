import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { total } from "../features/basketSlice";
import { useEffect } from "react";

import Cart from "../assets/img/cart.png";
import Peace from "../assets/img/peace.png";
import HoverInfo from "./HoverInfo";

export default function Navbar() {
  const dispatch = useDispatch();

  const [style, setStyle] = useState({ display: "none" });

  const myBasket = useSelector((state) => state.basket.value);

  useEffect(() => {
    dispatch(
      total(
        myBasket.reduce(
          (total, currentValue) =>
            (total = total + currentValue.price * currentValue.quantity),
          0
        )
      )
    );
  }, [myBasket]);

  return (
    <div className="myNav flex justify-center gap-4 text-white items-center w-screen h-[100px] pr-14 shadow fixed z-30 top-0">
      <div className="w-[50%] flex justify-start pl-14">
        <NavLink to={`/`}>
          <img src={Peace} alt="" className="w-[100px] h-[100px]" />
        </NavLink>
      </div>

      <div className="w-[50%] flex justify-end relative">
        <NavLink
          to={`/shoppingcart`}
          onMouseEnter={() => {
            setStyle({ display: "block" });
          }}
          onMouseLeave={() => {
            setStyle({ display: "none" });
          }}
        >
          <img src={Cart} alt="" className="w-[40px] h-[40px] drop-shadow-xl" />
        </NavLink>

        <div className="w-[20px] h-[20px] bg-black rounded-full flex justify-center items-center p-3 absolute right-[-20px] top-[-10px]">
          <p className="text-[14px] font-semibold">{myBasket.length}</p>
        </div>

        <HoverInfo style={style} />
      </div>
    </div>
  );
}
