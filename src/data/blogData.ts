export interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  gradient: string;
}

export const blogPosts: BlogPostData[] = [
  {
    slug: "kombi-bakimi-ne-zaman-yapilmali",
    title: "Kombi Bakımı Ne Zaman Yapılmalı?",
    excerpt: "Kombinizin verimli çalışması ve uzun ömürlü olması için düzenli bakım şarttır. Peki kombi bakımı ne zaman yapılmalı?",
    content: `Kombinizin verimli ve güvenli bir şekilde çalışabilmesi için periyodik bakımı hayati önem taşır. Uzmanlara göre, kombi bakımının yılda en az bir kez yapılması gerekmektedir. En ideal zaman dilimi ise sonbahar aylarıdır, yani kış gelip havalar soğumadan hemen öncesi.

Bakım sırasında filtreler temizlenir, ateşleme sistemi kontrol edilir ve genel tesisat basıncı ayarlanır. Bu sayede hem doğalgaz faturanızdan tasarruf edersiniz hem de kışın ortasında ani arızalarla karşılaşma riskiniz minimuma iner. Aras Teknik Servis olarak, profesyonel ekipmanlarla detaylı kombi bakımı sunuyoruz.`,
    date: "15 Nisan 2026",
    author: "Aras Teknik",
    category: "Kombi",
    image: "/assets/kombi.webp",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    slug: "klima-bakiminin-onemi",
    title: "Klima Bakımının Önemi",
    excerpt: "Klimanızın uzun ömürlü olması ve verimli çalışması için düzenli bakım gereklidir. İşte klima bakımının önemi...",
    content: `Klimalar, özellikle yaz aylarında sürekli çalışan ve ortam havasını sirküle eden cihazlardır. Klima bakımının en büyük önemi sağlığınızla ilgilidir. Temizlenmeyen filtrelerde biriken toz, bakteri ve mantarlar lejyoner hastalığı gibi solunum yolu rahatsızlıklarına neden olabilir.

Ayrıca, bakımı yapılmayan bir klima soğutma işlemini yerine getirebilmek için daha fazla enerji harcar. Yılda iki kez (yaz ve kış başlangıcında) yaptıracağınız detaylı klima bakımı ile cihazınızın ömrünü uzatabilir, enerji tasarrufu sağlayabilir ve sağlıklı bir havaya kavuşabilirsiniz.`,
    date: "12 Nisan 2026",
    author: "Aras Teknik",
    category: "Klima",
    image: "/assets/klima.webp",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    slug: "sofben-arizalari-ve-cozumleri",
    title: "Şofben Arızaları ve Çözümleri",
    excerpt: "Şofben arızaları günlük hayatı olumsuz etkiler. En sık karşılaşılan şofben arızaları ve çözüm yolları...",
    content: `Sıcak su ihtiyacımızı karşılayan şofbenler bazen beklenmedik arızalar verebilir. En sık karşılaşılan sorunlardan biri şofbenin suyu ısıtmamasıdır. Bu durum genellikle diyafram contası arızasından, gaz valfi problemlerinden veya kireçlenmeden kaynaklanabilir.

Bir diğer yaygın sorun ise şofbenin su sızdırmasıdır; bu da bağlantı noktalarındaki aşınmalardan kaynaklanır. Elektrikli ve gazlı şofbenlerde arızaya müdahale etmek tehlikeli olabileceğinden, kesinlikle profesyonel destek alınmalıdır. Aras Teknik Servis olarak her türlü şofben arızasına hızlı ve kalıcı çözümler üretiyoruz.`,
    date: "8 Nisan 2026",
    author: "Aras Teknik",
    category: "Şofben",
    image: "/assets/sofben.webp",
    gradient: "from-orange-500 to-red-500",
  },
  {
    slug: "beyaz-esya-bakim-rehberi",
    title: "Beyaz Eşya Bakım Rehberi",
    excerpt: "Çamaşır ve bulaşık makinelerinizin uzun ömürlü olması için yapmanız gerekenler...",
    content: `Evinizin en büyük yardımcıları olan beyaz eşyaların bakımı, cihazların kullanım ömrünü uzatmak için çok önemlidir. Çamaşır makinelerinde tambur temizliğini düzenli yapmak ve lastik kısımlarda biriken suları kurulamak koku ve bakteri oluşumunu engeller.

Bulaşık makinelerinde ise filtre temizliği bir numaralı önceliktir. Ayda bir kez filtreyi çıkarıp yıkamak bulaşıklarınızın daha temiz çıkmasını sağlar. Buzdolaplarında kapak lastiklerinin silinmesi ve yılda bir arka motor kısmının tozdan arındırılması soğutma performansını artırır.`,
    date: "5 Nisan 2026",
    author: "Aras Teknik",
    category: "Beyaz Eşya",
    image: "/assets/beyazesya.webp",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    slug: "erzurumda-kis-hazirligi",
    title: "Erzurum'da Kış Hazırlığı",
    excerpt: "Erzurum'un sert kış şartlarına karşı evinizi nasıl hazırlamalısınız? İşte ipuçları...",
    content: `Erzurum'un uzun ve çetin geçen kış aylarında evinizin ısınması ve cihazlarınızın sorunsuz çalışması büyük önem taşır. Kışa girmeden önce mutlaka radyatörlerinizin havasını almalı ve petek temizliğinizi yaptırmalısınız. İçerisinde balçık biriken petekler, kombi ne kadar yanarsa yansın yeterli ısıyı yayamaz.

Ayrıca su tesisatlarında donmayı önlemek için yalıtım yapılması ve kombinin donma koruması (anti-freeze) özelliğinin aktif olup olmadığının kontrol edilmesi gerekir. Profesyonel kış hazırlığı için ekibimizden destek isteyebilirsiniz.`,
    date: "1 Nisan 2026",
    author: "Aras Teknik",
    category: "Genel",
    image: "/assets/nedenbiz.webp",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    slug: "enerji-tasarrufu-ipuclari",
    title: "Enerji Tasarrufu İpuçları",
    excerpt: "Kombi ve klimanızı kullanırken enerji tasarrufu yapmanın yolları...",
    content: `Evde kullanılan iklimlendirme cihazları, enerji tüketiminde büyük paya sahiptir. Enerji tasarrufu sağlamak için oda termostatı veya termostatik vana kullanılması şiddetle tavsiye edilir. Oda sıcaklığını sadece 1 derece düşürmek bile faturanızda %6 civarında tasarruf sağlar.

Klima kullanımında ise ideal soğutma derecesinin 23-24°C olduğunu unutmayın. Klimayı çok düşük bir sıcaklığa ayarlamak odayı daha hızlı soğutmaz, aksine daha çok enerji israfına yol açar. Ayrıca güneşliklerin kapatılması ve doğru cihaz kapasitesi seçimi de tasarruf için elzemdir.`,
    date: "28 Mart 2026",
    author: "Aras Teknik",
    category: "Genel",
    image: "/assets/hakkimizda.webp",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    slug: "kombi-su-basinci-nasil-ayarlanir",
    title: "Kombi Su Basıncı Nasıl Ayarlanır?",
    excerpt: "Kombi su basıncının ideal seviyede olması ne demektir ve basınç düştüğünde ne yapmalı?",
    content: `Kombinizin düzgün çalışabilmesi için tesisat içerisindeki su basıncının genelde 1.5 bar seviyesinde olması gerekmektedir. Eğer bar seviyesi 1.0'in altına düşerse cihaz güvenlik moduna geçebilir ve çalışmayı durdurabilir. 

Basınç düştüğünde, kombinin alt kısmında bulunan su doldurma musluğunu yavaşça sola doğru çevirerek ibre 1.5 ile 2.0 bar arasına gelene kadar su takviyesi yapın. Eğer bar seviyesi sürekli olarak düşüyorsa tesisatınızda gizli bir kaçak olabilir. Böyle bir durumda zaman kaybetmeden uzman bir teknisyen çağırmanız gerekir.`,
    date: "20 Mart 2026",
    author: "Aras Teknik",
    category: "Kombi",
    image: "/assets/kombi.webp",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    slug: "orijinal-yedek-parca-onemi",
    title: "Orijinal Yedek Parça Kullanımının Önemi",
    excerpt: "Tamir işlemlerinde yan sanayi parça yerine orijinal yedek parça kullanmanın avantajları.",
    content: `Elektronik ve mekanik cihazlarda yapılan tamirlerde orijinal yedek parça kullanımı cihaz ömrü için en kritik faktörlerden biridir. Yan sanayi parçalar ilk etapta daha uygun maliyetli gibi görünse de, dayanıklılıkları ve uyumlulukları düşük olduğu için kısa sürede tekrar arıza yapma ihtimalleri çok yüksektir.

Orijinal parçalar doğrudan üretici tarafından o cihazın teknik özelliklerine uygun olarak test edilip onaylandığı için tam uyum sağlar ve diğer sağlam parçalara zarar vermez. Aras Teknik Servis olarak, yaptığımız tüm değişimlerde sertifikalı orijinal yedek parçalar kullanıyor ve 1 yıl garanti sunuyoruz.`,
    date: "15 Mart 2026",
    author: "Aras Teknik",
    category: "Genel",
    image: "/assets/yedekparca.webp",
    gradient: "from-yellow-500 to-amber-500",
  }
];
