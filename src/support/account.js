const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'admin@ahmadfakhry.io',
        subject: `Welcome to Task-Manager!, ${name}`,
        text: `Thank you for signing up for Task-Manager, we'd appreciate any feedback`,
    };
    sgMail.send(msg);
}
const sendDeletionEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'admin@ahmadfakhry.io',
        subject: `Task-Manager is sorry to see you go!, ${name}`,
        text: `We'd appreciate any feedback!`,
    };
    sgMail.send(msg);
}

module.exports = {
    sendWelcomeEmail,
    sendDeletionEmail
}