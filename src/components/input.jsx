"use client";

import React, { useState } from "react";
import Image from "next/image";
import Loader from "./loader";
import SuccessModal from "./modal/modals/success";

const Input = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isBuyer, setIsBuyer] = useState(false);
  const [isMerchant, setIsMerchant] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const reset = () => {
    setIsBuyer(false);
    setIsMerchant(false);
    setFirstName("");
    setEmail("");
    setError("");
  };

  const setBuyer = () => {
    setIsBuyer(!isBuyer)
    setError(!error)
  }
  const setMerchant = () => {
    setIsMerchant(!isMerchant)
    setError(!error)
  }

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.length === 0 || !regex.test(email)) {
      setError(true);
    }
    if (firstName.length === 0) {
      setError(true);
    }
    if (isBuyer === false && isMerchant === false) {
      setError(true);
    }
    if (email.length > 0 && regex.test(email) && firstName.length > 0 && isBuyer !==false || isMerchant !== false) {
      setIsLoading(true);
      const res = await fetch("/api/enlist", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName,
          isBuyer: isBuyer,
          isMerchant: isMerchant,
        }),
      });
      setIsLoading(false);
      if (res.status === 200) {
        setOpenSuccess(true);
      }
      if (res.status === 400) {
        setErrorMsg("Email already waitlisted");
        setTimeout(() => {
          setErrorMsg(false);
        }, 3000);
      }
      if (res.status === 500) {
        setErrorMsg("Server error, Please try again later");
        setTimeout(() => {
          setErrorMsg(false);
        }, 3000);
      }
      reset();
    }
  };

  return (
    <>
      <p className="text-center text-black ">You are Joining Arivla as a:</p>
      <p className="mb-2 text-sm font-light text-center text-[#344054]">
        (You can select either the Buyer, the Merchant, or both options)
      </p>
      <div className="flex w-full space-x-2">
        <button
          onClick={() => setBuyer()}
          className={`${
            isBuyer ? "text-gray-900 border-gray-900" : "text-[#A3A3A3]"
          } border w-1/2 px-6 inline-flex items-center py-2.5 whitespace-nowrap`}
        >
          <Image
            src="/buyer.svg"
            alt=""
            width={32}
            height={32}
            className="mr-2"
          />
          Buyer
        </button>
        <button
          onClick={() => setMerchant()}
          className={`${
            isMerchant ? "text-gray-900 border-gray-900" : "text-[#A3A3A3]"
          } border w-1/2 px-6 inline-flex items-center py-2.5 whitespace-nowrap`}
        >
          <Image
            src="/merchant.svg"
            alt=""
            width={32}
            height={32}
            className="mr-2"
          />
          Merchant
        </button>
      </div>
      {error && isBuyer === false && isMerchant === false &&
       (
        <p className="text-sm text-red-500">Please select at least one option</p>)
      }
      <div className="mt-2">
        <form onSubmit={handleSubmit} className="py-2" noValidate>
          <input
            className="w-full p-4 my-2 text-sm text-gray-800 border outline-none"
            name="firstName"
            type="text"
            placeholder="Enter Your First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <div className="text-left">
            {error && firstName.length <= 0 ? (
              <p className="text-sm text-red-500">First name is required</p>
            ) : (
              ""
            )}
          </div>
          <input
            className="w-full p-4 my-2 text-sm text-gray-800 border outline-none"
            name="email"
            type="email"
            placeholder="Enter your email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="my-1 text-sm text-left">
            {error && email.length <= 0 ? (
              <p className="text-red-500">Email Address is required</p>
            ) : error && !regex.test(email) ? (
              <p className="text-red-500">Please enter a valid email address</p>
            ) : (
              ""
            )}
            {errorMsg && <p className="text-sm text-red-500">{errorMsg}</p>}
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="md:px-12 w-full px-4 whitespace-nowrap py-4 bg-gray-900 text-[#FAFBFF]"
          >
            {isLoading ? <Loader /> : "Join Waitlist"}
          </button>
        </form>
      </div>
      <SuccessModal openModal={openSuccess} setOpenModal={setOpenSuccess} />
    </>
  );
};

export default Input;
