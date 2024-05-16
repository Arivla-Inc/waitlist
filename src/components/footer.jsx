import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="container grid items-end gap-4 p-4 mx-auto sm:grid-cols-3">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/logo.jpg"
          alt="logo"
          width={100}
          height={100}
          quality={100}
        />

        <div className="font-light text-center">Arivla! Where Trends Meet.</div>
      </div>
      <p className="row-start-2 italic font-light text-center font-lato sm:row-start-auto">
        © <em>{new Date().getFullYear()}, Arivla. All right reserved</em>
      </p>
      <div className="flex flex-col items-center row-start-1 gap-4 font-light sm:row-start-auto sm:items-end">
        <div className="font-light">Follow us on:</div>
        <a
          href="https://www.instagram.com/arivla_lifestyle?igsh=a2czaDZqNzcyNGFx&utm_source=qr"
          target="_blank"
          className="flex items-center gap-2"
        >
          <Image
            src={"/instagram.svg"}
            alt="instagram"
            width={32}
            height={32}
          />{" "}
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Footer;
