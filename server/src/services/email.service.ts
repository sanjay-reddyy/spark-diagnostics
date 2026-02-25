import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },

  // ✅ FIX TLS ERROR
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendBookingEmail = async (data: any) => {
  await transporter.sendMail({
    from: `"Spark Diagnostics" <${process.env.EMAIL_USER}>`,
    to: process.env.DOCTOR_EMAIL,
    subject: "🩺 New Appointment Booking",
    html: `
      <h2>New Appointment Received</h2>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Phone:</b> ${data.phone}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Service:</b> ${data.service}</p>
      <p><b>Message:</b> ${data.message}</p>
    `,
  });
};
