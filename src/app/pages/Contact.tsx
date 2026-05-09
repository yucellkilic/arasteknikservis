import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Merhaba, web sitenizden ulaşıyorum.%0AAdım: ${formData.name}%0ATelefonum: ${formData.phone}%0AE-posta: ${formData.email || 'Belirtilmedi'}%0AHizmet Türü: ${formData.service || 'Belirtilmedi'}%0AMesajım: ${formData.message}`;
    const whatsappUrl = `https://wa.me/905304729010?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      details: ["0530 472 90 10", "0535 200 05 70", "0542 353 09 92"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: MapPin,
      title: "Adres",
      details: [
        "Gez Mahallesi, Alirıza Bey Sokak,",
        "Doğanay Apartmanı Altı No:1",
        "Yakutiye / Erzurum",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      details: ["7 Gün 24 Saat", "Hizmetinizdeyiz"],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const services = [
    "Kombi Servisi",
    "Şofben Servisi",
    "Klima Servisi",
    "Beyaz Eşya Servisi",
    "Genel Bakım",
    "Yedek Parça",
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#0066FF] via-[#00D9C0] to-[#0066FF] overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, 360, 0] }}
            transition={{ duration: 30, repeat: Infinity }}
            className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.3, 1, 1.3], rotate: [360, 0, 360] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              İletişim
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Size nasıl yardımcı olabiliriz? Bize ulaşın!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, i) => {
                    const isPhone = info.title === "Telefon";
                    const phoneUrl = isPhone ? `tel:+90${detail.replace(/\s+/g, '')}` : undefined;
                    return isPhone ? (
                      <a
                        key={i}
                        href={phoneUrl}
                        className="block text-gray-600 hover:text-[#0066FF] transition-colors"
                      >
                        {detail}
                      </a>
                    ) : (
                      <p key={i} className="text-gray-600">
                        {detail}
                      </p>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-[#F8F9FA] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
                <h2 className="text-3xl font-bold text-[#1A1A2E] mb-2">
                  Bize Ulaşın
                </h2>
                <p className="text-gray-600 mb-8">
                  Formu doldurun, en kısa sürede size dönüş yapalım
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Adınız Soyadınız
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="Adınız ve soyadınız"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="0530 XXX XX XX"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        E-posta
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Hizmet Türü
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all bg-gray-50 focus:bg-white"
                      required
                    >
                      <option value="">Seçiniz...</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                      placeholder="Arıza detayları veya sorularınızı yazın..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    aria-label="Formu WhatsApp üzerinden gönder"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00D9C0] text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                  >
                    <Send className="w-5 h-5" />
                    <span>Gönder</span>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map & Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <div className="relative h-[400px]">
                  <img
                    src="https://images.unsplash.com/photo-1635433084393-c569daa8b0d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcnp1cnVtJTIwdHVya2V5JTIwY2l0eSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3Nzc0MDcyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Erzurum şehir manzarası - Aras Teknik Servis hizmet bölgesi"
                    width="1080"
                    height="400"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#00D9C0] rounded-xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-[#1A1A2E] mb-2">Adresimiz</h3>
                          <p className="text-gray-700 leading-relaxed text-sm">
                            Gez Mahallesi, Alirıza Bey Sokak,<br />
                            Doğanay Apartmanı Altı No:1<br />
                            Yakutiye / Erzurum
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF8A5C] rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden">
                <div className="absolute inset-0">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"
                  />
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Acil Durum?</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Acil arıza durumlarında hemen bizi arayın. 7/24 hizmetinizdeyiz!
                  </p>

                  <div className="space-y-3">
                    <a
                      href="tel:05304729010"
                      className="flex items-center gap-3 w-full px-6 py-4 bg-white text-[#FF6B35] rounded-xl font-bold shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <Phone className="w-5 h-5" />
                      <span>0530 472 90 10</span>
                    </a>

                    <a
                      href="https://wa.me/905304729010"
                      className="flex items-center gap-3 w-full px-6 py-4 bg-[#25D366] text-white rounded-xl font-bold shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0066FF] to-[#00D9C0] rounded-3xl p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Diğer İletişim Numaralarımız
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Meşgul olduğumuzda alternatif numaralarımızdan bize ulaşabilirsiniz
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                <a
                  href="tel:05352000570"
                  className="px-8 py-4 bg-white text-[#0066FF] rounded-2xl font-bold shadow-xl hover:scale-105 transition-all duration-300"
                >
                  0535 200 05 70
                </a>
                <a
                  href="tel:05423530992"
                  className="px-8 py-4 bg-white text-[#0066FF] rounded-2xl font-bold shadow-xl hover:scale-105 transition-all duration-300"
                >
                  0542 353 09 92
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
