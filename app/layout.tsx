import type { Metadata } from 'next';
import { AuthProvider } from '../app/context/AuthContext';
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
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}