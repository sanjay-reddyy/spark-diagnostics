import { Request, Response } from "express";
import { db } from "../config/db";

// Function to get all contact form submissions
export const getContacts = async (req: Request, res: Response) => {
  try {
    const { rows } = await db.query(
      "SELECT * FROM contacts ORDER BY id DESC"
    );
    res.status(200).json(rows);
  } catch (error) {
    console.error("Admin Get Contacts Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Function to get all appointments
export const getAppointments = async (req: Request, res: Response) => {
  try {
    const { rows } = await db.query(
      "SELECT * FROM appointments ORDER BY id DESC"
    );
    res.status(200).json(rows);
  } catch (error) {
    console.error("Admin Get Appointments Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};