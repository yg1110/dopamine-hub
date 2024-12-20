import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'dopamine-hub',
  description: 'dopamine-hub',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
