import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const sansFont = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AIYOGA — 奥克兰高端瑜伽普拉提馆',
  description:
    'AIYOGA 是奥克兰顶级的瑜伽与普拉提静修空间，East Tamaki 与 Albany 两家门店提供流瑜伽、阴瑜伽与普拉提床课程。呼吸、流动、蜕变。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className={`${displayFont.variable} ${sansFont.variable}`}>
      <body className="font-sans antialiased bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
