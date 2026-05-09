import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import { SEO } from "../components/SEO";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F8F9FA] to-white relative overflow-hidden">
      <SEO title="404 Sayfa Bulunamadı - Aras Teknik Servis" description="Aradığınız sayfa bulunamadı." />
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[#0066FF]/10 to-[#00D9C0]/10 rounded-full blur-3xl"
        />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8A5C]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
        >
          <div
            className="mb-8"
          >
            <h1 className="text-[150px] lg:text-[200px] font-bold leading-none bg-gradient-to-r from-[#0066FF] via-[#00D9C0] to-[#FF6B35] bg-clip-text text-transparent">
              404
            </h1>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A2E] mb-4">
            Sayfa Bulunamadı
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-lg mx-auto">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#00D9C0] text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              <span>Ana Sayfaya Dön</span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0066FF] border-2 border-[#0066FF] rounded-2xl font-semibold shadow-lg hover:bg-[#0066FF] hover:text-white hover:scale-105 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Geri Dön</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
