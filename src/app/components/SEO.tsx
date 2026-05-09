import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
}

export function SEO({ title, description, keywords, canonicalUrl }: SEOProps) {
  const defaultKeywords = "Erzurum kombi servisi, Erzurum klima servisi, Erzurum beyaz eşya tamiri, kombi bakımı Erzurum, şofben tamiri Erzurum, 7/24 teknik servis Erzurum, Aras Teknik Servis";
  const siteUrl = "https://arasteknikerzurum.com.tr";

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
