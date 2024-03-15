import React from "react";

export default function MyIframe() {
  return (
    <div className="md:w-[60%] md:h-[100%] max-[426px]:h-[60%] relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10074.774946115509!2d4.34122!3d50.8553554!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c38c275028d3%3A0xc7799151146ebf77!2sMolenGeek!5e0!3m2!1ses-419!2sbe!4v1710436386246!5m2!1ses-419!2sbe"
        className="h-full w-full"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
