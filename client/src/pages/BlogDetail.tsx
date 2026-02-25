import { useParams } from "react-router-dom";
import { blogs } from "../constants/blogData";
import Reveal from "../components/ui/Reveal";

export default function BlogDetail() {
  const { slug } = useParams();

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <div className="p-20 text-center">Blog not found</div>;

  return (
    <div className="bg-slate-50 min-h-screen">

      <Reveal>
        <section className="max-w-5xl mx-auto px-6 py-20">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 leading-tight">
              {blog.title}
            </h1>
            <p className="text-gray-500 mt-4">
              Posted by Dr. Aravind K
            </p>
          </div>

          {/* Image Left - Content Right Layout */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            
            {/* Image - Left Side (1 column) */}
            <div className="md:col-span-1">
              <div className="rounded-2xl overflow-hidden shadow-lg sticky top-24">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>

            {/* Content - Right Side (2 columns) */}
            <div className="md:col-span-2 text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {blog.content}
            </div>

          </div>

        </section>
      </Reveal>

    </div>
  );
}
