import { Link } from "react-router";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: "Ana Sayfa" },
    { path: "/hakkimizda", label: "Hakkımızda" },
    { path: "/hizmetler", label: "Hizmetler" },
    { path: "/iletisim", label: "İletişim" },
  ];

  const services = [
    "Kombi Tamir",
    "Klima Bakım",
    "Şofben Servisi",
    "Beyaz Eşya Tamir",
    "Yedek Parça",
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/arasteknikservis25", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/share/1JxXoDH9Ly/?mibextid=wwXlfr", label: "Facebook" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#1A1A2E] via-[#252545] to-[#1A1A2E] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#00D9C0] flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">AT</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Aras Teknik Servis</h3>
                <p className="text-sm text-gray-400">7/24 Hızlı Çözüm</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Erzurum'da 20 yıllık deneyimimizle kombi, klima ve beyaz eşya servisi hizmeti sunuyoruz.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0066FF] flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-6 text-[#00D9C0]">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#0066FF] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] group-hover:w-3 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-6 text-[#00D9C0]">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-6 text-[#00D9C0]">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="tel:05304729010" className="hover:text-[#0066FF] transition-colors block">
                    0530 472 90 10
                  </a>
                  <a href="tel:05352000570" className="hover:text-[#0066FF] transition-colors block">
                    0535 200 05 70
                  </a>
                  <a href="tel:05423530992" className="hover:text-[#0066FF] transition-colors block">
                    0542 353 09 92
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Gez Mahallesi, Alirıza Bey Sokak,<br />
                  Doğanay Apartmanı Altı No:1<br />
                  Yakutiye / Erzurum
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">7/24 Hizmetinizdeyiz</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Aras Teknik Servis. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#0066FF] transition-colors">Gizlilik Politikası</a>
              <a href="#" className="hover:text-[#0066FF] transition-colors">Kullanım Koşulları</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
