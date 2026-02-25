import doctorImg from "../../assets/images/doctor/aravind-doctor1.jpg";
import { useState } from "react";
import BookingModal from "../ui/BookingModal";


export default function DoctorProfile() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

        {/* LEFT: DOCTOR IMAGE */}
        <div className="flex items-center justify-center">
          <img
            src={doctorImg}
            alt="Doctor"
            className="rounded-full shadow-soft w-56 h-56 md:w-96 md:h-96 object-cover border-4 border-white"
          />
        </div>

        {/* RIGHT: CONTENT WITH BOXES */}
        <div>
          {/* HEADER */}
          <h2 className="text-2xl md:text-4xl font-heading font-bold">
            Meet Our Specialist
          </h2>

          <h3 className="text-primary text-lg md:text-xl font-semibold mt-2">
            Dr. Aravind K
          </h3>

          {/* TOP TWO BOXES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-10">
            {/* Box 1: Experience */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-200 shadow-md">
              <div className="text-3xl font-bold text-primary">10+</div>
              <p className="text-gray-600 mt-2 text-sm">Years of Experience</p>
            </div>

            {/* Box 2: Qualifications */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-200 shadow-md">
              <div className="text-xl font-bold text-primary">MD (Pathology)</div>
              <p className="text-gray-600 mt-2 text-sm">MBBS Qualified</p>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-lightText mt-8 leading-relaxed text-sm">
            Consultant Pathologist with over 10 years of experience in diagnostic medicine. Dedicated to delivering accurate laboratory results using advanced technology and strict quality standards.
          </p>

          {/* BOTTOM TWO BOXES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
            {/* Box 3: Professional Certifications */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-200 shadow-md">
              <div className="text-primary font-bold mb-2">✓ Certifications</div>
              <p className="text-gray-600 text-xs">IMA Member, Research Published</p>
            </div>

            {/* Box 4: Expertise */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-200 shadow-md">
              <div className="text-primary font-bold mb-2">✓ Expertise</div>
              <p className="text-gray-600 text-xs">Diagnostic Pathology, Lab Analysis</p>
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="mt-8 md:mt-10 w-full md:w-auto bg-gradient-to-r from-primary to-emerald-600 text-white px-6 md:px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50 transition shadow-md text-sm md:text-base"
          >
            Book Consultation
          </button>
          <BookingModal
            open={open}
            onClose={() => setOpen(false)}
            service="Doctor Consultation"
            details="Book a one-on-one consultation with Dr. Aravind K to discuss your health concerns or understand your reports."
          />
        </div>

      </div>
    </section>
  );
}
