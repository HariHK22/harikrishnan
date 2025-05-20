import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Harikrishnan</title>
        <link rel="shortcut icon" href="/HK.png" />
        <meta
          name="description"
          content="Harikrishnan | IoT Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Harikrishnan | IoT Developer"
        />
        <meta name="description" content="Hey! I'm Harikrishnan" />

        <meta
          property="og:title"
          content="Harikrishnan | IoT Developer"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta
          property="og:image"
          content=""
        />
        <meta property="og:description" content="Hey! I'm Harikrishnan" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@joseboschero" />
        <meta
          name="twitter:title"
          content="Harikrishnan | IoT Developer"
        />
        <meta name="twitter:description" content="Hey! I'm Harikrishnan" />
        <meta name="twitter:creator" content="" />
        <meta
          name="twitter:image"
          content=""
        />
      </Head>
      <Home />
    </>
  );
}
