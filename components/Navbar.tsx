'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Главная' },
  { href: '/monitoring', label: 'Мониторинг' },
  { href: '/violations', label: 'Выявление нарушений' },
  { href: '/litigation', label: 'Судебная защита' },
  { href: '/deadlines', label: 'Контроль сроков' },
  { href: '/team', label: 'Команда' },
  { href: '/contacts', label: 'Контакты' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 lg:px-8 pt-4`}
    >
      <div className={`mx-auto transition-all duration-300 ${isScrolled ? 'glass-nav rounded-full px-6 py-3' : 'bg-transparent px-2 py-4'}`}>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gold-main/10 border border-gold-main/30 flex items-center justify-center group-hover:border-gold-main transition-colors">
              <span className="font-sans font-bold text-gold-main text-xl">IP</span>
            </div>
            <span className="font-sans font-bold text-xl tracking-wide text-text-main">ЦЕМОНИП</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <div className="relative group">
              <button className="text-sm font-medium text-text-muted hover:text-gold-main transition-colors py-2 flex items-center gap-1">
                Услуги
              </button>
              <div className="absolute top-full left-0 mt-4 w-64 glass-panel opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left scale-95 group-hover:scale-100">
                <div className="p-2 flex flex-col gap-1">
                  <Link href="/monitoring" className="px-4 py-3 text-sm text-text-muted hover:text-gold-main hover:bg-white/5 rounded-3xl transition-colors">Мониторинг</Link>
                  <Link href="/violations" className="px-4 py-3 text-sm text-text-muted hover:text-gold-main hover:bg-white/5 rounded-3xl transition-colors">Выявление нарушений</Link>
                  <Link href="/litigation" className="px-4 py-3 text-sm text-text-muted hover:text-gold-main hover:bg-white/5 rounded-3xl transition-colors">Судебная защита</Link>
                  <Link href="/deadlines" className="px-4 py-3 text-sm text-text-muted hover:text-gold-main hover:bg-white/5 rounded-3xl transition-colors">Контроль сроков</Link>
                </div>
              </div>
            </div>
            <Link href="/team" className="text-sm font-medium text-text-muted hover:text-gold-main transition-colors">Команда</Link>
            <Link href="/contacts" className="text-sm font-medium text-text-muted hover:text-gold-main transition-colors">Контакты</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:+74955322357" className="text-sm font-mono font-medium text-text-main hover:text-gold-main transition-colors">
              +7 (495) 532-23-57
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-text-main hover:text-gold-main transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-4 glass-panel lg:hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-medium px-4 py-2 rounded-3xl transition-colors ${
                    pathname === link.href ? 'bg-white/10 text-gold-main' : 'text-text-muted hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2 mx-4" />
              <a href="tel:+74955322357" className="text-lg font-mono font-medium text-gold-main px-4 py-2">
                +7 (495) 532-23-57
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
