import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = localStorage.getItem("admin-auth") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  return children;
}