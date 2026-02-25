import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";
import MainLayout from "./components/layout/MainLayout";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import { AnimatePresence, motion } from "framer-motion";
import AdminLogin from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import ProtectedRoute from "./components/admin/ProtectedRoute";



function AnimatedRoutes() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/admin/login" element={<AdminLogin />} />

<Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AnimatedRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}
