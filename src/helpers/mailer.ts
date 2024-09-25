import { verify } from "crypto";
import nodemailer from "nodemailer";

export const sendEmail = async ({ email, emailType, userId }:any) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: "maddison53@ethereal.email",
                pass: "jn7jnAPss4f63QBp6D",
            },
        });


        const mailoption = {
            from: 'alisayyadmoin@gmail.com', // sender address
            to: email,
            subject: emailType === 'VERIFY' ? "verify your email" : "Reset your password",
            text: "Hello world?",
            html: "<b>Hello world?</b>",
        }

        const mailResponse = await transporter.sendMail(mailoption)
        return mailResponse

    } catch (error: any) {
        throw new Error(error.message)
    }
}