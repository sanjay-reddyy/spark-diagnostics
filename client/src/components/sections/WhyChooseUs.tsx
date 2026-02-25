import advanced from "../../assets/images/ai/advanced.jpg";
import professionals from "../../assets/images/doctor/doctor-couples.jpg";
import quality from "../../assets/images/doctor/aravind-doctor-2.jpg";
import fast from "../../assets/images/ai/fast.jpg";
import patient from "../../assets/images/doctor/doctor-couples-2.jpg";
import pricing from "../../assets/images/ai/pricing.jpg";

export default function WhyChooseUs() {
  const points = [
    {
      image: advanced,
      title: "Advanced Laboratory Equipment",
      desc: "State-of-the-art diagnostic technology ensuring precision and reliability.",
    },
    {
      image: professionals,
      title: "Experienced Professionals",
      desc: "Highly trained experts committed to accurate analysis and reporting.",
    },
    {
      image: quality,
      title: "Strict Quality Control",
      desc: "Internal and external quality protocols maintained at every stage.",
    },
    {
      image: fast,
      title: "Fast & Reliable Reports",
      desc: "Timely reporting to support quicker medical decisions.",
    },
    {
      image: patient,
      title: "Patient-Friendly Environment",
      desc: "Comfortable and hygienic sample collection experience.",
    },
    {
      image: pricing,
      title: "Transparent Pricing",
      desc: "Affordable diagnostics with complete pricing transparency.",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-emerald-50 via-white to-green-50 overflow-hidden">

      {/* Decorative Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-200 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-300 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-emerald-600">
            Why Choose Spark Diagnostics
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We combine advanced technology, medical expertise, and compassionate
            care to deliver reliable diagnostic services you can trust.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14">

          {points.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md border border-emerald-100 rounded-3xl p-6 shadow-lg hover:shadow-emerald-200/40 hover:-translate-y-2 transition duration-300"
            >

              <div className="flex items-start gap-5">

                {/* Image (Rounded) */}
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-2xl shadow-md"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-semibold text-lg text-emerald-600">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}