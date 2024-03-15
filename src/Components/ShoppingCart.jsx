import React, { useEffect } from "react";
import data from "../assets/JSON/data.json";
import { add, remove, removeOneItem, total } from "../features/basketSlice";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Navbar from "./Navbar";
import Bin from "../assets/img/bin.png";
import Skate from "../assets/img/skate.png";
import Footer from "./Footer";

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
    <div className="w-screen bg-[#FFF7EFff]">
      <Navbar />

      <div className="pt-28 flex flex-row max-[426px]:flex-col-reverse justify-center items-center pb-10 max-[426px]:gap-4">
        <div
          className={`${
            myBasket.length == 0 ? "w-[0]" : "md:w-[60%] max-[426px]:w-[100%]"
          }  md:rounded-r-xl h-[500px] overflow-auto pl-10 max-[426px]:pl-0 pt-4`}
        >
          <h1 className="tracking-wider lg:text-[18px] md:text-[17px] pl-4 pb-4 max-[426px]:text-center max-[426px]:pl-0">
            YUMMY, look at all these pizzas in your basket:
          </h1>
          {myBasket.map((item, key) => (
            <div
              key={key}
              className="flex justify-start items-center text-center"
            >
              <img
                className={`lg:w-[30%] md:w-[40%] max-[426px]:w-[50%] rounded transition-all hover:rotate-180`}
                src={
                  new URL(
                    //image path starts from HERE
                    `../assets/img/${item.image}`,
                    import.meta.url
                  ).href
                }
                alt=""
              />
              <div className="flex lg:flex-row flex-col gap-2 p-4 lg:items-center items-start">
                <div className="xl:w-[350px] lg:w-[200px] flex flex-col justify-start items-start">
                  <p className="font-semibold md:text-[17px] xl:text-[20px] max-[426px]:text-[16px] text-black tracking-wider text-left">
                    {item.name.toUpperCase()}
                  </p>

                  {item.type == "DIY" ? (
                    <p className=" tracking-wider max-[426px]:text-[15px] lg:text-[16px] xl:text-[18px] text-left">
                      {item.ingredients.map((item, key) => (
                        <span key={key}>{item.name} </span>
                      ))}
                    </p>
                  ) : (
                    <p className="text-black text-left tracking-wider max-[426px]:text-[15px] xl:text-[18px] lg:text-[16px]">
                      {item.ingredients.join(" | ")}
                    </p>
                  )}

                  <p className="xl:text-[18px] lg:text-[16px] max-[426px]:text-[15px] text-[#006214ff] font-semibold text-black tracking-wider">
                    {item.price * item.quantity}€
                  </p>
                </div>

                <div className="flex">
                  <div className="flex justify-center items-center gap-2">
                    <button
                      onClick={() => dispatch(removeOneItem(item))}
                      className="bg-black text-white p-2 px-4 rounded-full font-semibold hover:bg-[#006214ff]"
                    >
                      -
                    </button>
                    <p className="font-semibold text-black tracking-wider max-[426px]:text-[15px]">
                      {item.quantity}
                    </p>
                    <button
                      onClick={() => dispatch(add(item))}
                      className="bg-black text-white p-2 px-4 rounded-full font-semibold hover:bg-[#006214ff]"
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
            </div>
          ))}
        </div>

        <div
          className={`${
            myBasket.length == 0 ? "w-screen" : "w-[40%] max-[426px]:w-[100%]"
          } flex flex-col items-center justify-end`}
        >
          <img src={Skate} alt="" className="xl:pt-10 max-[426px]:w-[60%]" />

          <div className="flex justify-center items-center w-[100%] pt-2">
            {myBasket.length == 0 ? (
              <h1 className="text-[18px] text-[#006214ff] font-semibold tracking-widest xl:pt-10 lg:pt-4 md:pt-6 max-[426px]:text-center max-[426px]:pt-4 max-[426px]:w-[80%]">
                MAMMA MIA, YOUR BASKET IS STILL EMPTY!
              </h1>
            ) : (
              <div className="border-t-2 border-black lg:w-[280px] md:w-[200px] flex lg:flex-row flex-col justify-center items-center pt-2 gap-4">
                <h1 className="font-semibold lg:text-[18px] tracking-widest">
                  TOTAL: {myTotal} €
                </h1>
                <button className="bg-black text-white p-2 rounded-full w-[80px] shadow-lg tracking-widest hover:bg-[#006214ff]">
                  ORDER
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
