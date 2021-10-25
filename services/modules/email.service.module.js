const nodemailer = require("nodemailer")
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iotine.alert@gmail.com',
        pass: '(@#iotine.alert)'
    }
});

module.exports = async (event, data, user, text) => {
    Object.keys(data).forEach(key => {
        text.out = text.out.replace(`{${key}}`, data[key])
    })
    var mailOptions = {
        from: 'Webhooks via Integrations <iotine.alert@gmail.com>',
        to: 'divyanshg809@gmail.com',
        replyTo: "Do not reply <no-reply@iotine.com>",
        date: Date.now(),
        subject: text.subject,
        html: `<h1 style="font-weight:bold;">${text.out}</h1>`
    };
    const resp = await transporter.sendMail(mailOptions)
}