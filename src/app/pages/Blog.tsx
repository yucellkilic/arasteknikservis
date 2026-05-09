import { motion } from "motion/react";
import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { blogPosts } from "../../data/blogData";

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const navigate = useNavigate();

  const categories = ["Tümü", "Kombi", "Klima", "Şofben", "Beyaz Eşya", "Genel"];

  const filteredPosts =
    selectedCategory === "Tümü"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#FF6B35] via-[#FF8A5C] to-[#0066FF] overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
              <TrendingUp className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Blog & Haberler</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Blog
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Teknik servis dünyasından faydalı bilgiler ve güncel haberler
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-30 backdrop-blur-lg bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#0066FF] to-[#00D9C0] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-[#F8F9FA] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post (Only show if "Tümü" or matches category and there are posts) */}
          {filteredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 cursor-pointer"
              onClick={() => navigate(`/blog/${filteredPosts[0].slug}`)}
            >
              <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-2xl group">
                <div className="relative h-[300px] sm:h-[400px] lg:h-auto overflow-hidden">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    width="800"
                    height="400"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute top-6 left-6 px-4 py-2 bg-gradient-to-r ${filteredPosts[0].gradient} text-white rounded-full text-sm font-semibold`}>
                    Öne Çıkan
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className={`inline-block w-fit px-4 py-1 bg-gradient-to-r ${filteredPosts[0].gradient} text-white rounded-full text-sm font-semibold mb-4`}>
                    {filteredPosts[0].category}
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A2E] mb-4 group-hover:text-[#0066FF] transition-colors">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{filteredPosts[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{filteredPosts[0].author}</span>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 text-[#0066FF] font-semibold group-hover:gap-4 transition-all">
                    Devamını Oku
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Regular Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.slug}
                onClick={() => navigate(`/blog/${post.slug}`)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    width="400"
                    height="224"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${post.gradient} text-white rounded-full text-xs font-semibold`}>
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-3 group-hover:text-[#0066FF] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-[#0066FF] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Devamını Oku</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-400">Bu kategoride henüz yazı bulunmuyor.</h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
