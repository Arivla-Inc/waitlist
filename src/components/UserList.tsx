"use client";
import React, { FC, useEffect } from "react";
import CsvDownload from "./CsvDownload";
import ListUsers from "./ListUsers";
import { Logout } from "@/lib/utils";
import { useRouter } from "next/navigation";
import useIsLoggedIn from "./useIsLoggedIn";

interface Props {
  users: any;
}

const UserList: FC<Props> = ({ users }) => {
  const router = useRouter();
  const isLoggedIn = useIsLoggedIn();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/waitlist");
    }
  }, [isLoggedIn, router]);

  return (
    <div className=" bg-[#F2F3F8]  min-h-screen">
      <div className="container flex flex-col gap-10 mx-auto py-14 bg-[#F2F3F8]">
        <h5 className="text-4xl font-medium text-center font-playfair-display">
          {"Arivla's Waitlist"}
        </h5>

        <div className="flex items-center justify-end">
          <div className="flex items-center gap-6 ">
            <CsvDownload dataArray={users} />
            <button onClick={Logout} className="text-red-600 ">
              {" "}
              Logout
            </button>
          </div>
        </div>
        <ListUsers data={users} />
      </div>
    </div>
  );
};

export default UserList;
