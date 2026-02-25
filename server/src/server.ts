import dotenv from "dotenv";
dotenv.config();
import https from "https";

import app from "./app";

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("Email User:", process.env.EMAIL_USER);

  // Keep-alive logic for Render
  // Render automatically sets RENDER_EXTERNAL_URL in production
  const backendUrl = process.env.RENDER_EXTERNAL_URL;
  if (backendUrl) {
    console.log(`Setting up keep-alive for ${backendUrl}`);
    setInterval(() => {
      https.get(`${backendUrl}/ping`, (res) => {
        // Consume response to complete request
        res.on("data", () => {});
      }).on("error", (err) => console.error("Keep-alive ping failed:", err.message));
    }, 14 * 60 * 1000); // Ping every 14 minutes
  }
});
