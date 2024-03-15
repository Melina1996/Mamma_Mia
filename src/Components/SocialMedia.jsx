import React from "react";

export default function SocialMedia(props) {
  return (
    <div className="bg-[#FFF7EFff] hover:bg-[#F5C200ff] rounded-full h-[50px] w-[50px] flex justify-center items-center">
      <img className="h-[30px]" src={props.element} alt="" />
    </div>
  );
}
