import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { chose } from "../features/ingredientsSlice";
import { add } from "../features/basketSlice";

export default function Ingredients() {
  const dispatch = useDispatch();

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
    checkedTomatoe,
    checkedBasil,
    checkedCheese,
    checkedMushrooms,
    checkedOnions,
    checkedPaprika,
    checkedSalami,
    checkedTuna,
  ];

  const [myDIY, setDIY] = useState({
    name: "DIY",
    price: myprice,
    ingredients: myIngredients,
    image: "dough.png",
    quantity: 0,
  });

  const update = (newPrice) => {
    setDIY((prevState) => ({
      ...prevState,
      price: newPrice,
    }));
  };

  console.log(myDIY);

  const[name,setName]=useState("")

  console.log(name)

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

  return (
    <div className="flex justify-center items-center gap-2 w-screen">
      <div className="w-[50%] flex justify-center items-center">
        <img
          src={
            new URL(
              //image path starts from HERE
              `../assets/img/${myDIY.image}`,
              import.meta.url
            ).href
          }
          alt=""
        />
      </div>

      <div className="w-[50%] flex justify-start items-center">
        <div className="flex flex-col">
            <div>
                <input type="text" placeholder="Name your pizza!" className="border-2" onChange={(e)=>setName(e.target.value)}/>
            </div>
          <div className="flex gap-20">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="accent-[#006214ff] w-[20px]"
                  checked={checkedTomatoe}
                  onChange={(e) => {
                    setCheckedTomatoe(!checkedTomatoe),
                      e.target.checked
                        ? myIngredients.push({ name: "Tomatoes", price: 2 })
                        : splice("Tomatoes");
                  }}
                ></input>
                <label htmlFor="" className="tracking-widest">
                  Tomatoes
                </label>
              </div>

              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="accent-[#006214ff] w-[20px]"
                  checked={checkedOnions}
                  onChange={(e) => {
                    setCheckedOnions(!checkedOnions),
                      e.target.checked
                        ? myIngredients.push({ name: "Onions", price: 1 })
                        : splice("Onions");
                  }}
                ></input>
                <label htmlFor="" className="tracking-widest">
                  Onions
                </label>
              </div>

              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="accent-[#006214ff] w-[20px]"
                  checked={checkedCheese}
                  onChange={(e) => {
                    setCheckedCheese(!checkedCheese),
                      e.target.checked
                        ? myIngredients.push({ name: "Cheese", price: 3 })
                        : splice("Cheese");
                  }}
                ></input>
                <label htmlFor="" className="tracking-widest">
                  Cheese
                </label>
              </div>

              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="accent-[#006214ff] w-[20px]"
                  checked={checkedPaprika}
                  onChange={(e) => {
                    setCheckedPaprika(!checkedPaprika),
                      e.target.checked
                        ? myIngredients.push({ name: "Paprika", price: 2 })
                        : splice("Paprika");
                  }}
                ></input>
                <label htmlFor="" className="tracking-widest">
                  Paprika
                </label>
              </div>
            </div>

            <div className="w-[50%] flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="accent-[#006214ff] w-[20px]"
                  checked={checkedSalami}
                  onChange={(e) => {
                    setCheckedSalami(!checkedSalami),
                      e.target.checked
                        ? myIngredients.push({ name: "Salami", price: 4 })
                        : splice("Salami");
                  }}
                ></input>
                <label htmlFor="" className="tracking-widest">
                  Salami
                </label>
              </div>

              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="accent-[#006214ff] w-[20px]"
                  checked={checkedTuna}
                  onChange={(e) => {
                    setCheckedTuna(!checkedTuna),
                      e.target.checked
                        ? myIngredients.push({ name: "Tuna", price: 4 })
                        : splice("Tuna");
                  }}
                ></input>
                <label htmlFor="" className="tracking-widest">
                  Tuna
                </label>
              </div>

              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="accent-[#006214ff] w-[20px]"
                  checked={checkedMushrooms}
                  onChange={(e) => {
                    setCheckedMushrooms(!checkedMushrooms),
                      e.target.checked
                        ? myIngredients.push({ name: "Mushrooms", price: 2 })
                        : splice("Mushrooms");
                  }}
                ></input>
                <label htmlFor="" className="tracking-widest">
                  Mushrooms
                </label>
              </div>

              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="accent-[#006214ff] w-[20px]"
                  checked={checkedBasil}
                  onChange={(e) => {
                    setCheckedBasil(!checkedBasil),
                      e.target.checked
                        ? myIngredients.push({ name: "Basil", price: 1 })
                        : splice("Basil");
                  }}
                ></input>
                <label htmlFor="" className="tracking-widest">
                  Basil
                </label>
              </div>
            </div>
          </div>
          <div className="w-[100%] flex justify-start items-center pt-4">
            <button
              onClick={() => dispatch(add(myDIY))}
              className="bg-[#006214ff] rounded-full p-2 w-[80px] shadow text-white tracking-widest"
            >
              DONE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
