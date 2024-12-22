import './globals.css';

import type { Metadata } from 'next';

import Provider from './Provider';

export const metadata: Metadata = {
  title: 'dopamine-hub',
  description: 'dopamine-hub',
};

type Props = {
  children: React.ReactNode;
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
