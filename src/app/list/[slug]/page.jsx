import React from "react";
import client from "@/lib/prismadb";
import NotFound from "@/app/not-found";
import UserList from "@/components/UserList";

async function getWaitlist() {
  const data = await client.user.findMany();
  return data;
}

export default async function Page({ params }) {
  if (params.slug === process.env.SLUG_CODE) {
    const users = await getWaitlist();
    // console.log(users);
    return <UserList users={users} />;
  }
  return <NotFound />;
}
