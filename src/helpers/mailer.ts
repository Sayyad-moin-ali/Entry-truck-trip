import { verify } from "crypto";
import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs"
import User from '@/src/models/userModel'

export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
        const hashToken = await bcryptjs.hash(userId.toString(), 10)

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId,
                { verifyToken: hashToken, verifyTokenExpiry: Date.now() + 3600000 })
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId,
                { forgotPasswordToken: hashToken, forgotPasswordTokenExpiry: Date.now() + 3600000 })
        }



        // Looking to send emails in production? Check out our Email API/SMTP product!
        var transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "40d0d253db49a1",
                pass: "a7a2d07ea21998"
            }
        });


        const mailoption = {
            from: 'alisayyadmoin@gmail.com', // sender address
            to: email,
            subject: emailType === 'VERIFY' ? "verify your email" : "Reset your password",
            text: "Hello world?",
            html: `<p>click <a href="${process.env.DOMAIN}/verifyemail?token=${hashToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}  or copy paste the link to your browser<br>
            ${[process.env.DOMAIN]}/verifyemail?token=${hashToken}
            </p>`,
        }

        const mailResponse = await transporter.sendMail(mailoption)
        return mailResponse

    } catch (error: any) {
        throw new Error(error.message)
    }
}