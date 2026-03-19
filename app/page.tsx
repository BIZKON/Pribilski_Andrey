import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/SectionHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, Clock, Scale, FileText, CheckCircle, MessageSquare, ArrowRight, MapPin, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen gap-6 md:gap-8">
      {/* HERO SECTION */}
      <section className="relative pt-16 md:pt-20 pb-16 md:pb-32 overflow-hidden glass-panel">
        {/* Background Gradients & Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gold-main/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#c8a04a_1px,transparent_1px),linear-gradient(to_bottom,#c8a04a_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.03]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#cd7f32]/10 border border-[var(--border-main)] mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono text-text-muted">Патентные поверенные РФ • С 2016 года</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold leading-[1.1] mb-4 md:mb-6">
                Ваш бренд копируют прямо сейчас — мы это <span className="text-gold-main">остановим</span>
              </h1>
              <p className="text-base md:text-xl text-text-muted mb-6 md:mb-10 leading-relaxed max-w-2xl">
                Мониторинг, выявление нарушений и судебная защита товарных знаков, патентов и авторских прав. Полный цикл — от обнаружения до взыскания компенсации.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-16">
                <Button size="lg" asChild>
                  <Link href="/contacts">Бесплатная консультация <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/#pricing">Узнать стоимость</Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 md:gap-6 pt-8 border-t border-[var(--border-main)]">
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-sans font-bold text-gold-main mb-1">3 500+</div>
                  <div className="text-[10px] md:text-xs text-text-muted uppercase tracking-wider">объектов ИС зарегистрировано</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-sans font-bold text-gold-main mb-1">С 2006</div>
                  <div className="text-[10px] md:text-xs text-text-muted uppercase tracking-wider">года работаем с ИС</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-sans font-bold text-gold-main mb-1">87%</div>
                  <div className="text-[10px] md:text-xs text-text-muted uppercase tracking-wider">клиентов обращаются повторно</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-sans font-bold text-gold-main mb-1">ТОП-10</div>
                  <div className="text-[10px] md:text-xs text-text-muted uppercase tracking-wider">рейтинга Роспатента</div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:flex justify-center relative">
              <div className="absolute inset-0 bg-gold-main/10 blur-[100px] rounded-full" />
              <ShieldCheck className="w-96 h-96 text-gold-main/20 animate-[float_6s_ease-in-out_infinite]" strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* PAIN TRIGGER SECTION */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            label="Знакомая ситуация?" 
            title="Узнаёте себя? Значит, пора действовать" 
          />
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Search, title: "На маркетплейсе продают подделки под вашим брендом", desc: "Контрафакт размывает репутацию и забирает прибыль. Каждый день промедления - потерянные деньги." },
              { icon: Clock, title: "Вы не уверены, когда истекает срок вашего товарного знака", desc: "Пропуск срока продления = потеря бренда. Восстановление стоит в разы дороже, чем контроль." },
              { icon: Scale, title: "Конкурент зарегистрировал обозначение, похожее на ваше", desc: "Чем дольше он работает под сходным знаком, тем сложнее доказать ваш приоритет." },
              { icon: FileText, title: "Вы получили претензию о нарушении чужих прав", desc: "Без профессиональной защиты штраф может достигать 5 миллионов рублей за каждый случай." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-5 md:p-8 rounded-2xl md:rounded-3xl hover:border-gold-main/50 transition-colors group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl md:rounded-3xl bg-gold-main/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-gold-main/20 transition-colors">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-gold-main" />
                </div>
                <h3 className="text-lg md:text-xl font-sans font-bold mb-2 md:mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center w-full px-4 md:px-0">
            <Button size="lg" asChild className="h-auto py-3 px-4 whitespace-normal text-sm md:text-base w-full md:w-auto min-h-[56px]">
              <Link href="/contacts" className="flex items-center justify-center text-center">
                <span>Опишите вашу ситуацию — мы найдём решение</span>
                <ArrowRight className="ml-2 w-5 h-5 shrink-0" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            label="Направления деятельности" 
            title="Комплексная защита ваших интеллектуальных активов" 
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { href: "/monitoring", icon: Search, title: "Мониторинг", desc: "Комплексное наблюдение за патентными базами, реестрами и открытыми источниками. Ваш постоянный «радар», который сканирует правовое поле и рынок." },
              { href: "/violations", icon: ShieldCheck, title: "Выявление нарушений", desc: "Профессиональное расследование фактов незаконного использования ваших товарных знаков, патентов или дизайна. Собираем доказательную базу для суда." },
              { href: "/litigation", icon: FileText, title: "Претензионно-исковая работа", desc: "От первой претензии до исполнения судебного решения. Досудебное урегулирование, суды всех инстанций, взыскание компенсаций." },
              { href: "/deadlines", icon: Clock, title: "Контроль сроков действия", desc: "Системное отслеживание сроков и своевременная подача заявлений о продлении. Ни один актив не будет утрачен по формальной причине." }
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block group">
                <div className="glass-card p-5 md:p-8 rounded-2xl md:rounded-3xl border border-[var(--border-main)] hover:border-gold-main transition-all duration-300 h-full flex flex-col">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#cd7f32]/10 border border-[var(--border-main)] flex items-center justify-center mb-4 md:mb-6 group-hover:border-gold-main/50 transition-colors">
                    <item.icon className="w-6 h-6 md:w-7 md:h-7 text-gold-main" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-sans font-bold mb-3 md:mb-4 group-hover:text-gold-main transition-colors">{item.title}</h3>
                  <p className="text-sm md:text-base text-text-muted leading-relaxed mb-4 md:mb-8 flex-grow">{item.desc}</p>
                  <div className="flex items-center text-gold-main font-medium opacity-100 md:opacity-0 md:-translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-300">
                    Подробнее <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="py-12 md:py-24 glass-panel relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            label="Почему выбирают нас" 
            title="Доверьте защиту тем, кто делает это каждый день" 
            align="left"
          />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              {[
                { num: "01", title: "Патентный поверенный в команде", desc: "Аккредитованный специалист Роспатента №1554 — не посредник, а тот, кто ведёт ваше дело лично." },
                { num: "02", title: "Полный цикл «под ключ»", desc: "Мониторинг → выявление → фиксация → претензия → суд → исполнение. Одна команда, без субподрядчиков." },
                { num: "03", title: "Доказательства для суда", desc: "Нотариальные скриншоты, контрольные закупки, видеофиксация, экспертные заключения — всё по правилам." },
                { num: "04", title: "Результат, а не отчёты", desc: "Заблокированный контрафакт, удалённый сайт-клон, взысканная компенсация на вашем счёте." },
                { num: "05", title: "Telegram-бот для сроков", desc: "@fees_prodlenie_bot бесплатно напоминает о продлении ТЗ и уплате пошлин." },
                { num: "06", title: "Международный охват", desc: "Работаем не только с Роспатентом, но и с ВОИС, EUIPO, USPTO, CNIPA, IPO UK. Мониторим патентные базы по всему миру через PATENTSCOPE и Espacenet." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-6">
                  <div className="text-2xl md:text-3xl font-sans font-bold text-gold-main/50 shrink-0">{item.num}</div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{item.title}</h4>
                    <p className="text-sm md:text-base text-text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative h-full min-h-[400px] hidden lg:block">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold-main/20" />
              
              <div className="absolute top-1/4 left-0 glass-card p-6 rounded-3xl border border-gold-main/30 shadow-2xl -rotate-6 transform hover:rotate-0 transition-transform duration-500 w-64">
                <div className="text-sm text-text-muted uppercase tracking-wider mb-2">Опыт работы</div>
                <div className="text-5xl font-sans font-bold text-gold-main mb-2">10+</div>
                <div className="text-sm text-text-main">лет на юридическом рынке</div>
              </div>
              
              <div className="absolute bottom-1/4 right-0 glass-card p-6 rounded-3xl border border-gold-main/30 shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-500 w-72">
                <div className="text-sm text-text-muted uppercase tracking-wider mb-2">Telegram-бот</div>
                <div className="text-2xl font-mono font-bold text-gold-main mb-2">@fees_prodlenie_bot</div>
                <div className="text-sm text-text-main">уведомления о сроках</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS AND DATABASES SECTION */}
      <section className="py-12 md:py-24 bg-[var(--bg-section)] relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            label="Наши инструменты" 
            title="Работаем с официальными базами данных" 
            subtitle="Мониторинг проводится по первоисточникам — государственным реестрам и международным патентным базам. Не агрегаторы, а прямой доступ к данным ведомств."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              { icon: "🇷🇺", name: "Роспатент (ФИПС)", desc: "Федеральный институт промышленной собственности — главное патентное ведомство России. Реестр товарных знаков, патентов, промышленных образцов.", url: "rospatent.gov.ru", tag: "Россия" },
              { icon: <ShieldCheck className="w-6 h-6 text-gold-main" />, name: "Реестр патентных поверенных", desc: "Наш руководитель — патентный поверенный №1554, аккредитованный Роспатентом. Проверьте статус в официальном реестре.", url: "rospatent.gov.ru/ru/patent-attorneys/1554", tag: "Верификация", link: "https://rospatent.gov.ru/ru/patent-attorneys/1554", btnText: "Проверить →" },
              { icon: "🌍", name: "ВОИС (WIPO)", desc: "Всемирная организация интеллектуальной собственности — координирует международную защиту ИС, администрирует Мадридскую систему.", url: "wipo.int", tag: "Международный" },
              { icon: "🇪🇺", name: "EUIPO", desc: "Ведомство по интеллектуальной собственности Евросоюза (ранее OHIM). Регистрация товарных знаков ЕС и промышленных образцов Сообщества.", url: "euipo.europa.eu", tag: "Евросоюз" },
              { icon: "🇬🇧", name: "IPO UK", desc: "Ведомство интеллектуальной собственности Великобритании.", url: "gov.uk/government/organisations/intellectual-property-office", tag: "Великобритания" },
              { icon: "🇨🇳", name: "CNIPA", desc: "Национальное управление по интеллектуальной собственности Китая.", url: "english.cnipa.gov.cn", tag: "Китай" },
              { icon: "🇺🇸", name: "USPTO", desc: "Ведомство по патентам и товарным знакам США.", url: "uspto.gov", tag: "США" },
              { icon: <Search className="w-6 h-6 text-gold-main" />, name: "PATENTSCOPE (WIPO)", desc: "Глобальная база патентных документов ВОИС. Поиск по миллионам патентов из 100+ стран мира.", url: "wipo.int/patentscope/", tag: "Поиск патентов" },
              { icon: <Search className="w-6 h-6 text-gold-main" />, name: "Espacenet (EPO)", desc: "Европейская база патентных документов. Доступ к более чем 150 миллионам патентных документов по всему миру.", url: "worldwide.espacenet.com", tag: "Поиск патентов" }
            ].map((item, i) => (
              <div key={i} className="bg-[var(--bg-card)] p-5 md:p-8 rounded-xl border border-[rgba(200,160,74,0.08)] hover:-translate-y-1 hover:border-gold-main/30 transition-all duration-300 flex flex-col group">
                <div className="flex items-start justify-between mb-3 md:mb-4 gap-2">
                  <div className="text-2xl md:text-3xl">{item.icon}</div>
                  <span className="px-2 md:px-3 py-1 rounded-full border border-gold-main/15 text-gold-main font-mono text-[10px] md:text-[11px] uppercase tracking-wider shrink-0">{item.tag}</span>
                </div>
                <h3 className="text-lg md:text-xl font-sans font-bold mb-2 md:mb-3">{item.name}</h3>
                <p className="text-text-muted text-xs md:text-sm leading-relaxed mb-4 md:mb-6 flex-grow">{item.desc}</p>
                {item.btnText ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 bg-gold-main/10 text-gold-main rounded-lg text-sm font-medium hover:bg-gold-main/20 transition-colors mt-auto">
                    {item.btnText}
                  </a>
                ) : (
                  <a href={`https://${item.url}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-text-dim font-mono text-xs group-hover:text-gold-main transition-colors mt-auto">
                    {item.url} <ArrowRight className="ml-1 w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
          
          <p className="text-center text-text-muted max-w-3xl mx-auto text-lg">
            Мы работаем напрямую с первоисточниками данных. Это гарантирует точность мониторинга и полноту выявления потенциальных угроз для ваших активов.
          </p>
        </div>
      </section>

      {/* HOW WE WORK SECTION (TIMELINE) */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <SectionHeader 
            label="Процесс работы" 
            title="Прозрачный процесс от заявки до результата" 
            subtitle="Каждый этап задокументирован. Вы всегда знаете, что происходит с вашим делом."
          />
          
          <div className="relative mt-8 md:mt-16">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-main/50 via-gold-main/20 to-transparent md:-translate-x-1/2 hidden md:block" />
            
            <div className="space-y-6 md:space-y-12">
              {[
                { step: "1", icon: MessageSquare, title: "Первичная консультация", time: "В течение 60 минут", desc: "Вы оставляете заявку на сайте или пишете на почту. Мы связываемся с вами для уточнения деталей: какие объекты нужно защитить, что ��ызывает беспокойство, какие цели вы преследуете.", result: "Понимание задачи и предварительная оценка", free: true },
                { step: "2", icon: Search, title: "Предварительная проверка", time: "1–8 часов", desc: "Проводим бесплатную проверку вашего объекта по открытым базам Роспатента, ВОИС, EUIPO, USPTO. Подбираем классы МКТУ. Оцениваем перспективы и риски.", result: "Отчёт о текущем состоянии ваших прав", tools: ["Роспатент", "WIPO", "Espacenet"], free: true },
                { step: "3", icon: FileText, title: "Стратегия и договор", time: "1–2 рабочих дня", desc: "Разрабатываем индивидуальную стратегию защиты. Определяем пакет услуг, периодичность мониторинга, приоритетные направления. Согласуем стоимость и подписываем договор.", result: "Подписанный договор и план работ" },
                { step: "4", icon: Search, title: "Мониторинг и работа", time: "Ежемесячно", desc: "Запускаем регулярный мониторинг по всем направлениям: патентные базы, маркетплейсы, доменные зоны, ЕГРЮЛ, социальные сети. При обнаружении угроз — немедленное уведомление.", result: "Ежемесячный отчёт с правовой оценкой", tools: ["Роспатент", "PATENTSCOPE", "Espacenet", "CNIPA", "USPTO"] },
                { step: "5", icon: ShieldCheck, title: "Фиксация и реагирование", time: "По факту обнаружения", desc: "Выявленные нарушения фиксируются процессуально: нотариальные скриншоты, контрольные закупки, видеозапись. Направляем претензии, жалобы в ФАС, обращения на маркетплейсы. При необходимости — в суд.", result: "Пресечение нарушений и/или взыскание компенсации" },
                { step: "6", icon: Clock, title: "Контроль и продление", time: "Постоянно", desc: "Контролируем сроки действия всех ваших объектов. За 12, 6 и 3 месяца до истечения — уведомляем. Готовим документы на продление и уплату пошлин. Telegram-бот @fees_prodlenie_bot дублирует напоминания.", result: "Ни один актив не утрачен по формальной причине" }
              ].map((item, i) => (
                <div key={i} className="relative">
                  {/* Mobile layout - simple card */}
                  <div className="md:hidden glass-card p-5 rounded-2xl border border-[var(--border-main)]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gold-main text-navy-deep font-bold text-sm flex items-center justify-center shrink-0">
                        {item.step}
                      </div>
                      <span className="text-xs font-mono text-gold-main">{item.time}</span>
                      {item.free && (
                        <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-400 text-[10px] font-medium border border-green-500/20">Бесплатно</span>
                      )}
                    </div>
                    <h3 className="text-lg font-sans font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-3">{item.desc}</p>
                    <div className="inline-flex items-center gap-2 text-xs font-medium text-gold-main bg-gold-main/5 px-2 py-1 rounded-lg">
                      <CheckCircle className="w-3 h-3" />
                      {item.result}
                    </div>
                  </div>
                  
                  {/* Desktop layout - timeline */}
                  <div className={`hidden md:flex flex-row items-start ${i % 2 === 0 ? 'flex-row-reverse' : ''} gap-8 group`}>
                    <div className="absolute left-1/2 w-8 h-8 rounded-full bg-gold-main text-navy-deep font-bold flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(200,160,74,0.5)]">
                      {item.step}
                    </div>
                    
                    <div className="w-1/2" />
                    
                    <div className={`w-1/2 ${i % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <div className="glass-card p-8 rounded-3xl border border-[var(--border-main)] hover:border-gold-main/30 transition-colors">
                        <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? 'justify-end' : ''}`}>
                          <div className="w-10 h-10 rounded-xl bg-gold-main/10 flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-gold-main" />
                          </div>
                          <span className="text-sm font-mono text-gold-main">{item.time}</span>
                          {item.free && (
                            <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium border border-green-500/20">Бесплатно</span>
                          )}
                        </div>
                        <h3 className="text-xl font-sans font-bold mb-3">{item.title}</h3>
                        <p className="text-text-muted leading-relaxed mb-4">{item.desc}</p>
                        
                        <div className={`flex flex-col gap-3 ${i % 2 === 0 ? 'items-end' : 'items-start'}`}>
                          <div className="inline-flex items-center gap-2 text-sm font-medium text-gold-main bg-gold-main/5 px-3 py-1.5 rounded-lg">
                            <CheckCircle className="w-4 h-4" />
                            {item.result}
                          </div>
                          
                          {item.tools && (
                            <div className={`flex flex-wrap gap-2 mt-2 ${i % 2 === 0 ? 'justify-end' : ''}`}>
                              {item.tools.map((tool, idx) => (
                                <span key={idx} className="px-2 py-1 rounded-full border border-[var(--border-main)] text-xs text-text-dim font-mono bg-[var(--bg-card)]">
                                  {tool}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-12 md:py-24 bg-[var(--bg-section)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            label="Нам доверяют" 
            title="Благодарственные письма наших клиентов" 
            subtitle="Каждое письмо — результат реальной работы и успешно завершённого проекта"
          />
          
          <div className="flex overflow-x-auto pb-6 md:pb-8 -mx-4 px-4 md:mx-0 md:px-0 gap-4 md:gap-6 snap-x hide-scrollbar">
            {[
              { name: "АО «Национальный негосударственный пенсионный фонд» (ННПФ)", type: "Регистрация товарного знака", quote: "Выражаем искреннюю благодарность за проявленный профессионализм и компетентность при регистрации товарного знака Фонда", author: "И.О. Акопджанова, Генеральный директор" },
              { name: "АНО «Открытые документы»", type: "Регистрация товарного знака", quote: "Выражаем искреннюю благодарность лично Вам за качественно проделанн��ю работу в рамках регистрации товарного знака «Открытые документы»", author: "А.С. Нескубин, Директор АНО" },
              { name: "ООО «СкайТрак» (SKYTRUCK)", type: "Комплексное сопровождение", quote: "Выражаем благодарность и глубокую признательность за плодотворное сотрудничество с нашей молодой компанией", author: "С.А. Якимов, Генеральный директор" },
              { name: "ИП Жукова В.В. / Магазин «A Wish»", type: "Защита бренда", quote: "Выражаем благодарность и глубокую признательность за плодотворное сотрудничество. Спасибо вам за это!", author: "Жукова В.В., 26 июля 2023 г." }
            ].map((item, i) => (
              <div key={i} className="min-w-[280px] md:min-w-[400px] w-full max-w-[450px] bg-[var(--bg-card)] p-5 md:p-8 rounded-2xl border border-[rgba(200,160,74,0.12)] relative hover:-translate-y-1 hover:border-gold-main/30 transition-all duration-300 snap-center flex flex-col">
                <div className="absolute top-0 left-5 right-5 md:left-8 md:right-8 h-px bg-gradient-to-r from-transparent via-gold-main/50 to-transparent" />
                <div className="text-gold-main/40 text-3xl md:text-4xl font-serif absolute top-4 md:top-6 left-4 md:left-6 leading-none">"</div>
                
                <div className="pt-4 mb-4 md:mb-6">
                  <h3 className="font-serif text-base md:text-lg text-text-main mb-2 md:mb-3">{item.name}</h3>
                  <span className="inline-block px-2 md:px-3 py-1 rounded-full border border-gold-main/20 text-gold-main font-mono text-[10px] md:text-xs">{item.type}</span>
                </div>
                
                <p className="font-sans italic text-sm md:text-[15px] text-text-muted leading-relaxed mb-4 md:mb-8 flex-grow">
                  «{item.quote}»
                </p>
                
                <div className="font-mono text-[10px] md:text-xs text-text-muted mt-auto pt-3 md:pt-4 border-t border-[var(--text-dim)]">
                  {item.author}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 pt-12 border-t border-[var(--text-dim)]">
            <h4 className="text-center text-sm text-text-muted uppercase tracking-wider mb-8">Среди наших клиентов</h4>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12">
              {['Банк ЗЕНИТ', 'Bank NBT', 'Лига мечты', 'ННПФ', 'СкайТрак', 'Открытые документы', 'A Wish', 'МОНОТЕКСТРОЙ'].map((client, i) => (
                <span key={i} className="text-lg md:text-xl font-serif font-bold text-text-dim hover:text-text-main transition-colors cursor-default">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            label="Наша команда" 
            title="Эксперты, которым доверяют бренды" 
          />
          
          <p className="text-center text-text-muted text-sm md:text-lg max-w-4xl mx-auto mb-8 md:mb-16 leading-relaxed">
            Мы работаем на юридическом рынке 10 лет. За это время сложился устойчивый штат специалистов, которые ведут проекты от первого обращения до финального решения. Каждый сотрудник имеет профильное образование и многолетний опыт работы именно в сфере интеллектуальной собственности.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-16">
            {[
              { 
                img: "/images/team-pribylskiy.jpg", 
                name: "Прибыльский Андрей Вацлавович", 
                role: "Руководитель проекта. Патентный поверенный РФ №1554 (аттестован с 2013 г.). Работает в сфере ИС с 2006 года. Зарегистрировано более 3 500 объектов интеллектуальной собственности. Входит в ТОП-10 рейтинга Роспатента по количеству поданных заявок на регистрацию товарных знаков. Начал карьеру в Следственном комитете РФ, затем работал в патентно-юридических фирмах и российском представительстве крупной иностранной компании.",
                link: "https://rospatent.gov.ru/ru/patent-attorneys/1554"
              },
              { img: "/images/team-vasiliev.jpg", name: "Васильев Сергей Анатольевич", role: "Юрист. Эксперт по регистрации и защите объектов интеллектуальной собственности." },
              { img: "/images/team-mosinskiy.jpg", name: "Мосинский Александр Александрович", role: "Руководитель судебного отдела." }
            ].map((member, i) => (
              <div key={i} className="glass-card rounded-3xl overflow-hidden border border-[var(--border-main)] group flex flex-col">
                <div className="aspect-square relative overflow-hidden shrink-0">
                  <Image src={member.img} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-sans font-bold mb-2">{member.name}</h3>
                  <p className="text-text-muted text-sm leading-relaxed flex-grow">{member.role}</p>
                  {member.link && (
                    <div className="mt-4 pt-4 border-t border-[var(--border-main)]">
                      <a href={member.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-medium text-gold-main hover:text-gold-main/80 transition-colors">
                        Проверить на Роспатенте <ArrowRight className="ml-1 w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Патентные поверенные", desc: "Аккредитованы в Роспатенте. Ведут дела от заявки до охранного документа." },
              { title: "Эксперты по ИС", desc: "Патентные поиски, анализ сходства, заключения для суда." },
              { title: "Юристы-судебники", desc: "Арбитраж, СИП, ФАС. Взыскание компенсаций." }
            ].map((item, i) => (
              <div key={i} className="bg-[#cd7f32]/5 p-6 rounded-2xl border border-[var(--border-main)] text-center">
                <h4 className="font-bold text-gold-main mb-2">{item.title}</h4>
                <p className="text-sm text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            label="Стоимость услуг" 
            title="Прозрачные цены без скрытых платежей" 
            subtitle="Выберите подходящий пакет или запросите индивидуальный расчёт. Первая консультация — бесплатно."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Basic */}
            <div className="glass-card p-5 md:p-8 rounded-2xl md:rounded-3xl border border-[var(--border-main)] flex flex-col items-center text-center">
              <h3 className="text-xl md:text-2xl font-sans font-bold mb-2">Мониторинг</h3>
              <div className="text-2xl md:text-3xl font-bold text-gold-main mb-3 md:mb-4">от 15 000 <span className="text-base md:text-lg text-text-muted font-normal">₽/мес</span></div>
              <p className="text-text-muted mb-8">Регулярное наблюдение за патентными базами и реестрами. Для владельцев 1–3 товарных знаков.</p>
              <ul className="space-y-3 mb-8 flex-grow w-full flex flex-col items-center">
                {['Ежемесячный мониторинг Роспатента', 'Мониторинг интернет-пространства', 'Мониторинг доменных имён', 'Отчёт с правовой оценкой', 'Консультирование по результатам'].map((li, i) => (
                  <li key={i} className="w-full bg-[#cd7f32]/5 border border-[var(--border-main)] rounded-full py-2.5 px-4 text-sm text-text-main text-center flex items-center justify-center min-h-[44px]">
                    {li}
                  </li>
                ))}
              </ul>
              <Button variant="secondary" className="w-full" asChild>
                <Link href="/contacts">Запросить расчёт</Link>
              </Button>
            </div>
            
            {/* Optimal */}
            <div className="glass-card p-5 md:p-8 rounded-2xl md:rounded-3xl border-2 border-gold-main relative flex flex-col items-center text-center lg:-translate-y-4 shadow-[0_10px_40px_rgba(200,160,74,0.15)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-main text-navy-deep font-bold px-3 md:px-4 py-1 rounded-full text-xs md:text-sm">
                Популярный
              </div>
              <h3 className="text-xl md:text-2xl font-sans font-bold mb-2 mt-2 md:mt-0">Защита «под ключ»</h3>
              <div className="text-2xl md:text-3xl font-bold text-gold-main mb-3 md:mb-4">от 45 000 <span className="text-base md:text-lg text-text-muted font-normal">₽/мес</span></div>
              <p className="text-text-muted mb-8">Полный цикл: мониторинг + выявление нарушений + досудебная работа. Для активных брендов.</p>
              <ul className="space-y-3 mb-8 flex-grow w-full flex flex-col items-center">
                {['Всё из пакета «Базовый»', 'Выявление фактов нарушений', 'Контрольные закупки и фиксация', 'Досудебное урегулирование', 'Контроль сроков действия', 'Telegram-бот напоминаний'].map((li, i) => (
                  <li key={i} className="w-full bg-[#cd7f32]/5 border border-[var(--border-main)] rounded-full py-2.5 px-4 text-sm text-text-main text-center flex items-center justify-center min-h-[44px]">
                    {li}
                  </li>
                ))}
              </ul>
              <Button className="w-full" asChild>
                <Link href="/contacts">Запросить расчёт</Link>
              </Button>
            </div>
            
            {/* Maximum */}
            <div className="glass-card p-5 md:p-8 rounded-2xl md:rounded-3xl border border-[var(--border-main)] flex flex-col items-center text-center">
              <h3 className="text-xl md:text-2xl font-sans font-bold mb-2">Судебная защита</h3>
              <div className="text-2xl md:text-3xl font-bold text-gold-main mb-3 md:mb-4">от 100 000 <span className="text-base md:text-lg text-text-muted font-normal">₽/проект</span></div>
              <p className="text-text-muted mb-8">Суды всех инстанций, взыскание компенсаций, исполнение решений.</p>
              <ul className="space-y-3 mb-8 flex-grow w-full flex flex-col items-center">
                {['Разработка правовой стратегии', 'Подготовка процессуальных документов', 'Представительство в суде', 'Жалобы в ФАС и Роспатент', 'Исполнение судебных актов', 'Взыскание компенсаций'].map((li, i) => (
                  <li key={i} className="w-full bg-[#cd7f32]/5 border border-[var(--border-main)] rounded-full py-2.5 px-4 text-sm text-text-main text-center flex items-center justify-center min-h-[44px]">
                    {li}
                  </li>
                ))}
              </ul>
              <Button variant="secondary" className="w-full" asChild>
                <Link href="/contacts">Запросить расчёт</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <SectionHeader 
            label="Частые вопросы" 
            title="Ответы на главные вопросы" 
          />
          
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "У меня маленький бизнес с одним товарным знаком. Мне это нужно?", a: "Именно небольшие компании страдают от нарушений больше всего — у них нет юридического отдела. Один случай копирования на маркетплейсе может стоить вам половину оборота. Наш базовый пакет значительно дешевле последствий пропущенного нарушения." },
              { q: "Я могу сам следить за нарушениями.", a: "Профессиональный мониторинг охватывает источники, недоступные в обычном поиске: внутренние базы Роспатента, реестры доменных зон, ЕГРЮЛ, международные ведомства. Плюс мы фиксируем нарушения способом, который примет суд." },
              { q: "Сколько стоят ваши услуги?", a: "Стоимость зависит от количества объектов и объёма работы. Первичная консультация — бесплатно. Мы проведём анализ и назовём точную цену до подписания договора. Никаких скрытых платежей." },
              { q: "Что если нарушитель в другом регионе или за рубежом?", a: "Мы работаем по всей России. Арбитражные суды рассматривают дел�� независимо от местонахождения сторон. Для международных споров привлекаем партнёров в соответствующих юрисдикциях." },
              { q: "Какие гарантии результата?", a: "Мы не даём гарантий исхода суда — это было бы нечестно. Но мы даём честную оценку перспектив на старте и не берёмся за бесперспективные дела. 10 лет практики и поток клиентов по рекомендациям — наша лучшая гарантия." },
              { q: "Как быстро вы начнёте работать?", a: "Первичный анализ — 1-2 рабочих дня. Мониторинг запускается сразу после договора и оплаты. В экстренных ситуациях — подключаемся в тот же день." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-lg">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-base">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* TELEGRAM BOT PROMO */}
      <section className="py-8 md:py-12 glass-panel relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-r from-navy-section to-navy-card rounded-2xl md:rounded-3xl border border-gold-main/30 p-5 md:p-12 flex flex-col items-center gap-4 md:gap-8 text-center shadow-2xl">
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-gold-main/20 border border-gold-main/50 flex items-center justify-center shrink-0">
              <MessageSquare className="w-7 h-7 md:w-10 md:h-10 text-gold-main" />
            </div>
            <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
              <h3 className="text-xl md:text-4xl font-sans font-bold mb-2 md:mb-4">Telegram-бот для контроля сроков</h3>
              <p className="text-text-muted mb-4 md:mb-8 max-w-xl mx-auto text-sm md:text-lg">Бот @fees_prodlenie_bot — бесплатный инструмент. Напомнит о продлении ТЗ, сообщит о пошлинах, предоставит реквизиты.</p>
              <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-3 md:gap-4 w-full">
                {['Напоминания', 'Реквизиты', 'Инструкции', 'Бесплатно'].map((tag, i) => (
                  <span key={i} className="px-4 py-2 rounded-xl md:rounded-full bg-[#cd7f32]/10 border border-[var(--border-main)] text-sm font-mono text-gold-main flex items-center justify-center">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <Button size="lg" asChild className="w-full md:w-auto mt-2">
              <a href="https://t.me/fees_prodlenie_bot?start=site.cemonip.ru" target="_blank" rel="noopener noreferrer">
                Подключить бота <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
