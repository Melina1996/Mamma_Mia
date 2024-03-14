import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { total } from "../features/basketSlice";
import { useEffect } from "react";

import Cart from "../assets/img/cart.png";
import Peace from "../assets/img/peace.png";

export default function Navbar() {
  const dispatch = useDispatch();

  const [style, setStyle] = useState({ display: "none" });

  const myTotal = useSelector((state) => state.basket.total);

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
    <div className="myNav flex justify-center gap-4 text-white items-center w-screen h-[100px] pr-10 shadow fixed z-30 top-0">
      <div className="w-[50%] flex justify-start pl-10">
        <NavLink to={`/`}>
          <img src={Peace} alt="" className="w-[100px] h-[100px]" />
        </NavLink>
      </div>

      <div className="w-[50%] flex justify-end">
        <NavLink
          to={`/shoppingcart`}
          onMouseEnter={() => {
            setStyle({ display: "block" });
          }}
          onMouseLeave={() => {
            setStyle({ display: "none" });
          }}
        >
          <img src={Cart} alt="" className="w-[35px] h-[35px] drop-shadow-xl" />
        </NavLink>
        <div
          className={`bg-[#F7C300ff] text-black absolute ${
            myBasket.length == 0 ? "w-[200px]" : "w-[400px]"
          } top-[75px] z-10 right-2 rounded p-4 py-6 myNav`}
          style={style}
        >
          {myBasket.length == 0 ? (
            <p>Your basket is empty!</p>
          ) : (
            <p className="font-semibold">Recently added items:</p>
          )}

          {myBasket.map((item, key) => {
            if (key == myBasket.length - 1 || key == myBasket.length - 2) {
              return (
                <div className="">
                  <div className="flex items-center">
                    <img
                      src={
                        new URL(
                          //image path starts from HERE
                          `../assets/img/${item.image}`,
                          import.meta.url
                        ).href
                      }
                      alt=""
                      className="w-[30%]"
                    />
                    <p>{item.name.toUpperCase()}</p>
                  </div>
                </div>
              );
            }
          })}

          {myBasket.length != 0 ? (
            <div className="w-[100%] flex justify-end pr-4">
              <p className="text-[15px] font-semibold">TOTAL: {myTotal}€</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
