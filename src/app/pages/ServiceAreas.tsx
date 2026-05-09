import { motion } from "motion/react";
import { MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";

export function ServiceAreas() {
  const areas = [
    {
      district: "Yakutiye",
      neighborhoods: [
        "Gez Mahallesi",
        "Kazımkarabekir",
        "Mumcu",
        "Şükrüpaşa",
        "Yunusemre",
        "Lalapaşa",
        "Cumhuriyet",
      ],
    },
    {
      district: "Palandöken",
      neighborhoods: [
        "Yenişehir",
        "Hilalkent",
        "Yoncalık",
        "Kayakyolu",
      ],
    },
    {
      district: "Aziziye",
      neighborhoods: [
        "Dadaşkent",
        "İlıca",
        "Organize Sanayi",
        "Yıldızkent",
        "Şahinkaya",
      ],
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Hızlı Ulaşım",
      description: "30-45 dakika içinde adresinizde",
    },
    {
      icon: CheckCircle2,
      title: "Tüm Bölgelere",
      description: "Erzurum genelinde hizmet",
    },
    {
      icon: Phone,
      title: "7/24 Ulaşılabilir",
      description: "Her an arayabilirsiniz",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#00D9C0] via-[#00B8A3] to-[#0066FF] overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute top-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
              <MapPin className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Erzurum Geneli</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Hizmet Bölgelerimiz
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Erzurum'un her noktasında yanınızdayız
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#0066FF] to-[#00D9C0] rounded-xl flex items-center justify-center shadow-lg">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A2E] mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-[#F8F9FA] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#0066FF]/10 text-[#0066FF] rounded-full text-sm font-semibold mb-4">
              Bölgelerimiz
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4">
              Erzurum'da
              <span className="block bg-gradient-to-r from-[#0066FF] to-[#00D9C0] bg-clip-text text-transparent">
                Her Yerdeyiz
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {areas.map((area, index) => (
              <motion.div
                key={area.district}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#00D9C0] rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A2E]">{area.district}</h3>
                </div>

                <div className="space-y-3">
                  {area.neighborhoods.map((neighborhood) => (
                    <div
                      key={neighborhood}
                      className="flex items-center gap-2 text-gray-700 hover:text-[#0066FF] transition-colors group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] group-hover:scale-150 transition-transform" />
                      <span className="font-medium">{neighborhood}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="relative h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1635433084393-c569daa8b0d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcnp1cnVtJTIwdHVya2V5JTIwY2l0eSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3Nzc0MDcyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Erzurum şehir manzarası - Aras Teknik Servis hizmet bölgesi"
                width="1080"
                height="500"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#00D9C0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-[#1A1A2E] mb-2">Adresimiz</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Gez Mahallesi, Alirıza Bey Sokak,<br />
                      Doğanay Apartmanı Altı No:1<br />
                      Yakutiye / Erzurum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-[#0066FF] to-[#00D9C0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Bölgenize Hizmet Veriyor muyuz?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Erzurum genelinde hizmet veriyoruz. Detaylı bilgi için bizi arayın.
            </p>

            <a
              href="tel:05304729010"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#0066FF] rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs text-gray-600">Hemen Ara</div>
                <div className="text-lg">0530 472 90 10</div>
              </div>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
