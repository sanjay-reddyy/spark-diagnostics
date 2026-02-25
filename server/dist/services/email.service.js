"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendBookingEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const transporter = nodemailer_1.default.createTransport({
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
const sendBookingEmail = async (data) => {
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
exports.sendBookingEmail = sendBookingEmail;
