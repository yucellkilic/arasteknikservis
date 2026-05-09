export function Marquee() {
  const text =
    "🛠️ 7/24 Acil Erzurum Kombi & Beyaz Eşya Servisi 🛠️ Hızlı ve Güvenilir Çözüm 🛠️ Garantili İşçilik";

  return (
    <div
      className="fixed top-0 left-0 right-0 w-full bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#0052CC] overflow-hidden py-2 z-50"
      translate="no"
    >
      <div className="marquee-track">
        <span className="marquee-content text-white text-sm font-semibold tracking-wide whitespace-nowrap">
          {text}
          <span className="mx-16">{text}</span>
          <span className="mx-16">{text}</span>
          <span className="mx-16">{text}</span>
        </span>
      </div>
    </div>
  );
}
