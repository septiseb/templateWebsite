import React from 'react';

export default function SEO ({
  title,
  description,
  keywords,
  author,
  image,
  url,
  businessName,
  address,
  phone,
  geo,
  openingHours,
  socialLinks,
}) {
  return (
    <>
      {/* Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph (OG) Meta Tags for Social Media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* JSON-LD Schema Markup for Local Business */}
      <script type="application/ld+json">
        {{
          "@context": "http://schema.org",
          "@type": "LocalBusiness",
          "name": businessName,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": address.streetAddress,
            "addressLocality": address.addressLocality,
            "addressRegion": address.addressRegion,
            "postalCode": address.postalCode,
            "addressCountry": address.addressCountry
          },
          "telephone": phone,
          "url": url,
          "image": image,
          "description": description,
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": geo.latitude,
            "longitude": geo.longitude
          },
          "openingHours": openingHours,
          "sameAs": socialLinks
        }}
      </script>
    </>
  );
};


