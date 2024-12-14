import { NextResponse, NextRequest } from "next/server";
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
    const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

    if(req.method === 'post') {
        try {
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
                    pass: process.env.NEXT_PUBLIC_BURNER_PASSWORD,
                },
            })
        
    
            const mail = {
                from: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
                to: 'tesst'
            }
            
            console.log('hiii');

            const info = await transporter.sendMail(mail);
        
            res.status(200).json({message: 'sent', info});
            }
            catch {
                res.status(500).json({ error: 'Failed to send email.' });
            }
        }
    else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `Method ${req.method} not allowed.` });
    }
}