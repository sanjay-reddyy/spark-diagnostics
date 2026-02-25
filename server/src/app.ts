import express from "express";
import cors from "cors";

import appointmentRoutes from "./routes/appointment.routes";
import contactRoutes from "./routes/contact.routes";
import adminRoutes from "./routes/admin.routes";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173", // local dev
      "https://spark-diagnostics-backend.onrender.com", // production frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/appointments", appointmentRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);

export default app;
