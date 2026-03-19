import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/SectionHeader';
import { Search, ShieldCheck, Eye, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Мониторинг интеллектуальной собственности | ЦЕМОНИП',
  description: 'Комплексное наблюдение за патентными базами, реестрами и открытыми источниками с целью контроля использования ваших активов.',
};

export default function MonitoringPage() {
  return (
    <div className="flex flex-col min-h-screen gap-6 md:gap-8">
      {/* HERO SECTION */}
      <section className="relative pt-16 md:pt-20 pb-12 md:pb-24 overflow-hidden glass-panel">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-gold-main/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-sans font-bold leading-[1.1] mb-4 md:mb-6">
            Мониторинг интеллектуальной собственности
          </h1>
          <p className="text-base md:text-2xl font-bold text-text-main mb-6 md:mb-8 leading-relaxed">
            Комплексное наблюдение за патентными базами, реестрами и открытыми источниками с целью контроля использования ваших активов и выявления потенциальных угроз для бизнеса.
          </p>
          <Button size="lg" asChild>
            <Link href="/contacts">Запросить мониторинг <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none text-text-muted leading-relaxed">
            <p className="mb-6">
              В современной экономике интеллектуальная собственность — один из самых ценных активов компании. Однако регистрацией товарного знака или получением патента защита не заканчивается. Рынок и патентное ведомство находятся в постоянном движении: ежедневно подаются тысячи новых заявок, появляются сайты-клоны, а конкуренты могут начать использовать ваш дизайн или бренд без разрешения. Пропустить этот момент — значит создать риск потери доли рынка, репутации и прибыли.
            </p>
            <p className="text-xl text-text-main font-medium border-l-2 border-gold-main pl-6 py-2 my-8">
              Наш мониторинг — это ваш постоянный «радар», который сканирует правовое поле и рынок, чтобы вы могли контролировать ситуацию и своевременно принимать превентивные меры.
            </p>
          </div>
        </div>
      </section>

      {/* WHO NEEDS IT */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader label="Целевая аудитория" title="Кому и зачем это нужно?" />
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { icon: ShieldCheck, title: "Вы — правообладатель", desc: "Хотите быть уверены, что третьи лица не используют ваши ТЗ, патенты или дизайн без согласия." },
              { icon: Eye, title: "Вы выводите на рынок новый бренд", desc: "Хотите убедиться, что не нарушаете права других и отслеживать реакцию конкурентов." },
              { icon: Search, title: "Вы хотите пресечь «паразитирование»", desc: "Своевременно выявлять сайты, домены или фирменные наименования, сходные с вашими." },
              { icon: Clock, title: "Вы цените своё время", desc: "Предпочитаете получать готовые отчёты вместо часов самостоятельного поиска." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-5 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl md:rounded-3xl bg-gold-main/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-gold-main" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-sans font-bold mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE TRACK */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <SectionHeader label="Объекты" title="Что мы отслеживаем?" />
          
          <div className="glass-card rounded-3xl border border-white/5 p-8 md:p-12">
            <ul className="space-y-6">
              {[
                "Товарные знаки и знаки обслуживания",
                "Изобретения, полезные модели, промышленные образцы (патенты)",
                "Объекты авторского права (дизайн, тексты, фото, видео, ПО)",
                "Фирменные наименования и коммерческие обозначения"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg">
                  <div className="w-8 h-8 rounded-full bg-gold-main/20 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-gold-main" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DIRECTIONS */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader label="Направления" title="Наши направления мониторинга" />
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Патентные базы и реестры", desc: "Еженедельный анализ публикаций Роспатента и международных ведомств. Выявляем заявки на ТЗ и патенты, сходные с вашими, на ранней стадии — до регистрации. Подаём возражение и предотвращаем появление «двойника»." },
              { title: "Интернет-пространство", desc: "Сканирование поисковых систем, маркетплейсов (Ozon, Wildberries, Яндекс.Маркет и др.), социальных сетей и видеохостингов. Ищем незаконное использование изображений, текстов, брендов, контрафакт." },
              { title: "Доменные имена", desc: "Мониторинг регистраций в зонах .ru, .рф, .com, .net и др. Фиксируем домены с вашим ТЗ для предотвращения киберсквоттинга." },
              { title: "Рыночные и регистрационные данные", desc: "Анализ ЕГРЮЛ на предмет юрлиц с сходными наименованиями. При необходимости — мониторинг офлайн-рынка с контрольными закупками." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl border border-white/5 hover:border-gold-main/30 transition-colors">
                <h3 className="text-2xl font-sans font-bold mb-4 text-gold-main">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.desc}</p>
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
          
          <div className="space-y-6">
            {[
              { title: "Первичная настройка", desc: "анализ объектов, определение классов МКТУ, ключевых запросов и зон риска." },
              { title: "Регулярный мониторинг", desc: "поиск по всем направлениям с установленной периодичностью (обычно ежемесячно)." },
              { title: "Детальный отчёт", desc: "структурированный отчёт со ссылками, скриншотами, описанием угроз и оценкой." },
              { title: "Правовой анализ и рекомендации", desc: "разъяснение по каждому факту: является ли нарушением, насколько опасно, способы реагирования." },
              { title: "Консультирование", desc: "ответы на вопросы по результатам отчётов в течение всего срока договора." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start glass-card p-6 rounded-2xl border border-white/5">
                <div className="text-2xl font-mono font-bold text-gold-main/50 mt-1">0{i + 1}</div>
                <div>
                  <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                  <p className="text-text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader label="Процесс" title="Как мы работаем: 3 шага" />
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-gold-main/30 to-transparent" />
            
            {[
              { title: "Направьте запрос", desc: "Присылаете информацию о своих объектах (свидетельства, ссылки, описания) для анализа и расчёта стоимости." },
              { title: "Заключите договор", desc: "Согласуем программу мониторинга, пакет услуг и подписываем договор. После оплаты — работа." },
              { title: "Получайте отчёты", desc: "Ежемесячно на почту готовый отчёт, при критичных угрозах — оперативное уведомление." }
            ].map((item, i) => (
              <div key={i} className="relative glass-card p-8 rounded-3xl border border-white/5 text-center z-10">
                <div className="w-16 h-16 mx-auto bg-white/5 border border-gold-main/30 rounded-full flex items-center justify-center mb-6 text-xl font-bold text-gold-main">
                  {i + 1}
                </div>
                <h3 className="text-xl font-sans font-bold mb-4">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.desc}</p>
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
            <h2 className="text-3xl font-sans font-bold mb-2 text-center">Отправить запрос на мониторинг</h2>
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
