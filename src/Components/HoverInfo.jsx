import React from "react";
import { useSelector } from "react-redux";

export default function HoverInfo(props) {

  const myBasket = useSelector((state) => state.basket.value);

  const myTotal = useSelector((state) => state.basket.total);

  return (
    <div
      className={`bg-[#F7C300ff] text-black absolute ${
        myBasket.length == 0 ? "w-[200px]" : "w-[400px]"
      } top-[75px] z-10 right-2 rounded p-4 py-6 myNav`}
      style={props.style}
    >
      {myBasket.length == 0 ? (
        <p className="tracking-widest">Your basket is empty!</p>
      ) : (
        <p className="font-semibold tracking-widest">Recently added items:</p>
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
                  className={`w-[30%]`}
                />
                <p className="tracking-widest">{item.name.toUpperCase()}</p>
              </div>
            </div>
          );
        }
      })}

      {myBasket.length != 0 ? (
        <div className="w-[100%] flex justify-end pr-4">
          <p className="text-[15px] font-semibold tracking-widest">TOTAL: {myTotal}€</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
