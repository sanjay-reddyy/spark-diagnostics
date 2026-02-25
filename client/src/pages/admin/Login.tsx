import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // IMPORTANT: In a real-world app, this password should be an environment variable.
    if (password === "spark@doctor123") {
      localStorage.setItem("admin-auth", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Incorrect password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm p-8 bg-white rounded-2xl shadow-soft">
        <h1 className="text-2xl font-bold text-center font-heading">
          Admin Login
        </h1>
        <div className="mt-6">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            placeholder="Enter Password"
            className="w-full px-4 py-3 border rounded-xl outline-none"
          />
          {error && <p className="mt-2 text-xs text-center text-red-500">{error}</p>}
          <button onClick={handleLogin} className="w-full mt-4 bg-primary text-white py-3 rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}