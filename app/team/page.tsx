import { SectionHeader } from '@/components/SectionHeader';
import Image from 'next/image';
import { Linkedin, Mail, Phone, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Команда | ЦЕМОНИП',
  description: 'Наши эксперты: патентные поверенные, юристы по интеллектуальной собственности и аналитики.',
};

export default function TeamPage() {
  const team = [
    {
      name: "Прибыльский Андрей Вацлавович",
      role: "Руководитель проекта. Патентный поверенный РФ №1554 (аттестован с 2013 г.)",
      image: "https://cemonip.ru/gallery_gen/2661aed3941aa101abfaa07f02122c13_480x480_4x0_484x483_crop.jpg",
      bio: "Работает в сфере ИС с 2006 года. Зарегистрировано более 3 500 объектов интеллектуальной собственности. Входит в ТОП-10 рейтинга Роспатента по количеству поданных заявок на регистрацию товарных знаков. Начал карьеру в Следственном комитете РФ, затем работал в патентно-юридических фирмах и российском представительстве крупной иностранной компании.",
      expertise: ["Патентные споры", "Международная регистрация", "Стратегия защиты ИС"],
      contacts: { email: "info@cemonip.ru", phone: "+7 (495) 532-23-57" },
      link: "https://rospatent.gov.ru/ru/patent-attorneys/1554"
    },
    {
      name: "Васильев Сергей Анатольевич",
      role: "Юрист. Эксперт по регистрации и защите ИС",
      image: "https://cemonip.ru/gallery_gen/0b27443ba82200a24f04f49248b0549d_480x480_fit.jpg",
      bio: "Успешно провел множество дел в Суде по интеллектуальным правам и арбитражных судах. Эксперт по защите авторских прав в интернете и спорам о недобросовестной конкуренции.",
      expertise: ["Судебное представительство", "Авторское право", "Антимонопольные споры"],
      contacts: { email: "info@cemonip.ru", phone: "+7 (495) 532-23-57" }
    },
    {
      name: "Мосинский Александр Александрович",
      role: "Руководитель судебного отдела",
      image: "https://cemonip.ru/gallery_gen/ac052cb168e497bbe133afa1b7857c7f_480x480_fit.jpg",
      bio: "Специалист по выявлению нарушений в интернете и на маркетплейсах. Разработал эффективные методики поиска контрафакта и защиты прав в судебном порядке.",
      expertise: ["Мониторинг нарушений", "Защита на маркетплейсах", "Доменные споры"],
      contacts: { email: "info@cemonip.ru", phone: "+7 (495) 532-23-57" }
    }
  ];

  return (
    <div className="flex flex-col min-h-screen gap-6 md:gap-8">
      {/* HERO SECTION */}
      <section className="relative pt-16 md:pt-20 pb-12 md:pb-24 overflow-hidden glass-panel">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-gold-main/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-sans font-bold leading-[1.1] mb-4 md:mb-6">
            Наша команда
          </h1>
          <p className="text-base md:text-2xl font-bold text-text-main mb-6 md:mb-8 leading-relaxed">
            Эксперты, которые защищают ваши идеи и бизнес. Патентные поверенные, адвокаты и аналитики с многолетним опытом работы в сфере интеллектуальной собственности.
          </p>
        </div>
      </section>

      {/* TEAM MEMBERS */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <SectionHeader label="Эксперты" title="Познакомьтесь с нашими специалистами" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="glass-card rounded-3xl border border-white/5 overflow-hidden group hover:border-gold-main/30 transition-all duration-300 flex flex-col h-full">
                <div className="relative h-80 w-full overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl font-sans font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-gold-main font-medium text-sm">{member.role}</p>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                    {member.bio}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-xs font-mono text-gold-main/70 uppercase tracking-wider mb-3">Специализация</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((exp, j) => (
                        <span key={j} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-text-main">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                    {member.link && (
                      <a href={member.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gold-main hover:text-gold-main/80 transition-colors mb-2">
                        Проверить на Роспатенте <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                    <a href={`mailto:${member.contacts.email}`} className="flex items-center gap-2 text-sm text-text-muted hover:text-gold-main transition-colors">
                      <Mail className="w-4 h-4" /> {member.contacts.email}
                    </a>
                    <a href={`tel:${member.contacts.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-2 text-sm text-text-muted hover:text-gold-main transition-colors">
                      <Phone className="w-4 h-4" /> {member.contacts.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS SECTION */}
      <section className="py-12 md:py-24 bg-[#111827] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            label="Клиенты" 
            title="Нам доверяют" 
            subtitle="Компании, которые выбрали нас для защиты своей интеллектуальной собственности"
          />
          
          <div className="mb-16">
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12">
              {['Банк ЗЕНИТ', 'Bank NBT', 'АНО «Лига мечты»', 'ННПФ', 'СкайТрак', 'Открытые документы', 'A Wish', 'МОНОТЕКСТРОЙ', 'ПРОЗДОРОВЬЕ', 'Страховая компания «Турикум»'].map((client, i) => (
                <span key={i} className="text-lg md:text-xl font-serif font-bold text-white/50 hover:text-white transition-colors cursor-default">
                  {client}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-white/5">
            <h4 className="text-center text-sm text-text-muted uppercase tracking-wider mb-8">Благодарственные письма</h4>
            <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 gap-6 snap-x hide-scrollbar">
              {[
                { name: "АО «Национальный негосударственный пенсионный фонд» (ННПФ)", type: "Регистрация товарного знака", quote: "Выражаем искреннюю благодарность за проявленный профессионализм и компетентность при регистрации товарного знака Фонда", author: "И.О. Акопджанова, Генеральный директор" },
                { name: "АНО «Открытые документы»", type: "Регистрация товарного знака", quote: "Выражаем искреннюю благодарность лично Вам за качественно проделанную работу в рамках регистрации товарного знака «Открытые документы»", author: "А.С. Нескубин, Директор АНО" },
                { name: "ООО «СкайТрак» (SKYTRUCK)", type: "Комплексное сопровождение", quote: "Выражаем благодарность и глубокую признательность за плодотворное сотрудничество с нашей молодой компанией", author: "С.А. Якимов, Генеральный директор" },
                { name: "ИП Жукова В.В. / Магазин «A Wish»", type: "Защита бренда", quote: "Выражаем благодарность и глубокую признательность за плодотворное сотрудничество. Спасибо вам за это!", author: "Жукова В.В., 26 июля 2023 г." }
              ].map((item, i) => (
                <div key={i} className="min-w-[300px] md:min-w-[400px] w-full max-w-[450px] bg-[#141c2b] p-8 rounded-2xl border border-[rgba(200,160,74,0.12)] relative hover:-translate-y-1 hover:border-gold-main/30 transition-all duration-300 snap-center flex flex-col">
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold-main/50 to-transparent" />
                  <div className="text-gold-main/40 text-4xl font-serif absolute top-6 left-6 leading-none">"</div>
                  
                  <div className="pt-4 mb-6">
                    <h3 className="font-serif text-lg text-white mb-3">{item.name}</h3>
                    <span className="inline-block px-3 py-1 rounded-full border border-gold-main/20 text-gold-main font-mono text-xs">{item.type}</span>
                  </div>
                  
                  <p className="font-sans italic text-[15px] text-white/70 leading-relaxed mb-8 flex-grow">
                    «{item.quote}»
                  </p>
                  
                  <div className="font-mono text-xs text-text-muted mt-auto pt-4 border-t border-white/5">
                    {item.author}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <SectionHeader label="Принципы" title="Наши принципы работы" />
          
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { title: "Глубокая экспертиза", desc: "Мы не беремся за все подряд. Наша специализация — исключительно интеллектуальная собственность. Это позволяет нам знать все нюансы и актуальную практику." },
              { title: "Ориентация на бизнес-результат", desc: "Суд ради суда нам не интересен. Мы всегда оцениваем экономическую целесообразность спора и предлагаем оптимальные пути решения проблемы." },
              { title: "Прозрачность", desc: "Вы всегда знаете, за что платите. Мы честно оцениваем перспективы дела на первой консультации и не обещаем невозможного." },
              { title: "Конфиденциальность", desc: "Информация о ваших разработках, планах и коммерческих тайнах надежно защищена. Мы подписываем NDA до начала обсуждения деталей проекта." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl border border-white/5">
                <h3 className="text-xl font-sans font-bold mb-4 text-gold-main">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
