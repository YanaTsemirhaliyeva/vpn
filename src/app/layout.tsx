import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Погнали',
  description: 'Сервис для поиска попутчиков в путешествиях',
  keywords: ['поиск', 'попутчик', 'путешествие', 'сервис', 'мир', 'маршрут'],
  creator: 'LigaA interns',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <head>
        <link rel='icon' type='image/svg+xml' href='/pognali.svg' />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
