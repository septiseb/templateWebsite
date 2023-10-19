
import Head from 'next/head';
import React from 'react';

const addJsonLd = (business) => {
const businessSchema = `
{
  "@context": "http://schema.org",
  "@type": "LocalBusiness",
  "name": "${business.businessName}",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "${business.address.streetAddress}",
    "addressLocality": "${business.address.addressLocality}",
    "addressRegion": "${business.address.addressRegion}",
    "postalCode": "${business.address.postalCode}",
    "addressCountry": "${business.address.addressCountry}"
  },
  "telephone": "${business.phone}",
  "url": "${business.url}",
  "image": "${business.image}",
  "description": "${business.description}",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "${business.geo.latitude}",
    "longitude": "${business.geo.longitude}"
  },
  "openingHours": "${business.openingHours}",
  "sameAs": ${JSON.stringify(business.socialLinks)},
  "owns": [${business.features?.map(feature => (`{
    "@type": "Product",
    "name": "${feature.name}",
    "description": "${feature.description}"
    "offers": {
      "@type": "Offer",
      "price": "00.00",
      "priceCurrency": "MX",
      "availability": "http://schema.org/InStock"
  }
  }`))}],
  "review": [${business.testimonials?.map(testimonial => (`{
    "@type": "Review",
    "author": "${testimonial.author.name}",
    "datePublished": "${testimonial.date}",
    "description": "${testimonial.description}",
    "rating": {
      "@type": "Rating",
      "bestRating": "5",
      "worstRating": "1",
      "ratingValue": "${testimonial.rating}"
    }
  }`))}],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "4",
    "bestRating": "5",
    "worstRating": "1"
  }
}`;

// Then you can use businessSchema in your component as needed.

 return {__html:businessSchema}
 
}

export default function SEO ({
 business
}) {
  return (
    <Head>
      {/* Meta Tags */}
      <title>{business.title}</title>
      <meta name="description" content={business.description} />
      <meta name="keywords" content={business.keywords} />
      <meta name="author" content={business.author} />

      {/* Open Graph (OG) Meta Tags for Social Media */}
      <meta property="og:title" content={business.title} />
      <meta property="og:description" content={business.description} />
      <meta property="og:image" content={business.image} />
      <meta property="og:url" content={business.url} />
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd(business)}
          key="product-jsonld"
        />
    </Head>
  );
};


