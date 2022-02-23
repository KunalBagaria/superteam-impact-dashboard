import Head from 'next/head';

export const DefaultHead = () => (
  <Head>
    <title>SuperteamDAO Impact Dashboard</title>
    <meta name="description" content="Superteam's impact on the Solana ecosystem" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.png" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://impact.superteam.fun" />
    <meta property="og:title" content="SuperteamDAO Impact Dashboard" />
    <meta property="og:description" content="Superteam's impact on the Solana ecosystem" />
    {/* change this later */}
    <meta property="og:image" content="https://i.imgur.com/KmArkjU.gif" />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://impact.superteam.fun" />
    <meta property="twitter:title" content="SuperteamDAO Impact Dashboard" />
    <meta property="twitter:description" content="Superteam's impact on the Solana ecosystem" />
    {/* change this later */}
    <meta property="twitter:image" content="https://i.imgur.com/KmArkjU.gif" />
  </Head>
);