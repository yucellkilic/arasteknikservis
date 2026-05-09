import { motion } from "motion/react";
import { Award, Users, Clock, Shield, TrendingUp, Heart, Target, Zap } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Müşteri Odaklılık",
      description: "Müşteri memnuniyeti bizim için her şeyden önce gelir",
    },
    {
      icon: Shield,
      title: "Güvenilirlik",
      description: "Sözümüzün arkasında durur, garantili hizmet sunarız",
    },
    {
      icon: Zap,
      title: "Hızlı Çözüm",
      description: "Arızalarınıza en kısa sürede profesyonel çözümler",
    },
    {
      icon: Target,
      title: "Kalite",
      description: "Orijinal yedek parça ve uzman kadro ile kaliteli hizmet",
    },
  ];

  const timeline = [
    { year: "2004", event: "Aras Teknik Servis kuruldu" },
    { year: "2010", event: "Erzurum'un en büyük servis ağına ulaştık" },
    { year: "2015", event: "7/24 hizmet modeline geçtik" },
    { year: "2020", event: "5000+ mutlu müşteri ailesine ulaştık" },
    { year: "2024", event: "Erzurum'un 1 numaralı tercihi olduk" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#0066FF] via-[#0052CC] to-[#00D9C0] overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Hakkımızda
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              20 yıldır Erzurum'da güvenilir teknik servis hizmeti sunuyoruz
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-[#0066FF]/10 text-[#0066FF] rounded-full text-sm font-semibold mb-4">
                Hikayemiz
              </span>
              <h2 className="text-4xl font-bold text-[#1A1A2E] mb-6">
                20 Yıllık Tecrübe ve
                <span className="block bg-gradient-to-r from-[#0066FF] to-[#00D9C0] bg-clip-text text-transparent">
                  Güven
                </span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Aras Teknik Servis, 2004 yılında Erzurum'da küçük bir servis atölyesi olarak kuruldu.
                  Müşteri memnuniyeti odaklı yaklaşımımız ve kaliteli hizmet anlayışımız sayesinde
                  kısa sürede bölgenin en güvenilir teknik servisi haline geldik.
                </p>
                <p>
                  Bugün, 20 yıllık tecrübemiz ve uzman kadromuzla kombi, klima ve beyaz eşya
                  konularında Erzurum'un 1 numaralı tercihi olmaktan gurur duyuyoruz. 5000'den
                  fazla mutlu müşterimizle büyümeye devam ediyoruz.
                </p>
                <p>
                  Teknolojik gelişmeleri yakından takip ediyor, ekipmanlarımızı sürekli yeniliyor
                  ve personelimize düzenli eğitimler vererek sektördeki liderliğimizi koruyoruz.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-[#0066FF]/10 to-transparent rounded-2xl p-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#0066FF] to-[#00D9C0] bg-clip-text text-transparent mb-2">
                    20+
                  </div>
                  <div className="text-gray-700 font-semibold">Yıllık Tecrübe</div>
                </div>
                <div className="bg-gradient-to-br from-[#FF6B35]/10 to-transparent rounded-2xl p-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#FF8A5C] bg-clip-text text-transparent mb-2">
                    5000+
                  </div>
                  <div className="text-gray-700 font-semibold">Mutlu Müşteri</div>
                </div>
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
                  src="/assets/images/hakkimizda.webp"
                  alt="Aras Teknik Servis uzman ekibi - Erzurum'da 20 yıllık deneyim"
                  width="800"
                  height="500"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0066FF]/40 to-transparent" />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0066FF] to-[#00D9C0] rounded-xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1A1A2E] text-lg">En İyi Servis</div>
                    <div className="text-sm text-gray-600">Erzurum 2024</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-[#F8F9FA] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#FF6B35]/10 text-[#FF6B35] rounded-full text-sm font-semibold mb-4">
              Değerlerimiz
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4">
              Bizi Farklı Kılan
              <span className="block bg-gradient-to-r from-[#FF6B35] to-[#FF8A5C] bg-clip-text text-transparent">
                Değerler
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#0066FF] to-[#00D9C0] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#00D9C0]/10 text-[#00D9C0] rounded-full text-sm font-semibold mb-4">
              Yolculuğumuz
            </span>
            <h2 className="text-4xl font-bold text-[#1A1A2E]">
              Kilometre Taşlarımız
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0066FF] via-[#00D9C0] to-[#FF6B35]" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="inline-block bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#0066FF] to-[#00D9C0] bg-clip-text text-transparent mb-2">
                        {item.year}
                      </div>
                      <p className="text-gray-700 font-medium">{item.event}</p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#0066FF] to-[#00D9C0] rounded-full border-4 border-white shadow-lg" />
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-[#0066FF] via-[#0052CC] to-[#00D9C0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Rakamlarla Aras Teknik Servis
            </h2>
            <p className="text-xl text-white/90">
              Başarımızı gösteren sayılar
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "20+", label: "Yıllık Deneyim", icon: TrendingUp },
              { number: "5000+", label: "Mutlu Müşteri", icon: Users },
              { number: "7/24", label: "Kesintisiz Hizmet", icon: Clock },
              { number: "%100", label: "Müşteri Memnuniyeti", icon: Award },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20"
              >
                <stat.icon className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
