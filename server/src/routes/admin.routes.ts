import { Router } from "express";
import { getContacts, getAppointments } from "../controllers/admin.controller";

const router = Router();

router.get("/contacts", getContacts);
router.get("/appointments", getAppointments);

export default router;