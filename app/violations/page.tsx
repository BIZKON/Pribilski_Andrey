import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/SectionHeader';
import { ShieldCheck, Search, AlertTriangle, Scale, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Выявление нарушений интеллектуальных прав | ЦЕМОНИП',
  description: 'Профессиональное наблюдение за действиями конкурентов и состоянием рынка для выявления незаконного использования ваших активов.',
};

export default function ViolationsPage() {
  return (
    <div className="flex flex-col min-h-screen gap-6 md:gap-8">
      {/* HERO SECTION */}
      <section className="relative pt-16 md:pt-20 pb-12 md:pb-24 overflow-hidden glass-panel">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-gold-main/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-sans font-bold leading-[1.1] mb-4 md:mb-6">
            Выявление нарушения исключительных прав
          </h1>
          <p className="text-base md:text-2xl font-bold text-text-main mb-6 md:mb-8 leading-relaxed">
            Профессиональное наблюдение за действиями конкурентов и состоянием рынка, позволяющее своевременно выявить незаконное использование ваших товарных знаков, патентов или дизайна.
          </p>
          <Button size="lg" asChild>
            <Link href="/contacts">Запросить проверку <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none text-text-muted leading-relaxed">
            <p className="mb-6">
              Регистрация интеллектуальной собственности — это только половина дела. Самое ценное начинается тогда, когда бренд выходит на рынок, завоёвывает доверие потребителей и начинает приносить прибыль. Именно в этот момент появляются те, кто хочет воспользоваться вашими результатами бесплатно.
            </p>
            <p className="text-xl text-text-main font-medium border-l-2 border-gold-main pl-6 py-2 my-8">
              Выявление фактов нарушений — это не просто поиск, а системная аналитическая работа, направленная на то, чтобы обнаружить незаконное использование ваших активов и зафиксировать доказательства.
            </p>
          </div>
        </div>
      </section>

      {/* WHO NEEDS IT */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader label="Целевая аудитория" title="Кому и зачем это нужно?" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: AlertTriangle, text: "Подозреваете, что конкуренты копируют ваш продукт или дизайн" },
              { icon: Search, text: "Хотите проверить добросовестность контрагентов" },
              { icon: ShieldCheck, text: "Заметили падение продаж (подозрение на контрафакт)" },
              { icon: Scale, text: "Готовите иск — нужна доказательная база" },
              { icon: CheckCircle, text: "Проводите аудит ИС — хотите реальную картину" }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-3xl border border-white/5 flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-main/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-gold-main" />
                </div>
                <p className="text-text-main font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE LOOK FOR */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <SectionHeader label="Объекты поиска" title="Что мы ищем?" />
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gold-main/30">
                  <th className="py-4 px-6 font-sans font-bold text-xl text-gold-main w-1/3">Что проверяем</th>
                  <th className="py-4 px-6 font-sans font-bold text-xl text-gold-main">Форма нарушения</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { check: "Недобросовестная конкуренция", form: "Смешение, копирование упаковки, введение в заблуждение" },
                  { check: "Сходные обозначения", form: "ТЗ, вывески, обозначения, домены, логотипы" },
                  { check: "Контрафакт", form: "Продажа, хранение, перевозка, реклама товаров с воспроизведением ваших объектов" },
                  { check: "Нарушения в рекламе и интернете", form: "Использование изображений, текстов, видео без разрешения" },
                  { check: "Нарушения в доменных именах", form: "Киберсквоттинг — регистрация доменов с вашим ТЗ" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 font-medium text-text-main">{row.check}</td>
                    <td className="py-4 px-6 text-text-muted">{row.form}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHERE WE LOOK */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <SectionHeader label="Источники" title="Где мы ищем?" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Интернет", items: ["Сайты конкурентов", "Маркетплейсы (Ozon, Wildberries, Яндекс.Маркет, AliExpress)", "Соцсети (VK, Telegram, Instagram, YouTube)", "Контекстная реклама", "Avito/Юла"] },
              { title: "Официальные источники", items: ["Реестры юридических лиц", "Реестры доменных имён", "Реестры товарных знаков"] },
              { title: "Офлайн", items: ["Розничные магазины", "Выставки", "Оптовые склады", "Контрольные закупки"] }
            ].map((block, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl border border-white/5">
                <h3 className="text-2xl font-sans font-bold mb-6 text-gold-main">{block.title}</h3>
                <ul className="space-y-3">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-text-muted">
                      <CheckCircle className="w-5 h-5 text-gold-main/50 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <SectionHeader label="Состав услуги" title="Что входит в услугу?" />
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Разработка программы поиска",
              "Исследование (глубокий ручной поиск)",
              "Процессуальная фиксация (скриншоты, закупки, видео, заключения)",
              "Отчёт с правовой оценкой"
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-3xl border border-white/5 flex items-center gap-4">
                <div className="text-3xl font-sans font-bold text-gold-main/30">0{i + 1}</div>
                <div className="text-lg font-medium">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <SectionHeader label="Процесс" title="Как мы работаем" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gold-main/20 -translate-y-1/2 z-0" />
            
            {[
              { title: "Запрос и брифинг" },
              { title: "Согласование программы" },
              { title: "Проведение исследования" },
              { title: "Передача результатов" }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-3xl border border-gold-main/30 text-center relative z-10 shadow-lg">
                <div className="w-10 h-10 mx-auto bg-gold-main text-navy-deep rounded-full flex items-center justify-center font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FORM */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-gold-main/20 shadow-2xl">
            <h2 className="text-3xl font-sans font-bold mb-2 text-center">Отправить запрос на выявление нарушений</h2>
            <p className="text-text-muted text-center mb-8">Оставьте заявку, и мы свяжемся с вами для обсуждения деталей.</p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-text-muted">Имя</label>
                  <input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-gold-main transition-colors" placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-text-muted">Телефон</label>
                  <input type="tel" id="phone" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-gold-main transition-colors" placeholder="+7 (999) 000-00-00" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-text-muted">Email</label>
                <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-gold-main transition-colors" placeholder="ivan@example.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-text-muted">Описание задачи</label>
                <textarea id="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-gold-main transition-colors resize-none" placeholder="Расскажите о вашей ситуации"></textarea>
              </div>
              <Button type="button" size="lg" className="w-full">
                Отправить запрос <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
