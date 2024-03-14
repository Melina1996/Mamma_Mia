import React, { useEffect } from "react";
import data from "../assets/JSON/data.json";
import { add, remove, removeOneItem, total } from "../features/basketSlice";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Navbar from "./Navbar";
import Bin from "../assets/img/bin.png";
import Skate from "../assets/img/skate.png";

export default function ShoppingCart() {
  const myBasket = useSelector((state) => state.basket.value);

  const dispatch = useDispatch();

  const myTotal = useSelector((state) => state.basket.total);

  // const [total, setTotal] = useState(0);

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
    <div className="w-screen">
      <Navbar />

      <div className="pt-28 flex justify-center items-start">
        <div
          className={`${
            myBasket.length == 0 ? "w-[0]" : "w-[50%]"
          } bg-[#006214ff] rounded-r-xl shadow-lg`}
        >
          {myBasket.map((item, key) => (
            <div
              key={key}
              className="flex justify-start items-center text-center w-[800px]"
            >
              <img
                className="rounded w-[30%] transition-all hover:rotate-180"
                src={
                  new URL(
                    //image path starts from HERE
                    `../assets/img/${item.image}`,
                    import.meta.url
                  ).href
                }
                alt=""
              />
              <div className="flex flex-col items-start gap-2 pt-4">
                <p className="font-semibold text-[20px] text-white">
                  {item.name.toUpperCase()}
                </p>
                <p>{item.ingredients.join(" | ")}</p>

                <p className="text-[18px] text-[#006214ff] font-semibold text-white">
                  {item.price * item.quantity}€
                </p>

                <div className="flex justify-center items-center gap-2">
                  <button
                    onClick={() => dispatch(removeOneItem(item))}
                    className="bg-black text-white p-2 px-4 rounded-full font-semibold hover:bg-white hover:text-black"
                  >
                    -
                  </button>
                  <p className="font-semibold">{item.quantity}</p>
                  <button
                    onClick={() => dispatch(add(item))}
                    className="bg-black text-white p-2 px-4 rounded-full font-semibold hover:bg-white hover:text-black"
                  >
                    +
                  </button>

                  <button
                    className="hover:bg-red-600 text-white p-2 rounded bg-black"
                    onClick={() => dispatch(remove(key))}
                  >
                    <img src={Bin} alt="" className="w-[20px] h-[20px]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`${
            myBasket.length == 0 ? "w-screen" : "w-[50%]"
          } flex flex-col items-center justify-end`}
        >
          <img src={Skate} alt=""/>

          <div className="flex justify-center items-center w-[100%]">
            {myBasket.length == 0 ? (
              <h1 className="text-[18px] text-[#006214ff] font-semibold tracking-widest">MAMMA MIA, YOUR BASKET IS STILL EMPTY!</h1>
            ) : (

              <div className="border-t-2 border-black w-[200px] flex justify-center">
                  <h1 className="font-semibold text-[20px]">TOTAL:{myTotal} €</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
