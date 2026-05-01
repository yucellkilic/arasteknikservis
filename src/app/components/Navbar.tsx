import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Ana Sayfa" },
    { path: "/hakkimizda", label: "Hakkımızda" },
    { path: "/hizmetler", label: "Hizmetler" },
    { path: "/hizmet-bolgeleri", label: "Bölgeler" },
    { path: "/blog", label: "Blog" },
    { path: "/sss", label: "SSS" },
    { path: "/iletisim", label: "İletişim" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-[36px] left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group" translate="no">
            <img
              src="/assets/images/logo.png"
              alt="Aras Teknik Servis"
              className="h-16 w-auto sm:h-[72px] object-contain py-1"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8" translate="no">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <span
                  className={`font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-[#0066FF]"
                      : "text-gray-700 hover:text-[#0066FF]"
                  }`}
                >
                  {link.label}
                </span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0066FF] to-[#00D9C0]"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:05304729010"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FF8A5C] text-white rounded-full font-medium shadow-lg hover:shadow-[0_0_20px_rgba(255,107,53,0.5)] transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>0530 472 90 10</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-t border-gray-200"
        >
          <div className="px-4 py-6 space-y-4" translate="no">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-[#0066FF]"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:05304729010"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FF8A5C] text-white rounded-full font-medium shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>0530 472 90 10</span>
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
