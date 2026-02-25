import express from "express";
import cors from "cors";

import appointmentRoutes from "./routes/appointment.routes";
import contactRoutes from "./routes/contact.routes";
import adminRoutes from "./routes/admin.routes";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

// Debug logging to see requests in Render logs
app.use((req, res, next) => {
  console.log(`[Request] ${req.method} ${req.path}`);
  next();
});

// Health check endpoint to keep the server awake
app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

app.use("/api/appointments", appointmentRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);

export default app;
