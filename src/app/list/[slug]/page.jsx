import React from "react";
import client from "@/lib/prismadb";
import ListUsers from "@/components/ListUsers";
import CsvDownload from "@/components/CsvDownload";

// async function getWaitlist(){
//     const data = await client.user.findMany()
//     return data;
// }

export default async function Page({ params }) {
  //     if (params.slug === "mylist"){
  //     const users = await getWaitlist();
  //     console.log(users)
  //   return <div>Users {params.slug}</div>
  // }

  return (
    <div className=" bg-[#F2F3F8]  min-h-screen">
      <div className="container flex flex-col gap-10 mx-auto py-14 bg-[#F2F3F8]">
        <h5 className="text-4xl font-medium text-center font-playfair-display">
          {"Arivla's Waitlist"}
        </h5>

        <div className="flex items-center justify-end ">
          <CsvDownload />
        </div>
        <ListUsers />
      </div>
    </div>
  );
}
