import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="glass-panel pt-8 md:pt-16 pb-6 md:pb-8 px-4 md:px-8">
      <div className="mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-16">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4 md:gap-6 items-center text-center md:items-center md:text-center">
            <Link href="/" className="flex items-center gap-2 md:gap-3 group">
              <Image 
                src="/images/logo.png" 
                alt="ЦЕМОНИП" 
                width={40} 
                height={40} 
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
              <span className="font-sans font-bold text-lg md:text-xl tracking-wide text-text-main">ЦЕМОНИП</span>
            </Link>
            <p className="text-text-muted text-xs md:text-sm leading-relaxed max-w-xs">
              Центр мониторинга интеллектуальной собственности. Защита ваших активов в России и за рубежом.
            </p>
          </div>

          <div className="flex flex-col gap-2 md:gap-4 items-center text-center md:items-center md:text-center">
            <h4 className="font-sans font-bold text-sm md:text-lg text-text-main mb-1 md:mb-2">Услуги</h4>
            <Link href="/monitoring" className="text-text-muted hover:text-gold-main transition-colors text-xs md:text-sm">Мониторинг</Link>
            <Link href="/violations" className="text-text-muted hover:text-gold-main transition-colors text-xs md:text-sm">Выявление нарушений</Link>
            <Link href="/litigation" className="text-text-muted hover:text-gold-main transition-colors text-xs md:text-sm">Судебная защита</Link>
            <Link href="/deadlines" className="text-text-muted hover:text-gold-main transition-colors text-xs md:text-sm">Контроль сроков</Link>
          </div>

          <div className="flex flex-col gap-2 md:gap-4 items-center text-center md:items-center md:text-center">
            <h4 className="font-sans font-bold text-sm md:text-lg text-text-main mb-1 md:mb-2">Компания</h4>
            <Link href="/team" className="text-text-muted hover:text-gold-main transition-colors text-xs md:text-sm">Команда</Link>
            <Link href="/contacts" className="text-text-muted hover:text-gold-main transition-colors text-xs md:text-sm">Контакты</Link>
          </div>

          <div className="flex flex-col gap-2 md:gap-4 items-center text-center md:items-center md:text-center">
            <h4 className="font-sans font-bold text-sm md:text-lg text-text-main mb-1 md:mb-2">Контакты</h4>
            <a href="tel:+74955322357" className="text-text-muted hover:text-gold-main transition-colors text-xs md:text-sm font-mono">+7 (495) 532-23-57</a>
            <a href="mailto:info@cemonip.ru" className="text-text-muted hover:text-gold-main transition-colors text-xs md:text-sm">info@cemonip.ru</a>
            <p className="text-text-muted text-xs md:text-sm">г. Москва</p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-4 md:pt-8 flex flex-col items-center justify-center text-center gap-3 md:gap-4">
          <p className="text-text-dim text-[10px] md:text-xs">
            © 2016–2026 cemonip.ru — Центр мониторинга ИС
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            <Link href="/privacy" className="text-text-dim hover:text-text-muted transition-colors text-[10px] md:text-xs">Конфиденциальность</Link>
            <Link href="/offer" className="text-text-dim hover:text-text-muted transition-colors text-[10px] md:text-xs">Договор-оферта</Link>
            <Link href="/personal-data" className="text-text-dim hover:text-text-muted transition-colors text-[10px] md:text-xs">Персональные данные</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
