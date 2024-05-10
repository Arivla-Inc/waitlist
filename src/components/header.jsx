import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center">
      <Image
        src="/logo.jpg"
        alt="logo"
        width={120}
        height={120}
        quality={100}
      />
    </div>
  );
};

export default Header;
