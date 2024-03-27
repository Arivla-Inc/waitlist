import React from 'react'
import client from '@/lib/prismadb'


async function getWaitlist(){
    const data = await client.user.findMany()
    return data;
}

export default async function Page({ params }) {
    if (params.slug === "mylist"){ 
    const users = await getWaitlist();
    console.log(users)
  return <div>Users {params.slug}</div>
}
}