import { useParams } from "react-router-dom";
import { servicesData } from "../constants/servicesData";
import Reveal from "../components/ui/Reveal";
import BookingModal from "../components/ui/BookingModal";
import { useState } from "react";

export default function ServiceDetail() {
  const { slug } = useParams();
  const [open, setOpen] = useState(false);

  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    return <div className="p-20 text-center">Service not found</div>;
  }

  return (
    <div className="bg-background">

      <Reveal>
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl font-heading font-bold">
          {service.title}
        </h1>

        <p className="text-lightText mt-4 max-w-2xl mx-auto">
          {service.description}
        </p>
      </section>
      </Reveal>

      <Reveal>
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-semibold mb-6">
          Tests Included
        </h2>

        <ul className="grid md:grid-cols-2 gap-4">
          {service.tests.map((test) => (
            <li
              key={test}
              className="bg-white p-4 rounded-xl shadow-soft"
            >
              ✔ {test}
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(true)}
          className="mt-10 bg-gradient-to-r from-primary to-emerald-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-emerald-500/50 transition"
        >
          Book This Test
        </button>
        <BookingModal
          open={open}
          onClose={() => setOpen(false)}
          service={service.title}
          details={service.tests}
        />
      </section>
      </Reveal>

    </div>
  );
}
