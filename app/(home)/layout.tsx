import './globals.css';

import type { Metadata, Viewport } from 'next';

import Provider from '../Provider';

export const metadata: Metadata = {
  title: 'dopamine-hub',
  description: 'dopamine-hub',
};

type Props = {
  children: React.ReactNode;
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
