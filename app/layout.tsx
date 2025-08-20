import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NutriTrack',
  description: 'Track your nutrition and health',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
