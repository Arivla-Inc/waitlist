import nodemailer from "nodemailer";
import * as handlebars from "handlebars";
import { newTemplate } from "./templates/new";

export async function sendMail({
  from,
  to,
  subject,
  body,
}) {
  const { EMAIL, EMAIL_PASSWORD } = process.env;
  

  const transport = nodemailer.createTransport({
    host: 'smtppro.zoho.com',
    secure: true,
    port: '465',
    auth: {
      user: EMAIL,
      pass: EMAIL_PASSWORD,
    },
    logger: true,
  });
  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from,
      to,
      subject,
      html: body,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}

export function compileWelcomeTemplate(name) {
  const template = handlebars.compile(newTemplate);
  const htmlBody = template({
    name: name,
  });
  return htmlBody;
}