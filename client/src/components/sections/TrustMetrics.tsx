import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function TrustMetrics() {
  const metrics = [
    { number: 10, suffix: "+", label: "Years Experience" },
    { number: 50, suffix: "K+", label: "Tests Completed" },
    { number: 99, suffix: "%", label: "Accuracy Rate" },
    { number: 24, suffix: "h", label: "Fast Reporting" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [counts, setCounts] = useState(metrics.map(() => 0));

  useEffect(() => {
    if (!inView) return;

    const intervals = metrics.map((item, index) => {
      const increment = item.number / 30;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= item.number) {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = item.number;
            return newCounts;
          });
          clearInterval(intervals[index]);
        } else {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }
      }, 30);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [inView]);

  return (
    <section className="bg-white py-16" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
        {metrics.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-soft hover:scale-105 transition"
          >
            <h2 className="text-4xl font-bold text-emerald-600">
              {counts[index]}
              {item.suffix}
            </h2>

            <p className="text-gray-600 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}