const nodemailer = require("nodemailer")
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iotine.alert@gmail.com',
        pass: '(@#iotine.alert)'
    }
});

module.exports = async (data, user) => {
    var mailOptions = {
        from: 'Iotine Alerts',
        to: 'divyanshg809@gmail.com',
        replyTo: "",
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };
    const resp = await transporter.sendMail(mailOptions)
}