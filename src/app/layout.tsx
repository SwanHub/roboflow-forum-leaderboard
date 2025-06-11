import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased" style={{ fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
