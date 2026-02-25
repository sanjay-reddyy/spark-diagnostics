import { db } from "../config/db";
import { Request, Response } from "express";
import { sendBookingEmail } from "../services/email.service";


export const createAppointment = async (req: Request, res: Response) => {
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
    const result = await db.query(
      "INSERT INTO appointments(name, phone, email, service, message) VALUES($1,$2,$3,$4,$5) RETURNING id",
      [name, phone, email, service, message || ""]
    );

    // Try to send email but don't fail the booking if email fails
    try {
      await sendBookingEmail({
        name,
        phone,
        email,
        service,
        message: message || "",
      });
    } catch (emailError) {
      console.warn("Email sending failed (but appointment was booked):", emailError);
      // Don't throw - the appointment is already booked
    }

    res.status(201).json({ 
      success: true, 
      message: "Appointment booked successfully.",
      appointmentId: result.rows[0].id
    });
  } catch (error) {
    console.error("Appointment Error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Server error while booking appointment.",
      error: (error as any).message
    });
  }
};
