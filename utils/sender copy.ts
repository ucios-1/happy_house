import NodeMailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { MailProps } from "../domain/domain";

const transporter = NodeMailer.createTransport(
    {
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: true,
        auth: {
            user: "a.leanid@gmail.com",
            pass: "zgtctdxbnosryjvw"
        }
    }
)

export async function sendEmail(props: MailProps) {
    console.log("[ sendEmail ] sending contact request email")

    const mailOption: Mail.Options = {
        from: "a.leanid@gmail.com",
        to: "ucios@o2.pl",
        subject: `HHH kontakt od ${props.replyToEmail}`,
        text: "test"
    }

    await transporter.sendMail(mailOption).then((info) => {console.log(info)})
}

