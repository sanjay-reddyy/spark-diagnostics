"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppointments = exports.getContacts = void 0;
const db_1 = require("../config/db");
// Function to get all contact form submissions
const getContacts = async (req, res) => {
    try {
        const { rows } = await db_1.db.query("SELECT * FROM contacts ORDER BY id DESC");
        res.status(200).json(rows);
    }
    catch (error) {
        console.error("Admin Get Contacts Error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};
exports.getContacts = getContacts;
// Function to get all appointments
const getAppointments = async (req, res) => {
    try {
        const { rows } = await db_1.db.query("SELECT * FROM appointments ORDER BY id DESC");
        res.status(200).json(rows);
    }
    catch (error) {
        console.error("Admin Get Appointments Error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};
exports.getAppointments = getAppointments;
