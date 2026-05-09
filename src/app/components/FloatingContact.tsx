import { Phone, MessageCircle, Instagram, X } from "lucide-react";
import { useState } from "react";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      icon: Phone,
      label: "Ara",
      href: "tel:05304729010",
      color: "bg-[#0066FF] hover:bg-[#0052CC]",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/905304729010",
      color: "bg-[#075E54] hover:bg-[#054c44]", // WCAG compliant dark green
      ariaLabel: "WhatsApp üzerinden teknik destek alın",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/arasteknikservis25",
      color: "bg-gradient-to-br from-purple-700 via-pink-700 to-orange-600 hover:opacity-90",
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen && (
        <div
          className="absolute bottom-20 right-0 flex flex-col gap-3 mb-2"
        >
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={contact.ariaLabel || contact.label}
              className={`${contact.color} text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 transition-all duration-300 backdrop-blur-sm hover:scale-105`}
            >
              <contact.icon className="w-5 h-5" />
              <span className="font-medium whitespace-nowrap">{contact.label}</span>
            </a>
          ))}
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "İletişim menüsünü kapat" : "Hemen Ara"}
        aria-expanded={isOpen}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? "bg-gray-900 hover:bg-gray-800"
            : "bg-gradient-to-r from-[#0066FF] to-[#00D9C0] hover:shadow-[0_0_30px_rgba(0,102,255,0.5)]"
        }`}
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <Phone className="w-7 h-7 text-white" />
        )}
      </button>
    </div>
  );
}
