import { motion } from "motion/react";
import { Flame, Wind, WashingMachine, Wrench, ShoppingCart, CheckCircle2, Phone } from "lucide-react";

export function Services() {
  const services = [
    {
      id: "sofben",
      icon: Flame,
      title: "Şofben Servisi",
      description: "Tüm markalarda şofben tamir, bakım ve montaj hizmetleri",
      features: [
        "Arıza tespiti ve onarım",
        "Periyodik bakım",
        "Yeni şofben montajı",
        "Yedek parça değişimi",
        "Garanti kapsamında işlemler",
      ],
      image: "/assets/images/sofben.webp",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: "kombi",
      icon: Flame,
      title: "Kombi Servisi",
      description: "Profesyonel kombi bakım, onarım ve montaj hizmetleri",
      features: [
        "Kombinizin tam bakımı",
        "Arıza teşhis ve onarım",
        "Hidrofor bakımı",
        "Radyatör temizliği",
        "Sistem basınç kontrolü",
      ],
      image: "/assets/images/kombi.webp",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "tamir-bakim",
      icon: Wrench,
      title: "Tamir & Bakım",
      description: "Tüm cihazlarınız için kapsamlı tamir ve bakım hizmetleri",
      features: [
        "Periyodik bakım paketleri",
        "Arıza onarımı",
        "Preventif bakım",
        "Garanti sonrası destek",
        "Acil servis hizmeti",
      ],
      image: "/assets/images/tamirbakim.webp",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "alim-satim",
      icon: ShoppingCart,
      title: "Alım Satım",
      description: "2. el kombi ve beyaz eşya alım satım hizmetleri",
      features: [
        "2. el cihaz alımı",
        "Garantili 2. el cihaz satışı",
        "Uygun fiyatlı çözümler",
        "Yerinde değerleme",
        "Güvenilir ticaret",
      ],
      image: "/assets/images/alimsatim.webp",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: "yedek-parca",
      icon: ShoppingCart,
      title: "Yedek Parça",
      description: "Orijinal ve uygun fiyatlı yedek parça temini",
      features: [
        "Orijinal yedek parça",
        "Uygun fiyat garantisi",
        "Hızlı tedarik",
        "Garantili parçalar",
        "Geniş stok ağı",
      ],
      image: "/assets/images/yedekparca.webp",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      id: "klima",
      icon: Wind,
      title: "Klima Servisi",
      description: "Klima montaj, bakım, tamir ve gaz dolum hizmetleri",
      features: [
        "Klima montajı (split, inverter)",
        "Gaz dolum ve kaçak tespiti",
        "Filtre temizliği",
        "Klima bakımı",
        "Arıza onarımı",
      ],
      image: "/assets/images/klima.webp",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      id: "beyaz-esya",
      icon: WashingMachine,
      title: "Beyaz Eşya Servisi",
      description: "Çamaşır, bulaşık makinesi ve diğer beyaz eşya servisi",
      features: [
        "Çamaşır makinesi tamiri",
        "Bulaşık makinesi bakımı",
        "Kurutma makinesi servisi",
        "Yedek parça temini",
        "Ön kontrol ve arıza tespiti",
      ],
      image: "/assets/images/beyazesya.webp",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const brands = [
    "Vaillant",
    "Baymak",
    "Bosch",
    "Arçelik",
    "Vestel",
    "Demirdöküm",
    "Eca",
    "Ferroli",
    "Buderus",
    "Protherm",
    "Alarko",
    "Daikin",
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#0066FF] via-[#0052CC] to-[#00D9C0] overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Hizmetlerimiz
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Kombi, klima ve beyaz eşya konusunda tam teşekküllü servis hizmetleri
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-[#F8F9FA] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                id={service.id}
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    <img
                      src={service.image}
                      alt={`${service.title} - Erzurum Aras Teknik Servis`}
                      width="800"
                      height="400"
                      className="w-full h-[300px] sm:h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className={`absolute top-6 left-6 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0066FF]/10 rounded-full mb-4">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                    <span className="text-sm font-semibold text-[#0066FF]">Profesyonel Hizmet</span>
                  </div>

                  <h2 className="text-4xl font-bold text-[#1A1A2E] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 group">
                        <div className={`flex-shrink-0 w-6 h-6 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="tel:05304729010"
                    aria-label={`${service.title} için hemen ara: 0530 472 90 10`}
                    className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${service.gradient} text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300`}
                  >
                    <Phone className="w-5 h-5" />
                    <span>Hemen Ara</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#00D9C0]/10 text-[#00D9C0] rounded-full text-sm font-semibold mb-4">
              Çalıştığımız Markalar
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4">
              Tüm Markalarda
              <span className="block bg-gradient-to-r from-[#0066FF] to-[#00D9C0] bg-clip-text text-transparent">
                Uzman Servis
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Yerli ve yabancı tüm markaların yetkili servis hizmeti
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-center justify-center group cursor-pointer"
              >
                <span className="text-xl font-bold text-gray-700 group-hover:text-[#0066FF] transition-colors">
                  {brand}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-[#0066FF] to-[#00D9C0] relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Hizmetlerimiz Hakkında Detaylı Bilgi
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Size en uygun hizmeti sunabilmek için uzman ekibimiz 7/24 hazır
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:05304729010"
                className="group flex items-center gap-3 px-10 py-5 bg-white text-[#0066FF] rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <span>0530 472 90 10</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
