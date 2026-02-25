import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHeartbeat } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/images/doctor/doctor-profile.jpg";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Footer() {
  const socialLinks = [
    { Icon: FaFacebookF, url: "https://facebook.com/sparkdiagnostics" },
    { Icon: FaInstagram, url: "https://www.instagram.com/aravindkengal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
    { Icon: FaTwitter, url: "https://twitter.com/sparkdiagnostics" },
    { Icon: FaLinkedinIn, url: "https://linkedin.com/company/spark-diagnostics" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white mt-24">

      {/* Glow Top Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-70"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* Brand Section */}
        <div>
          <Link to="/" className="flex items-center gap-3 mb-4 group hover:scale-105 transition" onClick={scrollToTop}>
            <div className="relative">
              <img
                src={logo}
                alt="Spark Diagnostics Logo"
                className="w-14 h-14 rounded-full object-cover border-2 border-primary shadow-lg group-hover:scale-105 transition duration-300"
              />
              <FaHeartbeat className="absolute -top-2 -right-2 text-primary text-lg animate-pulse" />
            </div>
            <span className="font-heading text-xl font-semibold tracking-wide">
              Spark Diagnostics
            </span>
          </Link>

          <p className="text-sm text-gray-400 mt-4 leading-relaxed">
            Delivering accurate, reliable, and timely diagnostic services
            using advanced technology and expert healthcare professionals.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {socialLinks.map(({ Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-primary transition duration-300 cursor-pointer shadow-md hover:shadow-primary/40"
              >
                <Icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-5 relative inline-block">
            Quick Links
            <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-primary"></span>
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            {["Home", "Services", "About", "Contact", "Blogs"].map((item, i) => (
              <li key={i}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={scrollToTop}
                  className="hover:text-primary transition duration-300 hover:translate-x-1 inline-block"
                >
                  → {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-5 relative inline-block">
            Our Services
            <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-primary"></span>
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>🩸 Blood Tests</li>
            <li>🧪 Diabetes Screening</li>
            <li>🧬 Thyroid Testing</li>
            <li>💊 Preventive Health Checkups</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-5 relative inline-block">
            Contact Us
            <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-primary"></span>
          </h3>

          <div className="space-y-4 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary" />
              Bus Stand Rd, beside Mishra Pedha, opposite Karnul Dargah, Vidya Nagar, Gangavathi, Karnataka 583227
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary" />
              +91 97414 35787
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-primary" />
              sparkwellness642@gmail.com
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 text-center text-sm text-gray-400 py-5 bg-slate-950/60 backdrop-blur-md">
        © {new Date().getFullYear()} Spark Diagnostics. Designed with ❤️ for better healthcare.
      </div>
    </footer>
  );
}