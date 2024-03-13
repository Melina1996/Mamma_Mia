import React, { useEffect } from "react";
import data from "../assets/JSON/data.json";
import { add, remove, removeOneItem,total } from "../features/basketSlice";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function ShoppingCart() {

  const myBasket = useSelector((state) => state.basket.value);

  const allPizzas = useSelector((state) => state.basket.allProducts);

  const dispatch = useDispatch();

  const myTotal = useSelector((state) => state.basket.total);

  // const [total, setTotal] = useState(0);

  useEffect(() => {
    dispatch(total(
      myBasket.reduce(
        (total, currentValue) =>
          (total = total + currentValue.price * currentValue.quantity),
        0
      )
    ));
  }, [myBasket]);

  return (
    <div>
      {myBasket.map((item, key) => (
        <div
          key={key}
          className="flex flex-col justify-center items-center text-center w-[400px] h-[400px]"
        >
          <img
            className="rounded w-[50%]"
            src={
              new URL(
                //image path starts from HERE
                `../img/${item.image}`,
                import.meta.url
              ).href
            }
            alt=""
          />
          <div className="flex flex-col gap-2 pt-4">
            <p className="font-semibold">{item.name.toUpperCase()}</p>
            <p>{item.ingredients + ""}</p>
          </div>

          <p>{item.price * item.quantity}€</p>

          <div className="flex justify-center items-center">
            <button
              onClick={() => dispatch(removeOneItem(item))}
              className="bg-black text-white p-2 px-4 rounded-full"
            >
              -
            </button>
            <p>{item.quantity}</p>
            <button
              onClick={() => dispatch(add(item))}
              className="bg-black text-white p-2 px-4 rounded-full"
            >
              +
            </button>
          </div>

          <button
            className="bg-red-600 text-white p-2 rounded"
            onClick={() => dispatch(remove(key))}
          >
            DELETE
          </button>
        </div>
      ))}

      <div>
        <h1>TOTAL:{myTotal} €</h1>
      </div>
    </div>
  );
}
