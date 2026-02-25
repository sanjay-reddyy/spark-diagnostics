import labImage from "../assets/images/ai/diagnostic-lab.jpg";
import { Link } from "react-router-dom";
import Reveal from "../components/ui/Reveal";
import clinicalImg from "../assets/images/ai/clinical.jpg";
import bioImg from "../assets/images/ai/biochemistry.jpg";
import microImg from "../assets/images/ai/microbiology.jpg";
import histoImg from "../assets/images/ai/histopathology.jpg";
import immunoImg from "../assets/images/ai/immunology.jpg";
import preventiveImg from "../assets/images/ai/preventive.jpg";


export default function Services() {
  const services = [
  {
    title: "Clinical Pathology",
    slug: "clinical-pathology",
    desc: "CBC, ESR, urine analysis, stool examination and hematological screening.",
    image: clinicalImg,
  },
  {
    title: "Biochemistry",
    slug: "biochemistry",
    desc: "Liver, kidney, thyroid, diabetes and metabolic function testing.",
    image: bioImg,
  },
  {
    title: "Microbiology",
    slug: "microbiology",
    desc: "Culture testing and infection detection with antibiotic sensitivity.",
    image: microImg,
  },
  {
    title: "Histopathology",
    slug: "histopathology",
    desc: "Biopsy evaluation, FNAC, pap smear and tissue analysis.",
    image: histoImg,
  },
  {
    title: "Immunology & Serology",
    slug: "immunology-serology",
    desc: "Autoimmune markers, viral testing and hormone analysis.",
    image: immunoImg,
  },
  {
    title: "Preventive Health Packages",
    slug: "preventive-health",
    desc: "Comprehensive health screening for early disease detection.",
    image: preventiveImg,
  },
];

  return (
    <div className="bg-slate-50">

      {/* HERO SECTION */}
      <section className="relative h-[420px] flex items-center justify-center text-center overflow-hidden">

        <img
          src={labImage}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Lab"
        />

        {/* Green premium overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>

        {/* Soft glow elements */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-emerald-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-green-300/20 rounded-full blur-3xl"></div>

        <div className="relative text-white px-6 max-w-3xl">
          <h1 className="text-5xl font-bold">
            Our Diagnostic Services
          </h1>
          <p className="mt-6 text-lg opacity-90">
            Comprehensive laboratory testing powered by advanced technology
            and strict quality standards.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <Reveal>
        <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-10">

          {services.map((service) => (
            <Link
  key={service.title}
  to={`/services/${service.slug}`}
  className="group"
>
  <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-emerald-100 hover:-translate-y-3 hover:shadow-emerald-200/40 transition duration-300 h-full">

    {/* Service Image */}
    <div className="h-56 overflow-hidden">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />
    </div>

    {/* Content */}
    <div className="p-8">

      <h3 className="text-xl font-semibold text-emerald-700 group-hover:text-emerald-900 transition">
        {service.title}
      </h3>

      <p className="text-gray-600 mt-4 leading-relaxed">
        {service.desc}
      </p>

      <div className="mt-6 text-sm font-medium text-emerald-600 group-hover:translate-x-2 transition">
        Learn More →
      </div>

    </div>
  </div>
</Link>
          ))}

        </section>
      </Reveal>

    </div>
  );
}