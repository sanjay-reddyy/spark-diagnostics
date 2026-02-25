"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAppointment = void 0;
const db_1 = require("../config/db");
const email_service_1 = require("../services/email.service");
const createAppointment = async (req, res) => {
    const { name, phone, email, service, message } = req.body;
    // Validate required fields
    if (!name || !phone || !email || !service) {
        return res.status(400).json({
            success: false,
            message: "Missing required fields: name, phone, email, service"
        });
    }
    try {
        // First, insert the appointment into the database
        const result = await db_1.db.query("INSERT INTO appointments(name, phone, email, service, message) VALUES($1,$2,$3,$4,$5) RETURNING id", [name, phone, email, service, message || ""]);
        // Try to send email but don't fail the booking if email fails
        try {
            await (0, email_service_1.sendBookingEmail)({
                name,
                phone,
                email,
                service,
                message: message || "",
            });
        }
        catch (emailError) {
            console.warn("Email sending failed (but appointment was booked):", emailError);
            // Don't throw - the appointment is already booked
        }
        res.status(201).json({
            success: true,
            message: "Appointment booked successfully.",
            appointmentId: result.rows[0].id
        });
    }
    catch (error) {
        console.error("Appointment Error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while booking appointment.",
            error: error.message
        });
    }
};
exports.createAppointment = createAppointment;
