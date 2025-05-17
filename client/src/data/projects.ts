export interface Project {
  id: number;
  title: {
    en: string;
    ru: string;
    tr: string;
  };
  category: {
    en: string;
    ru: string;
    tr: string;
  };
  description: {
    en: string;
    ru: string;
    tr: string;
  };
  image: string;
  demoLink: string;
  githubLink: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: {
      en: "LuxMart E-commerce",
      ru: "LuxMart Интернет-магазин",
      tr: "LuxMart E-ticaret"
    },
    category: {
      en: "E-commerce",
      ru: "Интернет-магазин",
      tr: "E-ticaret"
    },
    description: {
      en: "A responsive e-commerce platform with advanced filtering, cart functionality, and seamless checkout experience.",
      ru: "Адаптивная платформа электронной коммерции с расширенной фильтрацией, функциями корзины и плавным процессом оформления заказа.",
      tr: "Gelişmiş filtreleme, sepet işlevselliği ve sorunsuz ödeme deneyimi sunan duyarlı bir e-ticaret platformu."
    },
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    demoLink: "#",
    githubLink: "#",
    technologies: ["React", "Redux", "Stripe"]
  },
  {
    id: 2,
    title: {
      en: "Support Assistant Bot",
      ru: "Бот-помощник поддержки",
      tr: "Destek Asistanı Botu"
    },
    category: {
      en: "Telegram Bot",
      ru: "Телеграм Бот",
      tr: "Telegram Botu"
    },
    description: {
      en: "An AI-powered Telegram bot that handles customer inquiries, connects to live agents, and provides 24/7 support.",
      ru: "Телеграм-бот на базе ИИ, который обрабатывает запросы клиентов, соединяет с живыми агентами и обеспечивает круглосуточную поддержку.",
      tr: "Müşteri sorularını yanıtlayan, canlı temsilcilere bağlanan ve 7/24 destek sağlayan yapay zeka destekli bir Telegram botu."
    },
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    demoLink: "#",
    githubLink: "#",
    technologies: ["Node.js", "Telegram API", "NLP"]
  },
  {
    id: 3,
    title: {
      en: "Analytics Dashboard",
      ru: "Аналитическая панель",
      tr: "Analitik Gösterge Paneli"
    },
    category: {
      en: "Dashboard",
      ru: "Панель управления",
      tr: "Gösterge Paneli"
    },
    description: {
      en: "A comprehensive analytics dashboard with real-time data visualization, custom reports, and user management.",
      ru: "Комплексная аналитическая панель с визуализацией данных в реальном времени, настраиваемыми отчетами и управлением пользователями.",
      tr: "Gerçek zamanlı veri görselleştirme, özel raporlar ve kullanıcı yönetimi içeren kapsamlı bir analitik gösterge paneli."
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    demoLink: "#",
    githubLink: "#",
    technologies: ["Vue.js", "D3.js", "Firebase"]
  }
];
