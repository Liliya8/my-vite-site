export interface Testimonial {
  id: number;
  text: {
    en: string;
    ru: string;
    tr: string;
  };
  name: {
    en: string;
    ru: string;
    tr: string;
  };
  position: {
    en: string;
    ru: string;
    tr: string;
  };
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: {
      en: "Working with this developer was an exceptional experience. The Telegram bot they created for our customer service has increased our response efficiency by 40% and dramatically improved customer satisfaction.",
      ru: "Работа с этим разработчиком была исключительным опытом. Телеграм-бот, который они создали для нашего обслуживания клиентов, увеличил эффективность ответов на 40% и значительно повысил удовлетворенность клиентов.",
      tr: "Bu geliştirici ile çalışmak olağanüstü bir deneyimdi. Müşteri hizmetlerimiz için oluşturdukları Telegram botu yanıt verimliliğimizi %40 artırdı ve müşteri memnuniyetini önemli ölçüde iyileştirdi."
    },
    name: {
      en: "Sarah Johnson",
      ru: "Сара Джонсон",
      tr: "Sarah Johnson"
    },
    position: {
      en: "Marketing Director, TechCorp",
      ru: "Директор по маркетингу, TechCorp",
      tr: "Pazarlama Direktörü, TechCorp"
    },
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    id: 2,
    text: {
      en: "The frontend development work done for our e-commerce platform was top-notch. The site is not only beautiful but also performs exceptionally well. Our conversion rate has increased by 25% since launch.",
      ru: "Фронтенд-разработка, выполненная для нашей платформы электронной коммерции, была первоклассной. Сайт не только красивый, но и работает исключительно хорошо. Наш коэффициент конверсии увеличился на 25% с момента запуска.",
      tr: "E-ticaret platformumuz için yapılan frontend geliştirme çalışması birinci sınıftı. Site sadece güzel değil, aynı zamanda olağanüstü performans gösteriyor. Lansmanından bu yana dönüşüm oranımız %25 arttı."
    },
    name: {
      en: "David Chen",
      ru: "Давид Чен",
      tr: "David Chen"
    },
    position: {
      en: "CEO, StyleShop",
      ru: "Генеральный директор, StyleShop",
      tr: "CEO, StyleShop"
    },
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    id: 3,
    text: {
      en: "The bot developed for our event registration process streamlined everything. Attendees loved the smooth experience, and we saved countless hours of manual work. Highly recommended!",
      ru: "Бот, разработанный для нашего процесса регистрации на мероприятия, упорядочил все. Участникам понравился плавный опыт, и мы сэкономили бесчисленное количество часов ручной работы. Настоятельно рекомендую!",
      tr: "Etkinlik kayıt sürecimiz için geliştirilen bot her şeyi kolaylaştırdı. Katılımcılar sorunsuz deneyimi sevdi ve manuel çalışmadan sayısız saat tasarruf ettik. Kesinlikle tavsiye ederim!"
    },
    name: {
      en: "Michael Rodriguez",
      ru: "Михаил Родригес",
      tr: "Michael Rodriguez"
    },
    position: {
      en: "Event Manager, ConferencePro",
      ru: "Менеджер мероприятий, ConferencePro",
      tr: "Etkinlik Yöneticisi, ConferencePro"
    },
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
  }
];
