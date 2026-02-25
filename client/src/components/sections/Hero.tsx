import { motion } from "framer-motion";
import heroImg from "../../assets/images/ai/hero-lab.jpg";
import { useState } from "react";
import BookingModal from "../ui/BookingModal";
import { Link } from "react-router-dom";


export default function Hero() {
  const [openBooking, setOpenBooking] = useState(false);

  return (
    <section className="relative bg-background overflow-hidden">
      {/* Background Image with responsive object-fit */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroImg}
          className="w-full h-full object-cover md:object-cover rounded-3xl shadow-soft"
          alt=""
        />
      </div>

      <div className="absolute inset-0 bg-white/80"></div>

      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center min-h-screen md:min-h-auto md:py-24">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
            Accurate Diagnosis.
            <span className="text-primary block">
              Trusted Healthcare Decisions.
            </span>
          </h1>

          <p className="mt-4 md:mt-6 text-lightText text-sm md:text-lg">
            SPARK DIAGNOSTICS provides reliable, high-quality laboratory
            testing using advanced technology and expert analysis to support
            better patient care.
          </p>

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/services" className="w-full sm:w-auto">
              <button className="w-full bg-gradient-to-r from-primary to-emerald-600 text-white px-6 md:px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50 transition text-sm md:text-base font-semibold shadow-soft">
                Explore Services
              </button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE CARDS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-3 md:gap-6"
        >
          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-soft">
            <h3 className="font-semibold text-base md:text-lg">Advanced Lab</h3>
            <p className="text-xs md:text-sm text-lightText mt-2">
              State-of-the-art diagnostic equipment.
            </p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-soft">
            <h3 className="font-semibold text-base md:text-lg">Accurate Reports</h3>
            <p className="text-xs md:text-sm text-lightText mt-2">
              Precision testing with strict quality control.
            </p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-soft">
            <h3 className="font-semibold text-base md:text-lg">Expert Team</h3>
            <p className="text-xs md:text-sm text-lightText mt-2">
              Experienced diagnostic professionals.
            </p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-soft">
            <h3 className="font-semibold text-base md:text-lg">Fast Results</h3>
            <p className="text-xs md:text-sm text-lightText mt-2">
              Timely reporting for better treatment decisions.
            </p>
          </div>
        </motion.div>
        
      </div>
      <BookingModal
        open={openBooking}
        onClose={() => setOpenBooking(false)}
        service="General Test Booking"
        details="Use this form for general inquiries or to book a test not listed in our packages. Please specify your needs in the message field."
      />
    </section>
  );
}
