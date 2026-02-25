import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { api } from "../../services/api";
import { Loader2, X } from "lucide-react";

export default function BookingModal({ open, onClose, service, details }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

const scrollYRef = useRef(0);
const modalRef = useRef(null);

 useEffect(() => {
  if (open) {
    scrollYRef.current =
      window.scrollY || document.documentElement.scrollTop || 0;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // 🔥 reset modal scroll
    setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.scrollTop = 0;
      }
    }, 0);
  } else {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    window.scrollTo(0, scrollYRef.current);
  }

  return () => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  };
}, [open]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = async () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email address is invalid.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    try {
      await api.post("/appointments", {
        ...form,
        service,
      });
      window.dispatchEvent(new Event("new-booking"));
      alert("Appointment booked successfully!");
      setForm({ name: "", phone: "", email: "", message: "" });
      onClose();
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Failed to book appointment. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return createPortal(
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999] p-4">

<div
  ref={modalRef}
  className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 w-full max-w-sm md:max-w-md max-h-[90vh] overflow-y-auto"
>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">
              Book Appointment
            </h2>
            <p className="text-xs md:text-sm text-lightText mt-1">
              For: <span className="font-semibold text-primary">{service}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        {details && (
          <div className="mt-3 md:mt-4 bg-primary/5 p-3 rounded-lg text-xs md:text-sm max-h-24 md:max-h-32 overflow-y-auto">
            {Array.isArray(details) ? (
              <ul className="space-y-1 text-lightText">
                <li className="font-semibold text-black mb-1">Tests Included:</li>
                {details.map((item, i) => (
                  <li key={i}>✔ {item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-lightText">{details}</p>
            )}
          </div>
        )}

        <div className="mt-5 md:mt-6 space-y-3">

          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className={`w-full border rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.name && <p className="text-xs text-red-500 -mt-2">{errors.name}</p>}

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className={`w-full border rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.phone && <p className="text-xs text-red-500 -mt-2">{errors.phone}</p>}

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className={`w-full border rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <p className="text-xs text-red-500 -mt-2">{errors.email}</p>}

          <textarea
            name="message"
            placeholder="Message (optional)"
            value={form.message}
            onChange={handleChange}
            rows={3}
            className="w-full border rounded-lg px-3 md:px-4 py-2 md:py-3 border-gray-300 text-sm"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-gradient-to-r from-primary to-emerald-600 text-white py-2 md:py-3 rounded-full flex items-center justify-center disabled:bg-primary/70 hover:shadow-lg hover:shadow-emerald-500/50 transition text-sm md:text-base font-semibold"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : "Confirm Booking"}
          </button>

          <button
            onClick={onClose}
            className="w-full text-gray-600 py-2 text-xs md:text-sm hover:text-gray-800 transition"
          >
            Cancel
          </button>

        </div>
      </div>
    </div>
    , document.body
  );
}
