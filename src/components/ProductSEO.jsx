import { Helmet } from "react-helmet-async";

const ProductSEO = ({ product }) => {
  if (!product) return null;

  const productUrl = `https://himalayascraftnepal.com/product/${product._id}`;

  const price = Number(product.price);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",

    name: product.name,

    description: product.description,

    image: product.images[0],

    category: product.category,

    offers: {
      "@type": "Offer",

      url: productUrl,

      priceCurrency: "USD",

      price: price,

      availability:
        Number(product.stock) > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
    },
  };

  return (
    <Helmet>
      {/* SEO Title */}
      <title>{product.name} | Handmade Nepalese Singing Bowls</title>

      {/* Meta Description */}
      <meta
        name="description"
        content={`Buy ${product.name}, handcrafted in Nepal. Authentic ${product.material || "traditional"} singing bowl available online.`}
      />

      {/* Canonical */}
      <link rel="canonical" href={productUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={product.name} />

      <meta property="og:description" content={product.description} />

      <meta property="og:image" content={product.image} />

      <meta property="og:url" content={productUrl} />

      <meta property="og:type" content="product" />

      {/* Product Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default ProductSEO;
