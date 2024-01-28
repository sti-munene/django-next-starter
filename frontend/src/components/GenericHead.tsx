import Head from "next/head";
import { useMemo } from "react";
import { useRouter } from "next/router";

type GenericHeadProps = {
  title?: string;
  description?: string;
  ogImageUrl?: string;
};

export function GenericHead({
  title = "Django Next Auth",
  description,
}: GenericHeadProps) {
  const router = useRouter();
  const domain = useMemo(() => {
    return "https://";
  }, []);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description || ""} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      {/* Open Graph Data (Social Media)   
      title: Link preview title
      image: Link preview image URL
      url: Canonical link preview URL => https://www.example.com/your-page-url
      description: A concise and informative description of your web page's content.

      */}
      <meta property="og:title" content="Django Next Auth" />
      <meta property="og:description" content={description || ""} />
      <meta property="og:image" content={domain + ""} />
      <meta property="og:url" content={domain + router.pathname} />
      {/* Facebook Meta Tags */}
      <meta property="og:url" content={domain} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Django Next Auth" />
      <meta property="og:description" content="" />
      <meta property="og:image" content={domain + ""} />
      {/*  Twitter Meta Tag */}
      <meta name="twitter:card" content={domain + ""} />
      <meta property="twitter:domain" content="" />
      <meta property="twitter:url" content={domain} />
      <meta name="twitter:title" content="Django Next Auth" />
      <meta name="twitter:description" content="" />
      <meta name="twitter:image" content={domain + ""} />
    </Head>
  );
}
