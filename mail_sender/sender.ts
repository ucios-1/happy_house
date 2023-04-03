import NodeMailer from "nodemailer";

console.log("working!!!")

const transporter = NodeMailer.createTransport(
    {
        service: "gmail",
        auth: {
            user: "a.leanid@gmail.com",
            pass: "Yabadabadu_071288"
        }
    }
)

const mailOption = {
    from: "a.leanid@gmail.com",
    to: "a.leanid@gmail.com",
    subject: "Test email from HHH",
    text: "test"
}

transporter.sendMail(mailOption, (err, info) => {
    if (err) {
        console.log(err)
    } else {
        console.log("success!!!!!!!!!!!!!!!!!!!!")
    }
})