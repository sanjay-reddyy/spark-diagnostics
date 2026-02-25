import dotenv from "dotenv";
dotenv.config();

import app from "./app";

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("Email User:", process.env.EMAIL_USER);
});
