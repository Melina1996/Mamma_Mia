import React from "react";

import PHONE from "../assets/img/PHONE.png";
import MAIL from "../assets/img/MAIL.png";
import INSTAGRAM from "../assets/img/Instagram.png";
import FB from "../assets/img/Facebook.png";
import Twitter from "../assets/img/Twitter.png";

export default function Footer() {
  return (
    <div className="h-[50dvh]">
      <div className="md:h-[350px] max-[426px]:h-[650px] bg-[#006214ff] flex flex-col md:flex-row">
        <div className="md:w-[60%] md:h-[100%] max-[426px]:h-[60%] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10074.774946115509!2d4.34122!3d50.8553554!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c38c275028d3%3A0xc7799151146ebf77!2sMolenGeek!5e0!3m2!1ses-419!2sbe!4v1710436386246!5m2!1ses-419!2sbe"
            className="h-full w-full"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="md:w-[40%] md:h-[100%] max-[426px]:h-[40%] flex flex-col justify-center xl:pl-10 lg:pl-8 gap-1 md:pl-6 max-[426px]:pl-10 text-white">
          <h1 className="text-[20px] font-semibold tracking-widest">CONTACT</h1>
          
          <p className="pt-2 md:text-[14px] lg:text-[16px] xl:text-[18px] text-[16px] tracking-wider">
            MolenGeek
          </p>

          <p className="md:text-[14px] lg:text-[16px] xl:text-[18px] text-[16px] tracking-wider">
          Pl. de la Minoterie 10
          </p>

          <p className="md:text-[14px] lg:text-[16px] xl:text-[18px] text-[16px] tracking-wider">
          1080 Molenbeek-Saint-Jean
          </p>

          <p className="md:text-[14px] lg:text-[16px] xl:text-[18px] text-[16px] tracking-wider">
            Belgium
          </p>

          <div className="flex-col lg:flex-row pt-4 gap-4">
            <div className="flex gap-2">
              <img className="w-[25px] h-[25px]" src={PHONE} alt="" />

              <p className="md:text-[14px] lg:text-[16px] xl:text-[18px] text-[16px] tracking-widest">
                +324811745362
              </p>
            </div>

            <div className="flex gap-2">
              <img className="w-[25px] h-[25px]" src={MAIL} alt="" />

              <p className="md:text-[14px] lg:text-[16px] xl:text-[18px] text-[16px] tracking-widest">
                doublecheese@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[150px] bg-[#FFF7EFff] flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <div className="flex gap-20 h-[100px] justify-center items-center">
            <div className="bg-[#006214ff] hover:bg-black rounded-full h-[50px] w-[50px] flex justify-center items-center">
              <img className="h-[30px]" src={FB} alt="" />
            </div>
            <div className="bg-[#006214ff]  hover:bg-black rounded-full h-[50px] w-[50px] flex justify-center items-center">
              <img className="h-[30px]" src={Twitter} alt="" />
            </div>
            <div className="bg-[#006214ff]  hover:bg-black rounded-full h-[50px] w-[50px] flex justify-center items-center">
              <img className="h-[30px]" src={INSTAGRAM} alt="" />
            </div>
          </div>
        </div>
        <div className="h-[50px] border-t-2 w-screen flex justify-center items-center tracking-wider">
            <p>website made by &#127829; lovers</p>
          </div>
      </div>
    </div>
  );
}
