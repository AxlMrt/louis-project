import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest, response: any) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Message de: ${name} (${email})`,
    text: message,
  };

  const sendMailPromise = async () =>
    transport.sendMail(mailOptions, function (err) {
      if (!err) {
        response.status(205).json({ success: "Votre Email a été envoyé !" });
      } else {
        response.status(404).json(err.message);
      }
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Votre Email a été envoyé !" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
