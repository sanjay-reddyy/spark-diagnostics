import {
  HeartPulse,
  TestTube,
  Activity,
  Microscope,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    icon: TestTube,
    title: "Blood Tests & Screening",
    desc: "Comprehensive blood testing for accurate health evaluation.",
  },
  {
    icon: Activity,
    title: "Diabetes & Thyroid",
    desc: "Advanced metabolic and hormonal testing services.",
  },
  {
    icon: Microscope,
    title: "Infection Testing",
    desc: "Precise detection of bacterial and viral infections.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Health Packages",
    desc: "Early detection through complete health checkups.",
  },
  {
    icon: HeartPulse,
    title: "Cardiac Risk Assessment",
    desc: "Heart health screening and risk evaluation.",
  },
  {
    icon: Stethoscope,
    title: "Women’s Health Tests",
    desc: "Specialized diagnostic care for women’s wellness.",
  },
];

export default function Services() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-heading font-bold">
          Our Diagnostic Services
        </h2>

        <p className="text-lightText mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base">
          We provide comprehensive diagnostic solutions using advanced
          technology and expert analysis for accurate healthcare decisions.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-primary/20 hover:border-primary rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon Box */}
                <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-xl mx-auto transition duration-300 group-hover:scale-110 group-hover:bg-primary">
                  <Icon className="text-emerald-600 transition-colors duration-300 group-hover:text-white" size={26} />
                </div>

                {/* Title */}
                <h3 className="mt-6 font-semibold text-lg text-gray-800">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-lightText text-sm mt-3 leading-relaxed">
                  {service.desc}
                </p>

                {/* Subtle bottom accent line */}
                <div className="w-12 h-[2px] bg-primary mx-auto mt-6 opacity-70"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
