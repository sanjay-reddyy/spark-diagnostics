import pkgBg from "../../assets/images/ai/diagnostic-lab.jpg";
import { useState } from "react";
import BookingModal from "../ui/BookingModal";


const packages = [
  {
    name: "Basic Health Checkup",
    price: "₹999",
    popular: false,
    tests: [
      "Complete Blood Count (CBC)",
      "Blood Sugar",
      "Urine Analysis",
      "Lipid Profile",
    ],
  },
  {
    name: "Comprehensive Health Package",
    price: "₹2499",
    popular: true,
    tests: [
      "CBC",
      "Liver Function Test",
      "Kidney Function Test",
      "Thyroid Profile",
      "Diabetes Screening",
      "Lipid Profile",
    ],
  },
  {
    name: "Executive Health Package",
    price: "₹3999",
    popular: false,
    tests: [
      "Full Body Screening",
      "Cardiac Risk Markers",
      "Vitamin Profile",
      "Hormone Tests",
      "Diabetes Profile",
    ],
  },
];

export default function HealthPackages() {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedTests, setSelectedTests] = useState([]);

  return (
    <section className="relative py-16 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={pkgBg}
          className="w-full h-full object-cover rounded-3xl shadow-soft"
          alt="Health Packages"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center z-10">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
          Preventive Health Packages
        </h2>

        <p className="text-gray-200 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Early detection helps prevent serious health conditions. Choose a
          package designed for your wellness needs.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 mt-10 md:mt-14">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl md:rounded-3xl shadow-soft p-5 md:p-8 flex flex-col ${
                pkg.popular ? "border-2 border-primary md:scale-105" : ""
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-emerald-600 text-white text-xs px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg md:text-xl font-semibold">{pkg.name}</h3>

              <p className="text-2xl md:text-3xl font-bold text-primary mt-3 md:mt-4">
                {pkg.price}
              </p>

              <ul className="mt-4 md:mt-6 space-y-1 md:space-y-2 text-xs md:text-sm text-lightText flex-1">
                {pkg.tests.map((test, i) => (
                  <li key={i}>✔ {test}</li>
                ))}
              </ul>

              <button
                onClick={() => {
                  setSelectedService(pkg.name);
                  setSelectedTests(pkg.tests);
                  setOpen(true);
                }}
                className="bg-gradient-to-r from-primary to-emerald-600 text-white px-6 py-3 rounded-full mt-4 md:mt-6 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50 transition w-full text-sm md:text-base"
              >
                Book Package
              </button>

            </div>
          ))}
        </div>

        <BookingModal
          open={open}
          onClose={() => setOpen(false)}
          service={selectedService}
          details={selectedTests}
        />

      </div>
    </section>
  );
}
