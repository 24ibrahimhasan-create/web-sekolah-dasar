import type {Metadata} from 'next';
import {Plus_Jakarta_Sans} from 'next/font/google';
import './globals.css'; // Global styles

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'UPTD SD Inpres 2 Bira - Website Profil Sekolah',
  description: 'Website profil sekolah dasar modern, ramah anak, dan informatif untuk UPTD SD Inpres 2 Bira.',
  openGraph: {
    title: 'UPTD SD Inpres 2 Bira - Website Profil Sekolah',
    description: 'Website profil sekolah dasar modern, ramah anak, dan informatif untuk UPTD SD Inpres 2 Bira.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UPTD SD Inpres 2 Bira - Website Profil Sekolah',
    description: 'Website profil sekolah dasar modern, ramah anak, dan informatif untuk UPTD SD Inpres 2 Bira.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased text-slate-800 bg-slate-50 selection:bg-amber-100 selection:text-blue-900">{children}</body>
    </html>
  );
}
