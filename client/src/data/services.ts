export interface Service {
  id: number;
  title: {
    en: string;
    ru: string;
    tr: string;
  };
  description: {
    en: string;
    ru: string;
    tr: string;
  };
  icon: string;
  items: {
    en: string[];
    ru: string[];
    tr: string[];
  };
  technologies: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: {
      en: "Frontend Development",
      ru: "Frontend-разработка",
      tr: "Frontend Geliştirme"
    },
    description: {
      en: "Modern, responsive websites and web applications built with the latest technologies and best practices.",
      ru: "Современные, адаптивные веб-сайты и веб-приложения, созданные с использованием новейших технологий и лучших практик.",
      tr: "En son teknolojiler ve en iyi uygulamalarla oluşturulmuş modern, duyarlı web siteleri ve web uygulamaları."
    },
    icon: "code",
    items: {
      en: ["Responsive web design", "Single-page applications", "Performance optimization"],
      ru: ["Адаптивный веб-дизайн", "Одностраничные приложения", "Оптимизация производительности"],
      tr: ["Duyarlı web tasarımı", "Tek sayfalık uygulamalar", "Performans optimizasyonu"]
    },
    technologies: ["React", "Vue", "Tailwind CSS", "JavaScript"]
  },
  {
    id: 2,
    title: {
      en: "Telegram Bot Development",
      ru: "Разработка Telegram-ботов",
      tr: "Telegram Bot Geliştirme"
    },
    description: {
      en: "Custom Telegram bots that automate processes, enhance communication, and provide valuable services to users.",
      ru: "Индивидуальные Telegram-боты, которые автоматизируют процессы, улучшают коммуникацию и предоставляют ценные услуги пользователям.",
      tr: "Süreçleri otomatikleştiren, iletişimi geliştiren ve kullanıcılara değerli hizmetler sunan özel Telegram botları."
    },
    icon: "telegram",
    items: {
      en: ["Custom bot solutions", "Integration with external APIs", "Automated notifications"],
      ru: ["Индивидуальные решения для ботов", "Интеграция с внешними API", "Автоматические уведомления"],
      tr: ["Özel bot çözümleri", "Harici API'lerle entegrasyon", "Otomatik bildirimler"]
    },
    technologies: ["Node.js", "Python", "Telegram API", "Webhooks"]
  },
  {
    id: 3,
    title: {
      en: "UI/UX Design",
      ru: "UI/UX дизайн",
      tr: "UI/UX Tasarımı"
    },
    description: {
      en: "Intuitive, user-centered designs that look great and provide an exceptional user experience.",
      ru: "Интуитивно понятные, ориентированные на пользователя дизайны, которые отлично выглядят и обеспечивают исключительный пользовательский опыт.",
      tr: "Harika görünen ve olağanüstü bir kullanıcı deneyimi sağlayan sezgisel, kullanıcı odaklı tasarımlar."
    },
    icon: "palette",
    items: {
      en: ["User interface design", "Wireframing and prototyping", "Design system creation"],
      ru: ["Дизайн пользовательского интерфейса", "Создание прототипов", "Создание дизайн-системы"],
      tr: ["Kullanıcı arayüzü tasarımı", "Tel çerçeve oluşturma ve prototipleme", "Tasarım sistemi oluşturma"]
    },
    technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"]
  }
];
