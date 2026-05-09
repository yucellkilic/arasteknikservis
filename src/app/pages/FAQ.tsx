import { motion } from "motion/react";
import { ChevronDown, HelpCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Genel",
      questions: [
        {
          q: "Servis ücretleriniz nedir?",
          a: "Servis ücretlerimiz işlemin türüne, cihazın markasına ve arızanın durumuna göre değişiklik göstermektedir. Ücretsiz ön görüşme için bizi arayabilir, size detaylı bilgi verebiliriz.",
        },
        {
          q: "Acil servise ne kadar sürede gelirsiniz?",
          a: "Erzurum merkez ve çevre ilçelere ortalama 30-45 dakika içinde ulaşıyoruz. Acil durumlar için öncelik veriyoruz.",
        },
        {
          q: "7/24 hizmet veriyor musunuz?",
          a: "Evet, hafta içi ve hafta sonu, gece gündüz demeden 7/24 hizmetinizdeyiz. İhtiyacınız olduğu her an bizi arayabilirsiniz.",
        },
        {
          q: "Hangi bölgelere hizmet veriyorsunuz?",
          a: "Erzurum genelinde, Yakutiye, Palandöken ve Aziziye ilçelerinin tüm mahallelerine hizmet veriyoruz.",
        },
      ],
    },
    {
      category: "Kombi & Şofben",
      questions: [
        {
          q: "Kombi bakımı ne sıklıkla yapılmalı?",
          a: "Kombinizin verimli çalışması için yılda en az bir kez, tercihen ısınma sezonundan önce bakım yaptırmanız önerilir.",
        },
        {
          q: "Hangi markaların servisini yapıyorsunuz?",
          a: "Vaillant, Baymak, Bosch, Arçelik, Vestel, Demirdöküm, Eca, Ferroli, Buderus, Protherm, Alarko ve tüm yerli/yabancı markaların servisini yapıyoruz.",
        },
        {
          q: "Kombi arızalandığında ne yapmalıyım?",
          a: "Öncelikle cihazı kapatın ve bizi arayın. Telefonla yapabileceğiniz basit kontrolleri anlatabiliriz. Gerekirse hemen teknik ekibimizi göndeririz.",
        },
        {
          q: "Yedek parça garanti süreniz ne kadar?",
          a: "Tüm orijinal yedek parçalarımız için 1 yıl garanti vermekteyiz.",
        },
      ],
    },
    {
      category: "Klima",
      questions: [
        {
          q: "Klima montajı ne kadar sürer?",
          a: "Standart split klima montajı ortalama 2-3 saat sürmektedir. Daha büyük sistemler için süre değişebilir.",
        },
        {
          q: "Klima gaz dolumu ne zaman gerekir?",
          a: "Klimanız yeterince soğutmuyorsa, buzlanma varsa veya gürültülü çalışıyorsa gaz dolumu gerekebilir. Uzmanlarımız kontrol ederek size bilgi verir.",
        },
        {
          q: "Klima bakımı neden önemlidir?",
          a: "Düzenli bakım klimanızın verimli çalışmasını sağlar, elektrik tüketimini azaltır ve cihazınızın ömrünü uzatır. Ayrıca sağlıklı hava için filtre temizliği çok önemlidir.",
        },
      ],
    },
    {
      category: "Beyaz Eşya",
      questions: [
        {
          q: "Çamaşır makinesi tamir süresi ne kadardır?",
          a: "Çoğu arıza aynı gün içinde çözülür. Yedek parça beklemesi gereken durumlarda 2-3 gün sürebilir.",
        },
        {
          q: "Eski cihazımı tamir ettirmeli miyim yoksa yeni mi almalıyım?",
          a: "Uzman ekibimiz cihazınızı inceledikten sonra size en ekonomik çözümü önerir. Bazen tamir, bazen yeni cihaz daha mantıklı olabilir.",
        },
        {
          q: "2. el cihaz alım yapıyor musunuz?",
          a: "Evet, çalışır durumda olan beyaz eşya ve kombi cihazlarınızı değerlendirerek alım yapıyoruz.",
        },
      ],
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#0066FF] via-[#00D9C0] to-[#FF6B35] overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute top-10 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute bottom-10 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
              <HelpCircle className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Sık Sorulan Sorular</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              SSS
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Merak ettiğiniz her şey burada. Cevabını bulamadıysanız bizi arayın!
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-[#F8F9FA] to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#0066FF] to-[#00D9C0] rounded-full" />
                  <h2 className="text-3xl font-bold text-[#1A1A2E]">{category.category}</h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const globalIndex = categoryIndex * 10 + index;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <motion.div
                        key={faq.q}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          aria-label={`${faq.q} - ${isOpen ? "Cevabı gizle" : "Cevabı göster"}`}
                          aria-expanded={isOpen}
                          className="w-full px-6 py-6 flex items-start gap-4 text-left hover:bg-gray-50 transition-colors"
                        >
                          <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            isOpen
                              ? "bg-gradient-to-br from-[#0066FF] to-[#00D9C0]"
                              : "bg-gray-100"
                          }`}>
                            <CheckCircle2 className={`w-5 h-5 transition-colors ${
                              isOpen ? "text-white" : "text-gray-400"
                            }`} />
                          </div>

                          <div className="flex-1">
                            <h3 className={`text-lg font-bold transition-colors ${
                              isOpen ? "text-[#0066FF]" : "text-[#1A1A2E]"
                            }`}>
                              {faq.q}
                            </h3>
                          </div>

                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0"
                          >
                            <ChevronDown className={`w-6 h-6 transition-colors ${
                              isOpen ? "text-[#0066FF]" : "text-gray-400"
                            }`} />
                          </motion.div>
                        </button>

                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pl-[4.5rem]">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-[#0066FF] via-[#0052CC] to-[#00D9C0] rounded-3xl p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
                />
              </div>

              <div className="relative z-10">
                <HelpCircle className="w-16 h-16 text-white mx-auto mb-6" />
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Hala Sorunuz mu Var?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Merak ettiğiniz konularda size yardımcı olmaktan mutluluk duyarız.
                  Hemen bizi arayın!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:05304729010"
                    className="px-8 py-4 bg-white text-[#0066FF] rounded-2xl font-bold shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    0530 472 90 10
                  </a>
                  <a
                    href="https://wa.me/905304729010"
                    className="px-8 py-4 bg-[#25D366] text-white rounded-2xl font-bold shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    WhatsApp ile Yazın
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
