import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// Check if email credentials are provided in .env
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log("Provide EMAIL_USER and EMAIL_PASS in the .env file");
}

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use Gmail as the email service
    auth: {
        user: process.env.EMAIL_USER, // Your Gmail email address
        pass: process.env.EMAIL_PASS, // Your Gmail app password
    },
    connectionTimeout: 10000, // 10 seconds
});

// Function to send an email
const sendEmail = async ({ sendTo, subject, html }) => {
    try {
        const mailOptions = {
            from: `Big-Bazar <${process.env.EMAIL_USER}>`, // Sender address
            to: sendTo, // Recipient address
            subject: subject, // Email subject
            html: html, // HTML content of the email
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.response);
        return info;
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Failed to send email");
    }
};

export default sendEmail;