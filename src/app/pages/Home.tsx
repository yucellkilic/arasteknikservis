import { motion } from "motion/react";
import { Link, useNavigate } from "react-router";
import {
  Phone,
  MessageCircle,
  Flame,
  Wind,
  WashingMachine,
  Wrench,
  ShoppingCart,
  Clock,
  Shield,
  Users,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Award,
  ArrowRight,
} from "lucide-react";

export function Home() {
  const navigate = useNavigate();

  const services = [
    {
      id: "sofben",
      icon: Flame,
      title: "Şofben Servisi",
      description: "Şofben tamir, bakım ve montaj hizmetleri",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: "kombi",
      icon: Flame,
      title: "Kombi Servisi",
      description: "Tüm markalarda kombi bakım ve onarım",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "tamir-bakim",
      icon: Wrench,
      title: "Tamir & Bakım",
      description: "Profesyonel tamir ve periyodik bakım",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "alim-satim",
      icon: ShoppingCart,
      title: "Alım Satım",
      description: "2. el cihaz alım satım hizmetleri",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: "yedek-parca",
      icon: ShoppingCart,
      title: "Yedek Parça",
      description: "Orijinal ve uygun fiyatlı yedek parçalar",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      id: "klima",
      icon: Wind,
      title: "Klima Servisi",
      description: "Klima montaj, bakım ve gaz dolumu",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      id: "beyaz-esya",
      icon: WashingMachine,
      title: "Beyaz Eşya",
      description: "Bulaşık, çamaşır makinesi servisi",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const whyUs = [
    {
      icon: Clock,
      title: "7/24 Hızlı Servis",
      description: "Her an yanınızdayız, acil durumlar için hızlı müdahale",
    },
    {
      icon: Users,
      title: "Deneyimli Ekip",
      description: "20 yıllık tecrübe ile uzman kadromuz",
    },
    {
      icon: Shield,
      title: "Güvenilir Hizmet",
      description: "Kaliteli iş garantisi ve müşteri memnuniyeti",
    },
    {
      icon: Award,
      title: "Uygun Fiyat",
      description: "Rekabetçi fiyatlarla premium hizmet",
    },
  ];

  const stats = [
    { number: "20+", label: "Yıllık Tecrübe" },
    { number: "5000+", label: "Mutlu Müşteri" },
    { number: "7/24", label: "Hızlı Destek" },
    { number: "%100", label: "Memnuniyet" },
  ];

  const serviceAreas = [
    "Yakutiye",
    "Palandöken",
    "Aziziye",
    "Dadaşkent",
    "Lalapaşa",
    "Osmangazi",
    "Gez Mahallesi",
    "Kazımkarabekir",
  ];

  const faqs = [
    {
      question: "Servis ücretleriniz nedir?",
      answer: "Servis ücretlerimiz işlemin türüne göre değişmektedir. Detaylı bilgi için bizi arayabilirsiniz.",
    },
    {
      question: "Acil servise ne kadar sürede gelirsiniz?",
      answer: "Erzurum merkez ve çevre ilçelere ortalama 30-45 dakika içinde ulaşıyoruz.",
    },
    {
      question: "Hangi markaların servisini yapıyorsunuz?",
      answer: "Vaillant, Baymak, Bosch, Arçelik, Vestel ve tüm yerli/yabancı markaların servisini yapıyoruz.",
    },
    {
      question: "Yedek parça garantiniz var mı?",
      answer: "Tüm yedek parçalarımız için 1 yıl garantimiz vardır.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8F9FA] via-white to-[#F8F9FA]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#0066FF]/20 to-[#00D9C0]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#FF6B35]/20 to-[#FF8A5C]/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-[#0066FF]/20"
              >
                <div className="w-2 h-2 bg-[#00D9C0] rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">7/24 Hızlı ve Güvenilir Servis</span>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#0066FF] via-[#00D9C0] to-[#0066FF] bg-clip-text text-transparent">
                  Erzurum'un
                </span>
                <br />
                <span className="text-[#1A1A2E]">En Güvenilir</span>
                <br />
                <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A5C] bg-clip-text text-transparent">
                  Teknik Servisi
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Kombi, klima ve beyaz eşya konusunda uzman kadromuzla{" "}
                <span className="font-semibold text-[#0066FF]">20 yıldır</span> yanınızdayız.
                Hızlı çözüm, uygun fiyat, garantili hizmet.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="tel:05304729010"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00D9C0] text-white rounded-2xl font-semibold shadow-2xl hover:shadow-[0_0_40px_rgba(0,102,255,0.4)] transition-all duration-300"
                >
                  <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  <span>Hemen Ara</span>
                </motion.a>

                <motion.a
                  href="https://wa.me/905304729010"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#25D366] rounded-2xl font-semibold shadow-xl border-2 border-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
                >
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp</span>
                </motion.a>
              </div>

              <div className="flex items-center gap-8 pt-4">
                {stats.slice(0, 2).map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#0066FF] to-[#00D9C0] bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/images/anasayfa_hero_sofben_tamir.webp"
                  alt="Aras Teknik Servis - Profesyonel Hizmet"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
                  fetchpriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0066FF]/30 to-transparent" />
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 -left-4 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-4 border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#00D9C0] rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1A1A2E]">Garantili</div>
                    <div className="text-sm text-gray-600">%100 Güvenli</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-8 -right-4 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-4 border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#FF8A5C] rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1A1A2E]">7/24</div>
                    <div className="text-sm text-gray-600">Hızlı Servis</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-24 pb-12 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,102,255,0.05),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#0066FF]/10 text-[#0066FF] rounded-full text-sm font-semibold mb-4">
              Hizmetlerimiz
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4">
              Uzman Olduğumuz <span className="bg-gradient-to-r from-[#0066FF] to-[#00D9C0] bg-clip-text text-transparent">Alanlar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tüm ihtiyaçlarınız için profesyonel ve güvenilir teknik servis çözümleri
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => navigate(`/hizmetler#${service.id}`)}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
                     style={{ backgroundImage: `linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))` }} 
                />
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-[#1A1A2E] mb-2 group-hover:text-[#0066FF] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-4 flex items-center text-[#0066FF] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">Detaylı Bilgi</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/hizmetler"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00D9C0] text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Tüm Hizmetleri Gör
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="pt-12 pb-24 bg-gradient-to-br from-[#F8F9FA] to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0066FF]/5 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-[#FF6B35]/10 text-[#FF6B35] rounded-full text-sm font-semibold mb-4">
                Neden Biz?
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-6">
                Aras Teknik Servis'i
                <span className="block bg-gradient-to-r from-[#FF6B35] to-[#FF8A5C] bg-clip-text text-transparent">
                  Neden Tercih Etmelisiniz?
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Erzurum'da 20 yıldır süregelen kaliteli hizmet anlayışımız ve müşteri memnuniyeti odaklı
                yaklaşımımız ile sektörde fark yaratıyoruz.
              </p>

              <div className="space-y-6">
                {whyUs.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#0066FF] to-[#00D9C0] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/images/nedenbiz.webp"
                  alt="Profesyonel Ekibimiz"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0066FF]/40 to-transparent" />
              </div>

              {/* Stats Overlay */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {stats.slice(2).map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#0066FF] to-[#00D9C0] bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-700 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#00D9C0]/10 text-[#00D9C0] rounded-full text-sm font-semibold mb-4">
              Hizmet Bölgelerimiz
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4">
              Erzurum Genelinde <span className="bg-gradient-to-r from-[#0066FF] to-[#00D9C0] bg-clip-text text-transparent">Hizmetinizdeyiz</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0066FF] to-[#00D9C0] rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-[#1A1A2E] group-hover:text-[#0066FF] transition-colors">
                    {area}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/hizmet-bolgeleri"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0066FF] border-2 border-[#0066FF] rounded-full font-semibold shadow-lg hover:bg-[#0066FF] hover:text-white hover:scale-105 transition-all duration-300"
            >
              Tüm Bölgeleri Gör
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-[#F8F9FA] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#FF6B35]/10 text-[#FF6B35] rounded-full text-sm font-semibold mb-4">
              Sık Sorulan Sorular
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4">
              Merak Ettikleriniz
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#0066FF] to-[#00D9C0] rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/sss"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF8A5C] text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Tüm Soruları Gör
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-[#0066FF] via-[#0052CC] to-[#00D9C0] relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Hemen Bize Ulaşın!
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Kombi, klima veya beyaz eşya arızanız mı var? Uzman ekibimiz 7/24 hizmetinizde.
              Hızlı çözüm için şimdi arayın!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="tel:05304729010"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-10 py-5 bg-white text-[#0066FF] rounded-2xl font-bold shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300"
              >
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <div className="text-left">
                  <div className="text-xs text-gray-600">Hemen Ara</div>
                  <div className="text-lg">0530 472 90 10</div>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/905304729010"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-10 py-5 bg-[#25D366] text-white rounded-2xl font-bold shadow-2xl hover:shadow-[0_0_40px_rgba(37,211,102,0.4)] transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>WhatsApp ile Yaz</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
