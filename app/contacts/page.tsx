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
      <section className="relative pt-20 pb-24 overflow-hidden glass-panel">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-gold-main/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-[1.1] mb-6">
            Свяжитесь с нами
          </h1>
          <p className="text-xl md:text-2xl font-bold text-text-main mb-8 leading-relaxed">
            Мы готовы обсудить вашу задачу и предложить оптимальное решение для защиты вашей интеллектуальной собственности.
          </p>
        </div>
      </section>

      {/* CONTACT INFO & FORM */}
      <section className="py-24 glass-panel relative">
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

              <div className="pt-8 border-t border-white/10">
                <h3 className="text-xl font-bold mb-4">Реквизиты компании</h3>
                <div className="text-sm text-text-muted space-y-2 font-mono">
                  <p>ИП Прибыльский Андрей Вацлавович</p>
                  <p>ИНН: уточняйте по запросу</p>
                  <p>ОГРНИП: уточняйте по запросу</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-gold-main/20 shadow-2xl h-fit sticky top-32">
              <h2 className="text-2xl font-sans font-bold mb-2">Написать нам</h2>
              <p className="text-text-muted mb-8">Заполните форму, и наш специалист свяжется с вами в течение 30 минут в рабочее время.</p>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-text-muted">Ваше имя *</label>
                  <input type="text" id="name" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-gold-main transition-colors" placeholder="Иван Иванов" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-text-muted">Телефон *</label>
                  <input type="tel" id="phone" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-gold-main transition-colors" placeholder="+7 (999) 000-00-00" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-text-muted">Email</label>
                  <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-gold-main transition-colors" placeholder="ivan@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-text-muted">Интересующая услуга</label>
                  <select id="service" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-gold-main transition-colors appearance-none">
                    <option value="">Выберите услугу...</option>
                    <option value="monitoring">Мониторинг ИС</option>
                    <option value="violations">Выявление нарушений</option>
                    <option value="litigation">Судебная защита</option>
                    <option value="deadlines">Контроль сроков</option>
                    <option value="other">Другое / Консультация</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-text-muted">Сообщение</label>
                  <textarea id="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-gold-main transition-colors resize-none" placeholder="Кратко опишите вашу задачу или задайте вопрос"></textarea>
                </div>
                
                <div className="text-xs text-text-muted">
                  Нажимая кнопку «Отправить», вы соглашаетесь с <a href="/personal-data" className="text-gold-main hover:underline">Политикой обработки персональных данных</a>.
                </div>

                <Button type="button" size="lg" className="w-full">
                  Отправить заявку <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* MAP SECTION (Placeholder) */}
      <section className="h-[400px] glass-panel relative flex items-center justify-center">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-gold-main/20 to-transparent" />
        <div className="relative z-10 text-center">
          <MapPin className="w-12 h-12 text-gold-main mx-auto mb-4" />
          <h3 className="text-2xl font-sans font-bold mb-2">Ждем вас в нашем офисе</h3>
          <p className="text-text-muted">г. Москва, ул. Каргопольская, д. 6</p>
        </div>
      </section>
    </div>
  );
}
