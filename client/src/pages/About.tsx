import heroLab from "../assets/images/ai/about-lab.jpg";
import commitmentImg from "../assets/images/ai/aravind-doctor.png";
import doctorCouples from "../assets/images/doctor/doctor-couples.jpg";
import Reveal from "../components/ui/Reveal";
import { Microscope, ShieldCheck, Heart, Zap } from "lucide-react";
import coreValuesImage from "../assets/images/ai/core-values.jpg";
import missionImg from "../assets/images/ai/mission.jpg";
import visionImg from "../assets/images/ai/vision.jpg";
import doctor from "../assets/images/doctor/aravind-doctor-2.jpg";

export default function About() {
  return (
    <div className="bg-slate-50 overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-[500px] flex items-center justify-center text-center">
        <img
          src={heroLab}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Laboratory"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>

        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            About
            <span className="block bg-gradient-to-r from-cyan-400 to-green-500 bg-clip-text text-transparent">
              Spark Diagnostics
            </span>
          </h1>

          <p className="text-gray-200 mt-6 text-lg max-w-2xl mx-auto">
            Delivering accurate, timely, and reliable diagnostic services
            with the highest standards of quality and patient care.
          </p>
        </div>
      </section>

      {/* ABOUT DESCRIPTION */}
      <Reveal>
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Left Content */}
            <div className="md:col-span-1">
              <h2 className="text-2xl md:text-3xl font-bold">
                Precision.
                <span className="text-cyan-600"> Quality.</span> Care.
              </h2>

              <p className="text-gray-600 mt-4 md:mt-6 leading-relaxed text-sm md:text-base">
                Located in Gangavathi, Spark Diagnostics combines advanced
                laboratory technology, experienced professionals, and strict
                quality protocols to support clinicians and patients.
              </p>

              <p className="text-gray-600 mt-3 leading-relaxed text-sm">
                Our laboratory provides comprehensive diagnostic services under
                one roof, ensuring precision, efficiency, and patient comfort.
              </p>
            </div>

            {/* Middle: Our Commitment */}
            <div className="md:col-span-1 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-cyan-600">
                Our Commitment
              </h3>

              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                Every sample represents a life, and every report carries
                responsibility. We maintain excellence, integrity, and compassion.
              </p>

              <div className="mt-6 space-y-3 text-gray-600">
                <p className="flex items-start gap-2 text-sm">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span>Advanced technology</span>
                </p>
                <p className="flex items-start gap-2 text-sm">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span>Strict quality control</span>
                </p>
                <p className="flex items-start gap-2 text-sm">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span>Compassionate care</span>
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="md:col-span-1 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={commitmentImg} 
                alt="Our Commitment" 
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </section>
      </Reveal>

      {/* TEAM SECTION */}
      <Reveal>
  <section className="py-28 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 relative overflow-hidden">

    {/* Soft Background Glow */}
    <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-300 opacity-20 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-300 opacity-20 rounded-full blur-3xl"></div>

    <div className="max-w-7xl mx-auto px-6">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Our Team 🤝</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          A passionate husband & wife duo committed to delivering accurate diagnostics 
          and compassionate patient care with dedication and trust ❤️.
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-10 grid md:grid-cols-2 gap-12 items-center">

        {/* Image Side */}
        <div className="flex justify-center">
          <img
            src={doctorCouples}
            alt="Doctor Couple"
            className="rounded-3xl w-full max-w-md object-cover shadow-xl border-4 border-white"
          />
        </div>

        {/* Content Side */}
        <div>

          {/* Leadership Card */}
          <div className="bg-emerald-50 p-6 rounded-2xl mb-6 shadow-md">
            <h3 className="text-xl font-semibold text-emerald-700">
              👨‍⚕️👩‍⚕️ Leadership & Expertise
            </h3>
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              Led by Dr. Aravind K and Sindhu K, our center blends medical excellence 
              with compassionate care. Together, they ensure every report reflects 
              accuracy, reliability, and professional integrity.
            </p>
          </div>

          {/* Team Cards */}
          <div className="grid sm:grid-cols-2 gap-4">

            <div className="bg-white border border-emerald-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h4 className="font-semibold text-lg">Dr. Aravind K 👨‍⚕️</h4>
              <p className="text-gray-600 text-sm mt-1">
                Consultant Pathologist specializing in precise blood diagnostics 
                and clinical excellence.
              </p>
            </div>

            <div className="bg-white border border-cyan-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h4 className="font-semibold text-lg">Sindhu K 👩‍⚕️</h4>
              <p className="text-gray-600 text-sm mt-1">
                Lab Supervisor ensuring smooth operations, quality control, 
                and patient-friendly service.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</Reveal>

      {/* DOCTOR SECTION */}
      <Reveal>
        <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
            <h2 className="text-3xl font-bold">
              Meet Our Specialist
            </h2>

            <h3 className="text-cyan-600 text-2xl mt-4 font-semibold">
              Dr. Aravind K
            </h3>

            <p className="text-gray-600 mt-6 text-lg">
              Consultant Pathologist with over 10 years of experience in
              diagnostic medicine, dedicated to delivering accurate laboratory
              results through advanced technology and strict quality standards.
            </p>

            <ul className="mt-8 space-y-3 text-gray-600">
              <li>✔ MBBS, MD (Pathology)</li>
              <li>✔ Member – Indian Medical Association</li>
              <li>✔ Research Publication Author</li>
              <li>✔ Expertise in Diagnostic Pathology</li>
            </ul>
          </div>
     <div className="relative">
        <img
          src={doctor}
          alt="Our Core Values"
          className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
        />
        </div>
        </section>
      </Reveal>

      <Reveal>
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE IMAGE */}
      <div className="relative">
        <img
          src={coreValuesImage}
          alt="Our Core Values"
          className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
        />

        {/* Optional soft overlay glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 to-transparent"></div>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div>
        <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">

  {[
    {
      title: "Accuracy",
      desc: "Precision-driven diagnostics with strict quality control.",
      icon: <Microscope size={22} />,
    },
    {
      title: "Integrity",
      desc: "Transparent processes and ethical medical practices.",
      icon: <ShieldCheck size={22} />,
    },
    {
      title: "Compassion",
      desc: "Patient-centered care with empathy and respect.",
      icon: <Heart size={22} />,
    },
    {
      title: "Innovation",
      desc: "Advanced technology for reliable clinical outcomes.",
      icon: <Zap size={22} />,
    },
  ].map((value) => (
    <div
      key={value.title}
      className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition duration-300"
    >
      {/* Icon + Title Row */}
      <div className="flex items-center gap-4 mb-3">

        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10 text-primary">
          {value.icon}
        </div>

        <h3 className="font-semibold text-base md:text-lg text-slate-800 line-clamp-2">
          {value.title}
        </h3>
      </div>

      {/* Small Description */}
      <p className="text-sm text-slate-500 leading-relaxed">
        {value.desc}
      </p>

    </div>
  ))}

</div>
      </div>

    </div>
  </section>
</Reveal>

      {/* MISSION & VISION */}
      <Reveal>
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6 space-y-20">

      {/* MISSION */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Image Side */}
        <div className="relative">
          <img
            src={missionImg}
            alt="Our Mission"
            className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
        </div>

        {/* Content Side */}
        <div>
          <div className="flex items-center gap-4 mb-6 text-primary">
            <ShieldCheck size={40} />
            <h3 className="text-3xl font-bold">
              Our Mission
            </h3>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            To provide accurate and reliable diagnostic services that enable
            early disease detection and better healthcare outcomes.
          </p>

          <div className="mt-8 border-l-4 border-primary pl-6">
            <p className="text-gray-500 italic">
              “Every report we deliver carries responsibility, precision, and care.”
            </p>
          </div>
        </div>

      </div>

      {/* VISION */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Content Side */}
        <div className="order-2 md:order-1">
          <div className="flex items-center gap-4 mb-6 text-primary">
            <Zap size={40} />
            <h3 className="text-3xl font-bold">
              Our Vision
            </h3>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            To become a trusted diagnostic center known for excellence,
            innovation, and compassionate patient care.
          </p>

          <div className="mt-8 border-l-4 border-primary pl-6">
            <p className="text-gray-500 italic">
              “Shaping the future of diagnostics through technology and trust.”
            </p>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative order-1 md:order-2">
          <img
            src={visionImg}
            alt="Our Vision"
            className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
        </div>

      </div>

    </div>
  </section>
</Reveal>


    </div>
  );
}