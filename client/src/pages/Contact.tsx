import heroLab from "../assets/images/ai/clinic-reception.jpg";
import Reveal from "../components/ui/Reveal";
import { useState } from "react";
import { api } from "../services/api";
import clinicinterior from "../assets/images/ai/clinic-interior.jpg";   
import {
  Loader2,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState({ message: "", type: "" });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setFormStatus({ message: "", type: "" });

    try {
      await api.post("/contact", formData);
      setFormStatus({
        message: "Your message has been sent successfully!",
        type: "success",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setFormStatus({
        message: "Failed to send message. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50">

      {/* HERO */}
      <section className="relative h-[350px] md:h-[450px] flex items-center justify-center text-center overflow-hidden">
        <img
          src={heroLab}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Clinic Reception"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-emerald-800/70 to-emerald-900/80"></div>

        <div className="relative z-10 px-4 md:px-6 max-w-4xl mx-auto text-white">
          <h1 className="text-3xl md:text-5xl font-bold">
            Contact Spark Diagnostics
          </h1>

          <p className="mt-4 md:mt-6 text-sm md:text-lg opacity-90">
            Have questions or want to book a diagnostic test?
            Our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <Reveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-12 md:-mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative z-10">

          {[
            {
              title: "Address",
              icon: <MapPin />,
              content: "Gangavathi, Karnataka",
            },
            {
              title: "Phone",
              icon: <Phone />,
              content: " +91 97414 35787",
            },
            {
              title: "Email",
              icon: <Mail />,
              content: "sparkwellness642@gmail.com",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-lg sm:shadow-xl border border-emerald-100 text-center hover:-translate-y-2 sm:hover:-translate-y-3 transition"
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 mx-auto flex items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-emerald-700">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">{item.content}</p>
            </div>
          ))}

        </section>
      </Reveal>

      {/* FORM + MAP */}
      <Reveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 grid md:grid-cols-2 gap-8 md:gap-16">

          {/* FORM */}
          <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg sm:shadow-xl border border-emerald-100">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-emerald-700">
              Send an Enquiry
            </h2>

            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              {["name", "email", "phone"].map((field) => (
                <input
                  key={field}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                  className="w-full border border-gray-200 rounded-xl px-4 sm:px-5 py-3 sm:py-4 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition text-sm sm:text-base"
                  required
                />
              ))}

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className="w-full border border-gray-200 rounded-xl px-4 sm:px-5 py-3 sm:py-4 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition text-sm sm:text-base"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary to-emerald-600 text-white py-3 sm:py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition flex items-center justify-center text-sm sm:text-base"
              >
                {loading ? <Loader2 className="animate-spin" /> : "Submit Enquiry"}
              </button>

              {formStatus.message && (
                <p
                  className={`text-xs sm:text-sm text-center mt-4 ${
                    formStatus.type === "success"
                      ? "text-emerald-600"
                      : "text-red-600"
                  }`}
                >
                  {formStatus.message}
                </p>
              )}
            </form>
          </div>

          {/* MAP */}
          <div className="rounded-3xl overflow-hidden shadow-lg sm:shadow-xl border border-emerald-100">
            <iframe
              title="clinic-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.0664664838428!2d76.52888457489003!3d15.426963585163268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb7817202050869%3A0x7bddc87a281b104d!2sBus%20Stand%20Rd%2C%20Gangavathi%2C%20Karnataka%20583227!5e0!3m2!1skn!2sin!4v1771848864371!5m2!1skn!2sin"
              className="w-full h-full min-h-[400px] sm:min-h-[500px] border-0"
              loading="lazy"
            ></iframe>
          </div>

        </section>
      </Reveal>

      {/* PREMIUM CLINIC TIMINGS */}
<Reveal>
  <section className="py-12 sm:py-16 md:py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-20 items-center">

      {/* LEFT SIDE IMAGE */}
      <div className="relative">
        <img
          src={clinicinterior} // your image
          alt="Clinic Interior"
          className="rounded-3xl shadow-lg sm:shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
        />
      </div>

      {/* RIGHT SIDE CLOCK WHEEL */}
      <div className="flex justify-center">

        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">

          {/* Outer Rotating Ring */}
          <div className="absolute inset-0 rounded-full border border-emerald-200 animate-spin-slow"></div>

          {/* Static Center Circle */}
          <div className="absolute inset-8 sm:inset-12 bg-white rounded-full shadow-xl flex flex-col items-center justify-center text-center">

            <Clock size={28} className="text-emerald-600 mb-2 sm:mb-3" />

            <h2 className="text-xl sm:text-2xl font-bold text-emerald-700">
              Clinic Timings
            </h2>

            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Reliable diagnostic care
            </p>
          </div>

          {/* Top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center">
            <p className="text-xs sm:text-sm text-gray-500">Monday – Saturday</p>
            <p className="text-base sm:text-lg font-semibold text-emerald-600">
              8:00 AM – 8:00 PM
            </p>
          </div>

          {/* Bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
            <p className="text-xs sm:text-sm text-gray-500">Sunday</p>
            <p className="text-base sm:text-lg font-semibold text-emerald-600">
              9:00 AM – 1:00 PM
            </p>
          </div>

          {/* Left small accent */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-emerald-500 rounded-full"></div>

          {/* Right small accent */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-emerald-500 rounded-full"></div>

        </div>

      </div>

    </div>
  </section>
</Reveal>

    </div>
  );
}