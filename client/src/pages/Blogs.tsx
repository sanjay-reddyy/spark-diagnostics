import { Link } from "react-router-dom";
import { blogs } from "../constants/blogData";
import Reveal from "../components/ui/Reveal";

export default function Blogs() {
  return (
    <div className="bg-slate-50">

      {/* HERO */}
      <section className="text-center py-24 bg-gradient-to-r from-emerald-50 to-green-50">
        <h1 className="text-5xl font-bold text-emerald-800">
          Health Articles
        </h1>
        <p className="text-gray-600 mt-6 text-lg">
          Health awareness and diagnostic education from Spark Diagnostics.
        </p>
      </section>

      {/* BLOG GRID */}
      <Reveal>
        <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-12">

          {blogs.map((blog) => (
            <Link key={blog.slug} to={`/blogs/${blog.slug}`} className="group">

              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-emerald-100 hover:-translate-y-3 hover:shadow-emerald-200/40 transition duration-300">

                {/* Image */}
                <div className="h-60 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-emerald-700 group-hover:text-emerald-900 transition">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {blog.excerpt}
                  </p>

                  <div className="mt-6 text-emerald-600 font-medium group-hover:translate-x-2 transition">
                    Read Article →
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