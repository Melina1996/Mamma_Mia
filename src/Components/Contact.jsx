import React from "react";

export default function Contact(props) {
  return (
    <div className="flex gap-2">
      <img className="w-[25px] h-[25px]" src={props.element.icon} alt="" />

      <p className="md:text-[14px] lg:text-[14px] xl:text-[16px] text-[14px] tracking-widest">
        {props.element.data}
      </p>
    </div>
  );
}
