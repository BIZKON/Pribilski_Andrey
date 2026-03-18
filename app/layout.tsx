import type { Metadata } from 'next';
import { Playfair_Display, Raleway, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

const playfair = Playfair_Display({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-raleway',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ЦЕМОНИП | Защита интеллектуальной собственности',
  description: 'Мониторинг, выявление нарушений и судебная защита товарных знаков, патентов и авторских прав. Полный цикл — от обнаружения до взыскания компенсации.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${playfair.variable} ${raleway.variable} ${jetbrains.variable}`}>
      <body className="font-sans bg-black text-text-main antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-black">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/30 rounded-full blur-[120px] mix-blend-screen animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-600/30 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-cyan-600/30 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-4000" />
        </div>
        <Navbar />
        <main className="flex-grow pt-24 px-4 md:px-6 lg:px-8 pb-8 space-y-8">
          {children}
        </main>
        <div className="px-4 md:px-6 lg:px-8 pb-8">
          <Footer />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
