
var NodeMailer = require("nodemailer");
console.log("working!!!");
const transporter = NodeMailer.createTransport(
    {
        service: "happyhostelpoznan.pl",
        auth: {
            user: "rezerwacje@happyhostelpoznan.pl",
            pass: "Rubin12345!"
        }
    }
)

console.log("still working")

const mailOption = {
    from: "a.leanid@gmail.com",
    to: "a.leanid@gmail.com",
    subject: "Test email from HHH",
    text: "test"
}

console.log("going on")

transporter.sendMail(mailOption, (err, info) => {
    if (err) {
        console.log(err)
    } else {
        console.log("success!!!!!!!!!!!!!!!!!!!!")
    }
})
