import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center mt-8">
      <Image src="/logo.svg" alt="logo" width={80} height={80} />
    </div>
  );
};

export default Header;
