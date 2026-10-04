import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, image, url, type = "website" }) => {
  return (
    <Helmet>
      {/* Page Title */}
      <title>{title}</title>

      {/* Meta Description */}
      <meta name="description" content={description} />

      {/* Open Graph - Facebook, WhatsApp, etc. */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />

      {image && <meta property="og:image" content={image} />}

      {url && <meta property="og:url" content={url} />}

      {/* Canonical URL */}
      {url && <link rel="canonical" href={url} />}
    </Helmet>
  );
};

export default SEO;
