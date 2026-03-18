import Link from 'next/link';

export function Footer() {
  return (
    <footer className="glass-panel pt-16 pb-8 px-8">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6 md:items-center md:text-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gold-main/10 border border-gold-main/30 flex items-center justify-center group-hover:border-gold-main transition-colors">
                <span className="font-sans font-bold text-gold-main text-xl">IP</span>
              </div>
              <span className="font-sans font-bold text-xl tracking-wide text-text-main">ЦЕМОНИП</span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed">
              Центр мониторинга интеллектуальной собственности. Защита ваших активов в России и за рубежом.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-center md:text-center">
            <h4 className="font-sans font-bold text-lg text-text-main mb-2">Услуги</h4>
            <Link href="/monitoring" className="text-text-muted hover:text-gold-main transition-colors text-sm">Мониторинг</Link>
            <Link href="/violations" className="text-text-muted hover:text-gold-main transition-colors text-sm">Выявление нарушений</Link>
            <Link href="/litigation" className="text-text-muted hover:text-gold-main transition-colors text-sm">Судебная защита</Link>
            <Link href="/deadlines" className="text-text-muted hover:text-gold-main transition-colors text-sm">Контроль сроков</Link>
          </div>

          <div className="flex flex-col gap-4 md:items-center md:text-center">
            <h4 className="font-sans font-bold text-lg text-text-main mb-2">Компания</h4>
            <Link href="/team" className="text-text-muted hover:text-gold-main transition-colors text-sm">Команда</Link>
            <Link href="/contacts" className="text-text-muted hover:text-gold-main transition-colors text-sm">Контакты</Link>
          </div>

          <div className="flex flex-col gap-4 md:items-center md:text-center">
            <h4 className="font-sans font-bold text-lg text-text-main mb-2">Контакты</h4>
            <a href="tel:+74955322357" className="text-text-muted hover:text-gold-main transition-colors text-sm font-mono">+7 (495) 532-23-57</a>
            <a href="mailto:info@cemonip.ru" className="text-text-muted hover:text-gold-main transition-colors text-sm">info@cemonip.ru</a>
            <p className="text-text-muted text-sm">г. Москва, ул. Каргопольская, д. 6</p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col items-center justify-center text-center gap-4">
          <p className="text-text-dim text-xs">
            © 2016–2026 cemonip.ru — Центр мониторинга интеллектуальной собственности
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link href="/privacy" className="text-text-dim hover:text-text-muted transition-colors text-xs">Заявление о конфиденциальности</Link>
            <Link href="/offer" className="text-text-dim hover:text-text-muted transition-colors text-xs">Договор-оферта</Link>
            <Link href="/personal-data" className="text-text-dim hover:text-text-muted transition-colors text-xs">Персональные данные</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
