import React from "react";

export default function Checkbox(props) {
  return (
    <div className="flex gap-2" key={props.id}>
      <input
        type="checkbox"
        className="accent-[#006214ff] w-[20px]"
        checked={props.allChecked[props.id]}
        onChange={(e) => {
          props.allSetChecked[props.id](!props.allChecked[props.id]),
            e.target.checked
              ? props.myIngredients.push({
                  name: props.element.name,
                  price: props.element.price,
                })
              : splice(props.element.name);
        }}
      ></input>
      <label
        htmlFor=""
        className="tracking-widest md:text-[15px] lg:text-[17px]"
      >
        {props.element.name}
      </label>
    </div>
  );
}
