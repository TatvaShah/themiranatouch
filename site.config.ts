import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "The Mirana Touch",
  tagline: "Elevated modern South Asian catering and statement grazing for Toronto and the GTA.",
  category: "Event catering",
  schemaType: "FoodEstablishment",
  area: "Toronto and GTA, ON",
  siteUrl: "https://themiranatouch.vercel.app",

  theme: {
    preset: "catering-events",
    colors: { accent: "#d4788a" },
    wordmark: "script",
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Toronto and the GTA",
    headline: "Modern South Asian catering that hosts with style",
    subhead:
      "Statement grazing, bold Indian flavours, and thoughtfully styled tables for weddings, showers, and birthdays. Enquire by Instagram DM.",
    images: [
      { src: "/images/post-5.jpg", alt: "Elevated Indian bites styled for an event" },
      { src: "/images/post-2.jpg", alt: "Diwali-inspired grazing table" },
      { src: "/images/post-6.jpg", alt: "Styled grazing table detail" },
    ],
    secondaryCta: { label: "See the tables", href: "#gallery" },
  },

  highlights: [
    "Modern South Asian catering",
    "Statement grazing tables",
    "Weddings, showers, birthdays",
    "Toronto and the GTA",
  ],

  about: {
    title: "Food, styling, and seamless hosting",
    body: [
      "The Mirana Touch brings elevated modern South Asian catering to Toronto and the GTA. Bold Indian flavours, creative fusion bites, and beautifully styled grazing tables become the heart of your celebration.",
      "From intimate gatherings to grand celebrations, enquire by Instagram DM with your date, guest count, and vision.",
    ],
    image: { src: "/images/post-4.jpg", alt: "Celebration table by The Mirana Touch" },
  },

  menu: {
    label: "Menu",
    title: "What we create",
    intro: "Every event is custom. Share your date, guest count, and style for a quote.",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for pricing on your date and guest count.",
    groups: [
      {
        title: "Catering and grazing",
        note: "Quoted for your event",
        items: [
          { name: "Statement grazing tables", description: "Styled tables designed to be part of the celebration." },
          { name: "Modern South Asian catering", description: "Familiar Indian favourites, reimagined for elevated hosting." },
          { name: "Weddings, showers, and birthdays", description: "Full event catering for celebrations across the GTA." },
        ],
      },
    ],
  },

  gallery: {
    title: "From recent celebrations",
    items: [
      {
        src: "/images/post-1.jpg",
        width: 941,
        height: 1671,
        alt: "GTA celebration catering still",
        caption: "Celebration hosting",
        href: "https://www.instagram.com/p/DeSASt7u985/",
      },
      {
        src: "/images/post-2.jpg",
        width: 1080,
        height: 1439,
        alt: "Diwali-inspired grazing experiences",
        caption: "Diwali grazing",
        href: "https://www.instagram.com/p/DeQEFd0Ebtb/",
      },
      {
        src: "/images/post-3.jpg",
        width: 790,
        height: 1402,
        alt: "Client celebration feedback still",
        caption: "Client moments",
        href: "https://www.instagram.com/p/DeLReHHuGuJ/",
      },
      {
        src: "/images/post-4.jpg",
        width: 1080,
        height: 1080,
        alt: "Styled celebration table",
        caption: "Styled setup",
        href: "https://www.instagram.com/p/Dd8ItxwxLBv/",
      },
      {
        src: "/images/post-5.jpg",
        width: 1080,
        height: 1356,
        alt: "Street soul couture bite presentation",
        caption: "Elevated bites",
        href: "https://www.instagram.com/p/Dd7ooVJlIzh/",
      },
      {
        src: "/images/post-6.jpg",
        width: 941,
        height: 1672,
        alt: "Grazing table styling glimpse",
        caption: "Table styling",
        href: "https://www.instagram.com/p/DdvZZHDR8xc/",
      },
      {
        src: "/images/post-7.jpg",
        width: 1080,
        height: 1343,
        alt: "Client celebration table",
        caption: "Real celebrations",
        href: "https://www.instagram.com/p/Ddj6_l1lOXn/",
      },
      {
        src: "/images/post-8.jpg",
        width: 941,
        height: 1672,
        alt: "Modern Indian catering table",
        caption: "Modern Indian catering",
        href: "https://www.instagram.com/p/DdePCgyxWCl/",
      },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "themiranatouch",
    embeds: [
      "https://www.instagram.com/p/DeQEFd0Ebtb/",
      "https://www.instagram.com/p/Dd7ooVJlIzh/",
      "https://www.instagram.com/p/DdePCgyxWCl/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Enquire by Instagram DM",
    intro:
      "Tap the button for a starter message with your date, guest count, and event style.",
    dmMessage:
      "Hi The Mirana Touch! I would like to enquire about catering.\nEvent date:\nGuest count / servings:\nEvent type (wedding, shower, birthday, other):\nStyle or menu idea:",
    links: [],
    note: "Serving Toronto and the GTA. Message to enquire about your celebration.",
  },

  reviews: { items: [] },

  faq: [
    {
      q: "How do I enquire?",
      a: "Send an Instagram DM with your event date, guest count, and style or menu idea.",
    },
    {
      q: "Where do you serve?",
      a: "The Mirana Touch serves Toronto and the GTA.",
    },
    {
      q: "What events do you cater?",
      a: "Weddings, showers, birthdays, and other celebrations with modern South Asian catering and statement grazing.",
    },
    {
      q: "Do you post prices online?",
      a: "Quotes depend on date, guest count, and styling. Share your details by DM for a personal quote.",
    },
  ],

  contact: {
    area: "Toronto and the GTA, Ontario",
    socials: [],
  },

  seo: {
    title: "The Mirana Touch | Modern South Asian catering in Toronto",
    description:
      "Elevated modern South Asian catering and statement grazing tables for weddings, showers, and birthdays in Toronto and the GTA. Enquire by Instagram DM.",
    keywords: [
      "South Asian catering Toronto",
      "grazing tables GTA",
      "Indian event catering Toronto",
      "The Mirana Touch",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
