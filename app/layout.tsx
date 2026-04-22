import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sinan's Tyres | Bristol's Premier Tyre & Auto Service",
  description:
    "Expert tyre fitting, wheel alignment, brake pads, servicing and exhaust repair in Redfield, Bristol. Call 07413 837418 for same-day service.",
  keywords:
    "tyres Bristol, tyre fitting Redfield, wheel alignment Bristol, brake pads Bristol, car servicing Bristol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&f[]=general-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
