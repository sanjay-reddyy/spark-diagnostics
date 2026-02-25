import { Request, Response } from "express";
import { db } from "../config/db";

export const submitContact = async (req: Request, res: Response) => {
  const { name, email, phone, message } = req.body;

  try {
    // Ensure you have a 'contacts' table in your database
    await db.query(
      "INSERT INTO contacts(name, email, phone, message) VALUES($1, $2, $3, $4)",
      [name, email, phone, message]
    );
    res.status(200).json({ success: true, message: "Contact form submitted" });
  } catch (error) {
    console.error("Contact Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};