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

      <div className="pt-28 flex justify-center items-center">
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
                className={`${item.name == "DIY" ? "w-[30%]" : "w-[30%]"} rounded transition-all hover:rotate-180`}
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
                <p className="font-semibold text-[20px] text-white tracking-wider">
                  {item.name.toUpperCase()}
                </p>

                {item.name == "DIY" ? (
                  <p className="tracking-wider">{item.ingredients.map((item,key)=>
                  <span key={key}>{item.name} </span>
                  )}</p>
  
                ) : (
                  <p className="text-white tracking-wider">{item.ingredients.join(" | ")}</p>
                )}

                <p className="text-[18px] text-[#006214ff] font-semibold text-white tracking-wider">
                  {item.price * item.quantity}€
                </p>

                <div className="flex justify-center items-center gap-2">
                  <button
                    onClick={() => dispatch(removeOneItem(item))}
                    className="bg-black text-white p-2 px-4 rounded-full font-semibold hover:bg-white hover:text-black"
                  >
                    -
                  </button>
                  <p className="font-semibold text-white tracking-wider">{item.quantity}</p>
                  <button
                    onClick={() => dispatch(add(item))}
                    className="bg-black text-white p-2 px-4 rounded-full font-semibold hover:bg-white hover:text-black"
                  >
                    +
                  </button>

                  <button
                    className="hover:bg-red-600 text-white p-2 rounded bg-black tracking-wider"
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
          <img src={Skate} alt="" className="xl:pt-10"/>

          <div className="flex justify-center items-center w-[100%] pt-2">
            {myBasket.length == 0 ? (
              <h1 className="text-[18px] text-[#006214ff] font-semibold tracking-widest xl:pt-10 lg:pt-4 md:pt-6 max-[426px]:text-center max-[426px]:pt-4 max-[426px]:w-[80%]">
                MAMMA MIA, YOUR BASKET IS STILL EMPTY!
              </h1>
            ) : (
              <div className="border-t-2 border-black w-[280px] flex justify-center pt-2">
                <h1 className="font-semibold text-[20px] tracking-widest">TOTAL:{myTotal} €</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
