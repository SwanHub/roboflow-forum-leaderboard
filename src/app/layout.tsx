import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Roboflow Forum Leaderboard",
  description:
    "Leaderboard of the most active and helpful contributors to Roboflow community forum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9780NSMYQN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-9780NSMYQN');
          `}
        </Script>
      </head>
      <body className="antialiased" style={{ fontFamily: "Inter, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
