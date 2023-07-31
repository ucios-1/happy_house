import { NextApiRequest, NextApiResponse } from "next";
import NodeMailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { MailProps } from "../../domain/domain";

const transporter = NodeMailer.createTransport(
    {
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: true,
        auth: {
            user: "some_mail@gmail.com",
            pass: "some_password"
        }
    }
)


export default async function handler (req: NextApiRequest, res: NextApiResponse) {
 
    if (req.method !== 'POST') {
        return res.status(400).json({ statusText: "fail", statusMessage: 'Begone.' });
    }
  
    try {

        const mailProps = (req.body as MailProps)
     
        const mailOption: Mail.Options = {
            from: "some_sender@gmail.com",
            to: "some_receiver@gmail.com",
            subject: `HHH kontakt od ${mailProps.replyToEmail}`,
            html: `Привет!<br />
                Танцуй! Тебе письмо :) <br />
                <br />
                <b>Ответить:</b>  ${mailProps.replyToEmail} <br />
                <b>Дата с:</b> ${mailProps.startDate} <br />
                <b>Дата до:</b> ${mailProps.endDate} <br />
                <b>Написал:</b> ${mailProps.longInput} <br />
                <br />
                А на этом все, <br />
                HHHostel
`
        }

        await transporter.sendMail(mailOption).then((info) => {console.log(info)})
  
        res.status(200).send({ statusText: 'done', message: 'message has been sent' });
    } catch (error) {
        res.status(500).send({ statusText: 'fail', error: `${error}` });
    }
};
