import { useParams, useNavigate } from "react-router";
import { motion } from "motion/react";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "../../data/blogData";
import { useEffect } from "react";

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.slug === slug);
  
  // Find related posts (same category, exclude current)
  const relatedPosts = post
    ? blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3)
    : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Yazı Bulunamadı</h1>
        <p className="text-gray-600 mb-8">Aradığınız blog yazısı silinmiş veya taşınmış olabilir.</p>
        <button
          onClick={() => navigate("/blog")}
          className="px-8 py-3 bg-[#0066FF] text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
        >
          Blog'a Dön
        </button>
      </div>
    );
  }

  return (
    <div className="overflow-hidden bg-[#F8F9FA] min-h-screen">
      {/* Hero Header */}
      <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full">
        <img
          src={post.image}
          alt={post.title}
          width="1200"
          height="600"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <button
              onClick={() => navigate("/blog")}
              aria-label="Blog sayfasına dön"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Blog'a Dön
            </button>
            <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm font-medium mb-4">
              <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${post.gradient} text-white`}>
                {post.category}
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100"
          >
            <p className="text-xl sm:text-2xl text-gray-700 font-medium leading-relaxed mb-10 border-l-4 border-[#0066FF] pl-6">
              {post.excerpt}
            </p>
            
            <div className="prose prose-lg prose-blue max-w-none text-gray-600 leading-loose">
              {post.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-6">{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A1A2E] mb-10">İlgili Yazılar</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.slug}
                  onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      width="400"
                      height="192"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1A1A2E] mb-3 group-hover:text-[#0066FF] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center text-[#0066FF] font-semibold text-sm">
                      <span>Okumaya Devam Et</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
