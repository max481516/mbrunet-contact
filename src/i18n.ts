import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const STORAGE_KEY = "lng";
const SUPPORTED = ["en", "fr", "ru"] as const;

type SupportedLng = (typeof SUPPORTED)[number];

function getInitialLanguage(): SupportedLng {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved as SupportedLng)) return saved as SupportedLng;
  } catch {}

  if (typeof navigator !== "undefined") {
    const nav = navigator.language?.slice(0, 2).toLowerCase();
    if (SUPPORTED.includes(nav as SupportedLng)) return nav as SupportedLng;
  }
  return "en";
}

const resources = {
  en: {
    translation: {
      nav: {
        messageMe: "message me",
      },
      profileCard: {
        name: "Maximilien Brunet",
        location: "Dubai, UAE",
        description: "Dubai-based, trilingual (French, Russian, English) developer driven by one goal: helping businesses grow. I craft sleek, high-performance apps using cutting-edge tools and agile workflows to turn ideas into results.",
      },
      actionButtons: {
        saveContact: "save my contact",
        shareContact: "share my contact",
        downloadCV: "download my CV",
        ariaSave: "Save my contact as vCard",
        ariaShare: "Share my contact",
        ariaDownload: "Download my CV",
        shareTitle: "Maximilien Brunet — Freelance Web Developer",
        shareText:
          "Hi! This is my contact page. Let’s connect and discuss your project.",
        promptCopy: "Copy this link:",
        alertCopied: "Link copied to clipboard: {{url}}",
      },
      projectsCarousel: {
        title: "My recent projects",
        item1Desc: "Website for a video production company founded by cinema stuntmen, showcasing high-energy music videos, commercials, and action-packed brand campaigns.",
        item2Desc: "Promotional site for guided perfume tours, offering a journey through Paris’ finest boutiques, perfumery history, and olfactory discovery.",
        item3Title: "Wedding Website",
        item3Desc: "Custom wedding site featuring an interactive, real-time photo/video album where guests can share and engage with moments as they happen.",
      },
      portfolioLink: {
        paragraph:
          "If you want more information about me or my projects, please visit my main website by clicking on this",
        link: "link",
      },
      accordion: {
        title: "What do I offer?",
        item1Title: "Modern & Fast App Development",
        item1Content:
          "I build responsive, maintainable apps with today’s best practices—built to scale and convert.",
        item2Title: "User-Focused, Detail-Oriented Craft",
        item2Content:
          "Polished UX/UI with clear flows and micro-details that boost engagement and trust.",
        item3Title: "Agile delivery focused on business value",
        item3Content:
          "I use Scrum and agile practices to keep projects moving fast while ensuring every feature adds measurable value to your business.",
        item4Title: "Seamless multilingual collaboration",
        item4Content:
          "Fluent in English, French, and Russian for smooth communication with global teams and clients.",
      },
      contactMe: {
        paragraph:
          "Ready to bring your project to life? Get in touch via your preferred method or send me a direct message using this",
        form: "form",
      },
      contactDialog: {
        title: "Message me",
        description: "Fill the form below and I’ll get back to you.",
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@example.com",
        message: "Message",
        messagePlaceholder: "How can I help you?",
        submit: "Send message",
        sending: "Sending...",
        success: "Thanks! Your message has been sent.",
        errorFallback: "Submission failed",
        errorNetwork: "Network error",
      },
    },
  },
  fr: {
    translation: {
      nav: {
        messageMe: "me contacter",
      },
      profileCard: {
        name: "Maximilien Brunet",
        location: "Dubaï, Émirats Arabes Unis",
        description: "Développeur trilingue (français, russe, anglais) basé à Dubaï, animé par un objectif : aider les entreprises à croître. Je conçois des applications élégantes et performantes grâce aux outils les plus avancés et aux méthodes agiles pour transformer les idées en résultats.",
      },
      actionButtons: {
        saveContact: "sauvegarder mon contact",
        shareContact: "partager mon contact",
        downloadCV: "télécharger mon CV",
        ariaSave: "Sauvegarder mon contact en vCard",
        ariaShare: "Partager mon contact",
        ariaDownload: "Télécharger mon CV",
        shareTitle: "Maximilien Brunet — Développeur Web Freelance",
        shareText: "Bonjour ! Voici ma page de contact. Connectons-nous et discutons de votre projet.",
        promptCopy: "Copiez ce lien :",
        alertCopied: "Lien copié dans le presse-papiers : {{url}}",
      },
      projectsCarousel: {
        title: "Mes projets récents",
        item1Desc: "Site web pour une société de production vidéo fondée par des cascadeurs de cinéma, présentant des clips musicaux dynamiques, des publicités et des campagnes de marque pleines d’action.",
        item2Desc: "Site promotionnel pour des visites guidées parfumées, offrant un voyage à travers les plus belles boutiques de Paris, l’histoire de la parfumerie et la découverte olfactive.",
        item3Title: "Site de mariage",
        item3Desc: "Site de mariage personnalisé avec un album photo/vidéo interactif en temps réel où les invités peuvent partager et interagir avec les moments au fur et à mesure.",
      },
      portfolioLink: {
        paragraph: "Pour en savoir plus sur moi ou mes projets, veuillez visiter mon site principal en cliquant sur ce",
        link: "lien",
      },
      accordion: {
        title: "Ce que je propose",
        item1Title: "Développement d’applications modernes et rapides",
        item1Content: "Je crée des applications réactives et maintenables, conçues selon les meilleures pratiques actuelles — prêtes à évoluer et à convertir.",
        item2Title: "Conception centrée sur l’utilisateur et le détail",
        item2Content: "UX/UI soignée avec des parcours clairs et des micro-détails qui renforcent l’engagement et la confiance.",
        item3Title: "Livraison agile axée sur la valeur métier",
        item3Content: "J’utilise Scrum et les méthodes agiles pour avancer rapidement tout en garantissant que chaque fonctionnalité apporte une valeur mesurable à votre entreprise.",
        item4Title: "Collaboration multilingue fluide",
        item4Content: "Maîtrise de l’anglais, du français et du russe pour une communication fluide avec des équipes et clients internationaux.",
      },
      contactMe: {
        paragraph: "Prêt à donner vie à votre projet ? Contactez-moi par le moyen de votre choix ou envoyez-moi un message directement via ce",
        form: "formulaire",
      },
      contactDialog: {
        title: "Me contacter",
        description: "Remplissez le formulaire ci-dessous et je vous répondrai rapidement.",
        name: "Nom",
        namePlaceholder: "Votre nom",
        email: "Email",
        emailPlaceholder: "vous@exemple.com",
        message: "Message",
        messagePlaceholder: "Comment puis-je vous aider ?",
        submit: "Envoyer le message",
        sending: "Envoi...",
        success: "Merci ! Votre message a été envoyé.",
        errorFallback: "Échec de l’envoi",
        errorNetwork: "Erreur réseau",
      },
    },
  },
  ru: {
    translation: {
      nav: {
        messageMe: "написать мне",
      },
      profileCard: {
        name: "Максимилиан Брюне",
        location: "Дубай, ОАЭ",
        description: "Трехъязычный разработчик (французский, русский, английский) из Дубая с одной целью — помогать бизнесу расти. Создаю современные, высокопроизводительные приложения с использованием передовых инструментов и гибких методологий для превращения идей в результат.",
      },
      actionButtons: {
        saveContact: "сохранить мой контакт",
        shareContact: "поделиться моим контактом",
        downloadCV: "скачать моё резюме",
        ariaSave: "Сохранить мой контакт в формате vCard",
        ariaShare: "Поделиться моим контактом",
        ariaDownload: "Скачать моё резюме",
        shareTitle: "Максимилиен Брюне — Фриланс веб-разработчик",
        shareText: "Здравствуйте! Это моя страница контактов. Давайте свяжемся и обсудим ваш проект.",
        promptCopy: "Скопируйте эту ссылку:",
        alertCopied: "Ссылка скопирована в буфер обмена: {{url}}",
      },
      projectsCarousel: {
        title: "Мои недавние проекты",
        item1Desc: "Сайт для видеопродакшена, основанного кинокаскадёрами, с демонстрацией динамичных клипов, рекламы и насыщенных экшн-брендовых кампаний.",
        item2Desc: "Промо-сайт для парфюмерных туров, предлагающий путешествие по лучшим бутикам Парижа, истории парфюмерии и миру ароматов.",
        item3Title: "Свадебный сайт",
        item3Desc: "Индивидуальный свадебный сайт с интерактивным фото/видео альбомом в реальном времени, где гости могут делиться моментами и реагировать на них.",
      },
      portfolioLink: {
        paragraph: "Если вы хотите узнать больше обо мне или моих проектах, посетите мой основной сайт, нажав на эту",
        link: "ссылку",
      },
      accordion: {
        title: "Что я предлагаю",
        item1Title: "Современная и быстрая разработка приложений",
        item1Content: "Я создаю адаптивные, поддерживаемые приложения по лучшим практикам — готовые к масштабированию и высокой конверсии.",
        item2Title: "Ориентация на пользователя и внимание к деталям",
        item2Content: "Продуманный UX/UI с чёткой логикой и мелкими деталями, повышающими вовлечённость и доверие.",
        item3Title: "Agile-разработка с фокусом на ценность для бизнеса",
        item3Content: "Использую Scrum и гибкие методологии для быстрой работы, при этом каждая функция приносит измеримую ценность вашему бизнесу.",
        item4Title: "Плавное многоязычное взаимодействие",
        item4Content: "Свободно владею английским, французским и русским для эффективного общения с международными командами и клиентами.",
      },
      contactMe: {
        paragraph: "Готовы воплотить свой проект в жизнь? Свяжитесь со мной любым удобным способом или отправьте сообщение через эту",
        form: "форму",
      },
      contactDialog: {
        title: "Написать мне",
        description: "Заполните форму ниже, и я свяжусь с вами.",
        name: "Имя",
        namePlaceholder: "Ваше имя",
        email: "Электронная почта",
        emailPlaceholder: "you@example.com",
        message: "Сообщение",
        messagePlaceholder: "Чем я могу помочь?",
        submit: "Отправить сообщение",
        sending: "Отправка...",
        success: "Спасибо! Ваше сообщение отправлено.",
        errorFallback: "Ошибка отправки",
        errorNetwork: "Сетевая ошибка",
      },
    },
  },
} as const;

const initialLng = getInitialLanguage();

// Set initial <html lang> so CSS can react to language
try {
  document.documentElement.lang = initialLng;
} catch {}

i18n.use(initReactI18next).init({
  resources,
  lng: initialLng,
  fallbackLng: "en",
  supportedLngs: SUPPORTED as unknown as string[],
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng: string) => {
  try {
    localStorage.setItem(STORAGE_KEY, lng);
    // Keep <html lang> in sync for CSS language-specific rules
    document.documentElement.lang = lng;
  } catch {}
});

export default i18n;
