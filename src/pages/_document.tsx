import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
        <title>DexBlaze | Blazingly fast trading</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="DexBlaze | Blazingly fast trading" />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
