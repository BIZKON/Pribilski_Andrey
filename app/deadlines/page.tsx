import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/SectionHeader';
import { Clock, Calendar, AlertTriangle, CheckCircle, ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Контроль сроков | ЦЕМОНИП',
  description: 'Управление портфелем интеллектуальной собственности и своевременное продление товарных знаков и патентов.',
};

export default function DeadlinesPage() {
  return (
    <div className="flex flex-col min-h-screen gap-6 md:gap-8">
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-24 overflow-hidden glass-panel">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-gold-main/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-[1.1] mb-6">
            Контроль сроков
          </h1>
          <p className="text-xl md:text-2xl font-bold text-text-main mb-8 leading-relaxed">
            Управление портфелем интеллектуальной собственности. Своевременное продление действия товарных знаков и поддержание патентов в силе.
          </p>
          <Button size="lg" asChild>
            <Link href="/contacts">Передать портфель на контроль <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none text-text-muted leading-relaxed">
            <p className="mb-6">
              Интеллектуальная собственность — это актив, который требует регулярного обслуживания. Свидетельство на товарный знак действует 10 лет, патенты — от 5 до 25 лет, но требуют ежегодной уплаты пошлин. Пропуск срока означает прекращение правовой охраны.
            </p>
            <p className="text-xl text-text-main font-medium border-l-2 border-gold-main pl-6 py-2 my-8">
              Восстановление пропущенных сроков — сложная, дорогая, а иногда и невозможная процедура. Если вы потеряете права на бренд, конкуренты смогут зарегистрировать его на себя.
            </p>
          </div>
        </div>
      </section>

      {/* WHO NEEDS IT */}
      <section className="py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader label="Целевая аудитория" title="Кому необходим контроль сроков?" />
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { icon: FileText, title: "Владельцам портфеля ИС", desc: "У вас несколько товарных знаков или патентов, зарегистрированных в разное время. Сложно отслеживать все даты самостоятельно." },
              { icon: AlertTriangle, title: "Компаниям без инхаус-юриста", desc: "Нет выделенного специалиста по интеллектуальной собственности, который бы следил за реестрами и пошлинами." },
              { icon: Clock, title: "Тем, кто ценит безопасность", desc: "Вы понимаете, что потеря бренда обойдется дороже, чем абонентское обслуживание портфеля." },
              { icon: Calendar, title: "Международному бизнесу", desc: "Ваши товарные знаки зарегистрированы в разных странах по Мадридской системе или национальным процедурам. Сроки везде разные." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl border border-white/5 flex gap-6">
                <div className="w-12 h-12 rounded-3xl bg-gold-main/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-gold-main" />
                </div>
                <div>
                  <h3 className="text-xl font-sans font-bold mb-2">{item.title}</h3>
                  <p className="text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <SectionHeader label="Услуги" title="Наши услуги по контролю сроков" />
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Аудит портфеля ИС", desc: "Инвентаризация всех ваших объектов интеллектуальной собственности. Проверка статуса, сроков действия и актуальности данных правообладателя в реестрах." },
              { title: "Продление товарных знаков", desc: "Подготовка и подача ходатайства о продлении срока действия исключительного права на товарный знак (каждые 10 лет). Расчёт и оплата пошлин со скидкой 30%." },
              { title: "Поддержание патентов", desc: "Ежегодный контроль и уплата патентных пошлин за поддержание в силе патентов на изобретения, полезные модели и промышленные образцы." },
              { title: "Внесение изменений", desc: "Оперативное внесение изменений в реестры при смене наименования, адреса правообладателя или передаче прав (договоры отчуждения, лицензии, франчайзинг)." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl border border-white/5 hover:border-gold-main/30 transition-colors">
                <h3 className="text-2xl font-sans font-bold mb-4 text-gold-main">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <SectionHeader label="Процесс" title="Как работает система контроля" />
          
          <div className="space-y-6">
            {[
              { title: "Загрузка данных", desc: "Мы вносим все ваши объекты (ТЗ, патенты, договоры) в нашу специализированную CRM-систему." },
              { title: "Автоматическое отслеживание", desc: "Система автоматически рассчитывает сроки продления и уплаты пошлин на годы вперед." },
              { title: "Заблаговременное уведомление", desc: "За 3-6 месяцев до истечения срока мы направляем вам уведомление с расчётом пошлин и планом действий." },
              { title: "Оформление документов", desc: "После вашего подтверждения мы готовим все документы, оплачиваем пошлины и подаем заявления в Роспатент." },
              { title: "Получение результата", desc: "Контролируем процесс до получения официального подтверждения от ведомства (приложения к свидетельству)." }
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

      {/* CTA FORM */}
      <section className="py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-gold-main/20 shadow-2xl">
            <h2 className="text-3xl font-sans font-bold mb-2 text-center">Запросить аудит портфеля ИС</h2>
            <p className="text-text-muted text-center mb-8">Оставьте заявку, и мы бесплатно проверим статус ваших объектов и сроки продления.</p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-text-muted">Имя / Название компании</label>
                  <input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-gold-main transition-colors" placeholder="ООО Ромашка" />
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
                <label htmlFor="message" className="text-sm font-medium text-text-muted">Номера свидетельств или ИНН</label>
                <textarea id="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-gold-main transition-colors resize-none" placeholder="Укажите ИНН компании или номера свидетельств на товарные знаки/патенты"></textarea>
              </div>
              <Button type="button" size="lg" className="w-full">
                Запросить аудит <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
