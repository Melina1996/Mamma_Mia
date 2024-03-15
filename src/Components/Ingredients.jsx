import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { chose } from "../features/ingredientsSlice";
import { add } from "../features/basketSlice";
import { useSelector } from "react-redux";

import Checkbox from "./Checkbox";

export default function Ingredients() {
  const dispatch = useDispatch();

  const myBasket = useSelector((state) => state.basket.value);

  const [myIngredients, setIngredients] = useState([]);

  const [myprice, setMyPrice] = useState(0);

  const [checkedTomatoe, setCheckedTomatoe] = useState(false);
  const [checkedOnions, setCheckedOnions] = useState(false);
  const [checkedCheese, setCheckedCheese] = useState(false);
  const [checkedPaprika, setCheckedPaprika] = useState(false);
  const [checkedSalami, setCheckedSalami] = useState(false);
  const [checkedTuna, setCheckedTuna] = useState(false);
  const [checkedMushrooms, setCheckedMushrooms] = useState(false);
  const [checkedBasil, setCheckedBasil] = useState(false);

  const allIngredients = [
    { name: "Tomatoes", price: 2 },
    { name: "Basil", price: 1 },
    { name: "Cheese", price: 2 },
    { name: "Mushrooms", price: 2 },
    { name: "Onions", price: 1 },
    { name: "Paprika", price: 3 },
    { name: "Salami", price: 4 },
    { name: "Tuna", price: 4 },
  ];

  const allChecked = [
    checkedTomatoe,
    checkedBasil,
    checkedCheese,
    checkedMushrooms,
    checkedOnions,
    checkedPaprika,
    checkedSalami,
    checkedTuna,
  ];

  const allSetChecked = [
    setCheckedTomatoe,
    setCheckedBasil,
    setCheckedCheese,
    setCheckedMushrooms,
    setCheckedOnions,
    setCheckedPaprika,
    setCheckedSalami,
    setCheckedTuna,
  ];

  const [myDIY, setDIY] = useState({
    name: "DIY",
    price: myprice,
    ingredients: myIngredients,
    image: "dough.png",
    quantity: 0,
    type: "DIY",
  });

  const update = (newPrice) => {
    setDIY((prevState) => ({
      ...prevState,
      price: newPrice,
    }));
  };

  const [name, setName] = useState("");

  function renamePizza() {
    setDIY((prevState) => ({
      ...prevState,
      name: name,
    }));
  }

  function splice(ingredient) {
    const index = myIngredients.findIndex((obj) => obj.name === ingredient);

    //I apply index to change quantity of my product
    myIngredients.splice(index, 1);
  }

  useEffect(() => {
    const total = myIngredients.reduce(
      (total, currentValue) => (total = total + currentValue.price),
      0
    );

    update(total + 3);
  }, [
    checkedTomatoe,
    checkedBasil,
    checkedCheese,
    checkedMushrooms,
    checkedOnions,
    checkedPaprika,
    checkedSalami,
    checkedTuna,
  ]);

  const [exist, setExist] = useState(false);

  useEffect(() => {
    if (myBasket.some((item) => item.name === name)) {
      setExist(true);
    } else {
      setExist(false);
    }
  }, [name]);

  return (
    <div className="flex md:flex-row flex-col justify-center items-center gap-2 w-screen xl:p-20 lg:p-16">
      <div className="lg:w-[50%] md:w-[40%] flex lg:justify-start xl:justify-center md:justify-center items-center max-[426px]:justify-center">
        <img
          src={
            new URL(
              //image path starts from HERE
              `../assets/img/${myDIY.image}`,
              import.meta.url
            ).href
          }
          alt=""
          className="md:w-[65%] max-[426px]:w-[65%]"
        />
      </div>

      <div className="lg:w-[50%] md:w-[60%] flex md:justify-start items-center">
        <div className="flex flex-col gap-6 max-[426px]:justify-center max-[426px]:items-center">
          <div className="flex flex-col max-[426px]:justify-center max-[426px]:items-center max-[426px]:w-[80%]">
            <h1 className="lg:text-[25px] md:text-[20px] font-semibold tracking-wider max-[426px]:text-[20px]">
              CREATE YOUR OWN PIZZA!
            </h1>
            <p className="lg:text-[16px] md:text-[14px] text-[#006214ff] tracking-wider max-[426px]:justify-center max-[426px]:text-center max-[426px]:text-[14px]">
              Each pizza base consists in sourdough dough and tomatoe sauce.
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Name your pizza!"
              className="border-2 p-2 rounded-full border-[#006214ff] placeholder:tracking-widest outline-none placeholder:md:text-[15px]"
              onChange={(e) => setName(e.target.value)}
            />
            <button
              className="p-2 rounded-full bg-[#006214ff] text-white tracking-widest shadow-lg"
              onClick={() => renamePizza(name)}
            >
              GO
            </button>
          </div>

          {name.length < 3 || name.length > 10 ? (
            <p className="text-red-600 italic text-[15px]">
              Choose a name between 3 and 10 characters!
            </p>
          ) : (
            ""
          )}

          {exist ? (
            <p className="text-red-600 italic text-[15px]">
              This name already exists!
            </p>
          ) : (
            ""
          )}
          <div className="flex md:gap-36 max-[426px]:gap-20">
            <div className="flex flex-col gap-4 justify-center items-start">
              {allIngredients.map((item, key) => (
                key <= 3 ? 
                    (
                    <Checkbox
                    element={item}
                    id={key}
                    allChecked={allChecked}
                    allSetChecked={allSetChecked}
                    myIngredients={myIngredients}
                  />)
                  :
                  ""
              ))}
            </div>
            <div className="flex flex-col gap-4 justify-center items-start">
              {allIngredients.map((item, key) => (
                key > 3 ? 
                    (
                    <Checkbox
                    element={item}
                    id={key}
                    allChecked={allChecked}
                    allSetChecked={allSetChecked}
                    myIngredients={myIngredients}
                  />)
                  :
                  ""
              ))}
            </div>
          </div>
          <div className="w-[100%] flex justify-start items-center lg:pt-4 md:pb-10">
            {name.length >= 3 && name.length <= 10 && !exist ? (
              <button
                onClick={() => dispatch(add(myDIY))}
                className="bg-[#006214ff] rounded-full p-2 w-[80px] shadow-lg text-white tracking-widest"
              >
                ORDER
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
