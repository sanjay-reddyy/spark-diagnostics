import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import BookingModal from "../ui/BookingModal";
import logo from "../../assets/images/doctor/doctor-main.png";
import { FaHeartbeat } from "react-icons/fa";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openBooking, setOpenBooking] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Blogs", path: "/blogs" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Logo - Clickable to go home */}
        <Link to="/" onClick={() => { scrollToTop(); setMobileMenuOpen(false); }} className="flex items-center gap-2 hover:opacity-80 transition">
          <div className="relative">
            <img src={logo} alt="Spark Diagnostics Logo" className="w-10 h-10 md:w-12 md:h-12" />
            <FaHeartbeat className="absolute -top-2 -right-2 text-emerald-600 text-lg animate-pulse" />
          </div>
          <h1 className="font-heading text-lg md:text-xl text-emerald-600 font-semibold hidden sm:block">
            SPARK DIAGNOSTICS
          </h1>
        </Link>
        
        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={scrollToTop} className="hover:text-emerald-600 transition">
              {link.label}
            </Link>
          ))}

          <button
        onClick={() => setOpenBooking(true)}
        className="bg-gradient-to-r from-primary to-emerald-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-primary/40 hover:scale-105 transition duration-300"
      >
        Book Test
      </button>
    </div>

    {/* Mobile Button */}
    <button
      className="md:hidden p-2"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    >
      {mobileMenuOpen ? (
        <X size={24} className="text-primary" />
      ) : (
        <Menu size={24} className="text-primary" />
      )}
    </button>

    </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2 text-gray-700 hover:text-primary transition"
                onClick={() => { scrollToTop(); setMobileMenuOpen(false); }}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setOpenBooking(true);
                setMobileMenuOpen(false);
              }}
        className="bg-gradient-to-r from-primary to-emerald-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-primary/40 hover:scale-105 transition duration-300"
            >
              Book Test
            </button>
          </div>
        </div>
      )}

      <BookingModal
        open={openBooking}
        onClose={() => setOpenBooking(false)}
        service="General Test Booking"
        details="Use this form for general inquiries or to book a test not listed in our packages. Please specify your needs in the message field."
      />
    </nav>
  );
}
