import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/SectionHeader';
import { MapPin, Phone, Mail, Clock, ArrowRight, Send } from 'lucide-react';

export const metadata = {
  title: 'Контакты | ЦЕМОНИП',
  description: 'Свяжитесь с нами для консультации по вопросам защиты интеллектуальной собственности.',
};

export default function ContactsPage() {
  return (
    <div className="flex flex-col min-h-screen gap-6 md:gap-8">
      {/* HERO SECTION */}
      <section className="relative pt-16 md:pt-20 pb-12 md:pb-24 overflow-hidden glass-panel">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-gold-main/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-sans font-bold leading-[1.1] mb-4 md:mb-6">
            Свяжитесь с нами
          </h1>
          <p className="text-base md:text-2xl font-bold text-text-main mb-6 md:mb-8 leading-relaxed">
            Мы готовы обсудить вашу задачу и предложить оптимальное решение для защиты вашей интеллектуальной собственности.
          </p>
        </div>
      </section>

      {/* CONTACT INFO & FORM */}
      <section className="py-12 md:py-24 glass-panel relative">
        <div className="absolute top-0 left-0 right-0 gold-gradient-line" />
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Contact Details */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-sans font-bold mb-6">Наши контакты</h2>
                <p className="text-text-muted text-lg leading-relaxed mb-8">
                  Вы можете связаться с нами любым удобным способом: позвонить, написать на email или приехать в офис. Мы оперативно ответим на ваш запрос.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-main/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-gold-main" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Офис в Москве</h3>
                    <p className="text-text-muted leading-relaxed">
                      123112, г. Москва, Пресненская наб., д. 12<br />
                      ММДЦ «Москва-Сити», Башня Федерация (Восток), 45 этаж
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-main/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-gold-main" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Телефон</h3>
                    <p className="text-text-muted leading-relaxed">
                      <a href="tel:+74951234567" className="hover:text-gold-main transition-colors text-lg">+7 (495) 123-45-67</a><br />
                      <span className="text-sm">Многоканальный номер</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-main/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-gold-main" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <p className="text-text-muted leading-relaxed">
                      <a href="mailto:info@cemonip.ru" className="hover:text-gold-main transition-colors text-lg">info@cemonip.ru</a><br />
                      <span className="text-sm">Для общих вопросов и заявок</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-main/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-gold-main" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Режим работы</h3>
                    <p className="text-text-muted leading-relaxed">
                      Пн - Пт: 09:00 – 19:00<br />
                      Сб, Вс: Выходной
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-[var(--border-main)]">
                <h3 className="text-xl font-bold mb-4">Реквизиты компании</h3>
                <div className="text-sm text-text-muted space-y-2 font-mono">
                  <p>ИП Прибыльский Андрей Вацлавович</p>
                  <p>ИНН: 501207966903</p>
                  <p>ОГРНИП: 316501200054241</p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="glass-card p-5 md:p-10 rounded-2xl md:rounded-3xl border border-gold-main/20 shadow-2xl h-fit md:sticky md:top-32 flex flex-col items-center text-center gap-6">
              <h2 className="text-2xl font-sans font-bold">Написать нам</h2>
              <p className="text-text-muted">Свяжитесь с нами напрямую в Telegram для оперативной консультации.</p>
              <Button size="lg" className="w-full" asChild>
                <a href="https://t.me/patentattorney1554" target="_blank" rel="noopener noreferrer">
                  Отправить заявку <Send className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
