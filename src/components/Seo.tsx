import Head from "next/head";

export function Seo() {
  return (
    <>
      <Head>
        <title>Saint Seiya API | Free REST API for Cavaleiros do Zodíaco</title>
        <meta
          name="description"
          content="Free and open-source API with data from Saint Seiya (Cavaleiros do Zodíaco). Access Bronze Saints, Gold Saints, Specters, and more!"
        />
        <meta
          name="keywords"
          content="Saint Seiya API, Cavaleiros do Zodíaco API, Anime API, Bronze Saints, Gold Saints, Specters, REST API, GraphQL, Swagger, Free API"
        />
        <meta name="author" content="Felipe Freitas" />
        <meta property="og:title" content="Saint Seiya API" />
        <meta
          property="og:description"
          content="Explore the world of Saint Seiya through a powerful free API."
        />
        <meta property="og:url" content="https://www.saintseiyaapi.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.saintseiyaapi.com/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Saint Seiya API" />
        <meta
          name="twitter:description"
          content="Explore the Saint Seiya universe with a free public API."
        />
        <meta
          name="twitter:image"
          content="https://www.saintseiyaapi.com/og-image.png"
        />
        <link rel="canonical" href="https://www.saintseiyaapi.com/" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Saint Seiya API",
            url: "https://www.saintseiyaapi.com",
            description:
              "Free and open-source REST API with data from the Saint Seiya universe (Cavaleiros do Zodíaco).",
            sameAs: [
              "https://github.com/felipefreitasa",
              "https://medium.com/@felipefreitasa",
            ],
          }),
        }}
      />
    </>
  );
}
