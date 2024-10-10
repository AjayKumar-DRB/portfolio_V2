// src/pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, subject, body } = req.body;

        // Configure Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ajaydrbkumar@gmail.com',
                pass: 'aqpd fhpc izkh rvvq'
            }
        });

        const mailOptions = {
            from: 'ajaydrbkumar@gmail.com',
            to: 'ajaykumardrb@gmail.com',
            subject: subject,
            text: `From: ${name} <${email}>\n\n${body}`
        };

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to send email', details: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
