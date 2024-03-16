import React from "react";

import SocialMedia from "./SocialMedia";
import Contact from "./Contact";
import MyIframe from "./MyIframe";

import PHONE from "../assets/img/PHONE.png";
import MAIL from "../assets/img/MAIL.png";
import Uber from "../assets/img/Uber.png";
import FB from "../assets/img/Facebook.png";
import Twitter from "../assets/img/Twitter.png";

const allSocialMedia = [FB, Twitter, Uber];
const allContacts = [
  { data: "+324811745362", icon: PHONE },
  { data: "cheese@gmail.com", icon: MAIL },
];

export default function Footer() {
  return (
    <div className="h-[300px]">
      <div className="flex justify-center items-center bg-[#006214ff] rounded-t-xl">
        <div className="flex gap-20 h-[100px] justify-center items-center">
          {allSocialMedia.map((item, key) => (
            <SocialMedia element={item} />
          ))}
        </div>
      </div>
      <div className="md:h-[250px] max-[426px]:h-[650px] bg-[#006214ff] flex flex-col md:flex-row">
        <MyIframe/>

        <div className="md:w-[40%] md:h-[100%] max-[426px]:h-[40%] flex flex-col justify-center xl:pl-6 lg:pl-4 gap-4 md:pl-6 max-[426px]:pl-10 text-white border-t-2">
          <h1 className="text-[18px] font-semibold tracking-widest">CONTACT</h1>

          <div className="w-[100%] flex lg:flex-row flex-col">
            <div className="lg:w-[50%] w-[100%]">
              <p className="pt-2 md:text-[14px] lg:text-[15px] xl:text-[16px] text-[14px] tracking-wider">
                MolenGeek
              </p>

              <p className="md:text-[14px] lg:text-[15px] xl:text-[16px] text-[14px] tracking-wider">
                Pl. de la Minoterie 10
              </p>

              <p className="md:text-[14px] lg:text-[15px] xl:text-[16px] text-[14px] tracking-wider">
                1080 Molenbeek-Saint-Jean
              </p>

              <p className="md:text-[14px] lg:text-[15px] xl:text-[16px] text-[14px] tracking-wider">
                Belgium
              </p>
            </div>

            <div className="lg:w-[50%] w-[100%]">
              <div className="flex-col lg:flex-row pt-4 gap-4">
                {allContacts.map((item, key) => (
                  <Contact element={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[50px] bg-[#006214ff] border-t-2 w-screen flex justify-center items-center tracking-wider">
        <p className="text-[15px] text-white">
          website made by &#127829; lovers
        </p>
      </div>
    </div>
  );
}
