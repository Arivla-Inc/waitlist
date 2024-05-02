import { NextResponse } from "next/server";
import client from "@/lib/prismadb";

import { compileWelcomeTemplate, sendMail } from "@/lib/mail";

export async function POST(request) {
  const data = await request.json();
  let user = await client.user.findUnique({
    where: { email: data.email },
  });
  if (user) {
    console.log(user);
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "Email already waitlisted",
      }),
      {
        status: 400,
        headers: { "content-type": "application/json" },
      }
    );
  }
  await client.user.create({
    data: {
      email: data.email,
      firstName: data.firstName,
      isBuyer: data.isBuyer,
      isMerchant: data.isMerchant,
    },
  });
  await sendMail({
    from: '"Arivla Waitlist" <waitlist@arivla.com>',
    to: data.email,
    subject: "Thank you for joining Arivla waitlist",
    body: compileWelcomeTemplate(data.firstName),
  });
  return Response.json({
    code: 200,
    message: "Email submitted succesfully",
    request: request,
  });
}
