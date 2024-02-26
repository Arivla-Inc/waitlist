import client from "@/lib/prismadb"

export async function POST(request) {
  const data = await request.json()
  let user = await client.user.findUnique({
    where: {email: data.email}
  })
  if (user) {
    return Response.json({message: "Email already waitlisted"})
  }
  user = await client.user.create({
    data:{
      email: data.email
    }
  })
  console.log(Response.json())
  return Response.json({ message: "Email submitted succesfully", request: request})
}
