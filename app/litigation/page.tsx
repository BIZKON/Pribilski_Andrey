import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/SectionHeader';
import { Scale, FileText, Gavel, ShieldAlert, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Судебная защита и споры | ЦЕМОНИП',
  description: 'Представление интересов в судах, Палате по патентным спорам и ФАС по вопросам интеллектуальной собственности.',
};

export default function LitigationPage() {
  return (
    <div className="flex flex-col min-h-screen gap-6 md:gap-8">
      {/* HERO SECTION */}
      <section className="relative pt-16 md:pt-20 pb-12 md:pb-24 overflow-hidden glass-panel">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-gold-main/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-sans font-bold leading-[1.1] mb-4 md:mb-6">
            Судебная защита и споры
          </h1>
          <p className="text-base md:text-2xl font-bold text-text-main mb-6 md:mb-8 leading-relaxed">
            Профессиональное представительство в Суде по интеллектуальным правам, арбитражных судах, Палате по патентным спорам и ФАС. Защищаем ваши активы и взыскиваем компенсации.
          </p>
          <Button size="lg" asChild>
            <Link href="/contacts">Получить консультацию <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none text-text-muted leading-relaxed">
            <p className="mb-6">
              Споры в сфере интеллектуальной собственности — одна из самых сложных категорий дел. Они требуют не только глубокого знания гражданского и процессуального права, но и понимания специфики работы патентных ведомств, технических нюансов (в случае с патентами) и умения доказывать факты нарушения в цифровой среде.
            </p>
            <p className="text-xl text-text-main font-medium border-l-2 border-gold-main pl-6 py-2 my-8">
              Наша команда обладает многолетним опытом успешного разрешения споров как на стадии досудебного урегулирования, так и в высших судебных инстанциях. Мы не просто судимся — мы решаем бизнес-задачу клиента.
            </p>
          </div>
        </div>
      </section>

      {/* WHO NEEDS IT */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader label="Ситуации" title="Когда нужна судебная защита?" />
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { icon: ShieldAlert, title: "Ваши права нарушены", desc: "Конкуренты используют ваш товарный знак, копируют дизайн сайта, продают контрафакт. Необходимо пресечь нарушение и взыскать компенсацию (от 10 тыс. до 5 млн рублей)." },
              { icon: Scale, title: "К вам предъявили иск", desc: "Вас обвиняют в незаконном использовании чужой интеллектуальной собственности. Нужна защита от необоснованных требований или снижение размера компенсации." },
              { icon: FileText, title: "Отказ Роспатента", desc: "Роспатент отказал в регистрации вашего товарного знака или выдаче патента. Необходимо оспорить решение в Палате по патентным спорам (ППС)." },
              { icon: Gavel, title: "Недобросовестная конкуренция", desc: "Конкурент зарегистрировал ваш бренд на себя (киберсквоттинг, патентный троллинг) или использует методы, вводящие потребителей в заблуждение. Обращение в ФАС." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl border border-[var(--border-main)] flex gap-6">
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

      {/* OUR SERVICES */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <SectionHeader label="Услуги" title="Наши направления защиты" />
          
          <div className="space-y-6">
            {[
              { title: "Досудебное урегулирование", desc: "Подготовка и направление претензий нарушителям. Переговоры с целью мирного разрешения спора, заключения лицензионного договора или выплаты компенсации без суда." },
              { title: "Суд по интеллектуальным правам (СИП) и Арбитраж", desc: "Подготовка исковых заявлений, отзывов, ходатайств. Представительство в судах всех инстанций по делам о защите исключительных прав, оспаривании решений Роспатента, досрочном прекращении охраны ТЗ." },
              { title: "Палата по патентным спорам (ППС)", desc: "Оспаривание отказов в регистрации ТЗ. Подача возражений против предоставления правовой охраны товарным знакам и патентам к��нкурентов." },
              { title: "Федеральная антимонопольная служба (ФАС)", desc: "Подготовка заявлений о признании действий конкурента актом недобросовестной конкуренции (статья 14.4 Закона о защите конкуренции)." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start glass-card p-6 rounded-2xl border border-[var(--border-main)] hover:border-gold-main/30 transition-colors">
                <div className="text-2xl font-mono font-bold text-gold-main/50 mt-1">0{i + 1}</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gold-main">{item.title}</h4>
                  <p className="text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <SectionHeader label="Состав услуги" title="Что входит в ведение дела?" />
          
          <div className="glass-card rounded-3xl border border-[var(--border-main)] p-8 md:p-12">
            <ul className="space-y-6">
              {[
                "Анализ ситуации и оценка судебных перспектив (бесплатно на первой консультации)",
                "Сбор и фиксация доказательств (нотариальные протоколы осмотра сайтов, контрольные закупки)",
                "Разработка правовой позиции и стратегии защиты",
                "Подготовка всех процессуальных документов (иски, отзывы, ходатайства, жалобы)",
                "Участие юристов во всех судебных заседаниях",
                "Получение решения суда и исполнительного листа",
                "Сопровождение исполнительного производства (опционально)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-lg">
                  <div className="w-8 h-8 rounded-full bg-gold-main/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5 text-gold-main" />
                  </div>
                  <span className="text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA FORM */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-gold-main/20 shadow-2xl text-center">
            <h2 className="text-3xl font-sans font-bold mb-2">Запросить оценку перспектив дела</h2>
            <p className="text-text-muted mb-8">Свяжитесь с нами в Telegram, и наши юристы бесплатно оценят шансы на успех.</p>
            <Button size="lg" className="w-full" asChild>
              <a href="https://t.me/patentattorney1554" target="_blank" rel="noopener noreferrer">
                Отправить заявку <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
