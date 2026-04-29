import { Phone, MessageCircle, Instagram, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      icon: Phone,
      label: "Ara",
      href: "tel:05304729010",
      color: "bg-[#0066FF] hover:bg-[#0052CC]",
      delay: 0.1,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/905304729010",
      color: "bg-[#25D366] hover:bg-[#20BD5A]",
      delay: 0.15,
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/arasteknikservis25",
      color: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:opacity-90",
      delay: 0.2,
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-20 right-0 flex flex-col gap-3 mb-2"
          >
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ delay: contact.delay }}
                className={`${contact.color} text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 transition-all duration-300 backdrop-blur-sm`}
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <contact.icon className="w-5 h-5" />
                <span className="font-medium whitespace-nowrap">{contact.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? "bg-gray-900 hover:bg-gray-800"
            : "bg-gradient-to-r from-[#0066FF] to-[#00D9C0] hover:shadow-[0_0_30px_rgba(0,102,255,0.5)]"
        }`}
        whileHover={{ scale: 1.1, rotate: isOpen ? 90 : 0 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <Phone className="w-7 h-7 text-white animate-pulse" />
        )}
      </motion.button>
    </div>
  );
}
