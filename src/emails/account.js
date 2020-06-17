const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'roi.mass@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the App, ${name}. Let me Know how you get along with the app`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'roi.mass@gmail.com',
        subject: 'Sorry to see you leave',
        text: `Goodbye, ${name}. Hope to see you back soon`
    })
}

//Test : 
// sgMail.send({
//     to: 'roi.mass@gmail.com',
//     from: 'roi.mass@gmail.com',
//     subject: 'This is my first Email creation',
//     text: 'I hope it works.'
// })

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}