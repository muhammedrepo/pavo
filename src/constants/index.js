import {
  featuresIcon1,
  featuresIcon2,
  featuresIcon3,
  featuresIcon4,
  featuresIcon5,
  featuresIcon6,
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
  testimonial5,
  testimonial6,
} from "../assets";

export const menuItems = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "details",
    title: "Details",
  },
  {
    id: "pricing",
    title: "Pricing",
  },
  {
    id: "drop",
    title: "Drop",
    submenu: [
      {
        url: "/article",
        title: "Article Details",
      },
      {
        url: "/terms",
        title: "Terms",
      },
      {
        url: "/privacy",
        title: "Privacy",
      },
    ],
  },
  {
    id: "download",
    title: "Download",
  },
];

export const socials = [
  {
    url: "facebook.com",
    icon: <i className="fab fa-facebook-f fa-stack-1x"></i>,
  },
  {
    url: "twitter.com",
    icon: <i className="fab fa-twitter fa-stack-1x"></i>,
  },
  {
    url: "pinterest.com",
    icon: <i className="fab fa-pinterest-p fa-stack-1x"></i>,
  },
  {
    url: "instagram.com",
    icon: <i className="fab fa-instagram fa-stack-1x"></i>,
  },
  {
    url: "youtube.com",
    icon: <i className="fab fa-youtube fa-stack-1x"></i>,
  },
];

export const features = [
  {
    id: "feature-1",
    icon: featuresIcon1,
    title: "Platform Integration",
    content:
      "You sales force can use the app on any smartphone platform without compatibility issues",
  },
  {
    id: "feature-2",
    icon: featuresIcon2,
    title: "Easy On Resources",
    content:
      "Works smoothly even on older generation hardware due to our optimization efforts",
  },
  {
    id: "feature-3",
    icon: featuresIcon3,
    title: "Great Performance",
    content:
      "Optimized code and innovative technology insure no delays and ultra-fast responsiveness",
  },
  {
    id: "feature-4",
    icon: featuresIcon4,
    title: "Multiple Languages",
    content:
      "Choose from one of the 40 languages that come pre-installed and start selling smarter",
  },
  {
    id: "feature-5",
    icon: featuresIcon5,
    title: "Free Updates",
    content:
      "Don't worry about future costs, pay once and receive all future updates at no extra cost",
  },
  {
    id: "feature-6",
    icon: featuresIcon6,
    title: "Community Support",
    content:
      "Register the app and get access to knowledge and ideas from the Pavo online community",
  },
];

export const reviews = [
  {
    id: "slide-1",
    img: testimonial1,
    content:
      "It's been so fun to work with Pavo, I've managed to integrate it properly into my business flow and it's great",
    name: "Jude Thorn - Designer",
  },
  {
    id: "slide-2",
    img: testimonial2,
    content:
      "We were so focused on launching as many campaigns as possible that we've forgotten to target our loyal customers",
    name: "Roy Smith - Developer",
  },
  {
    id: "slide-3",
    img: testimonial3,
    content:
      "I've been searching for a tool like Pavo for so long. I love the reports it generates and the amazing high accuracy",
    name: "Marsha Singer - Marketer",
  },
  {
    id: "slide-4",
    img: testimonial4,
    content:
      "Searching for a great prototyping and layout design app was difficult but thankfully I found app suite quickly",
    name: "Lindsay Spice - Marketer",
  },
  {
    id: "slide-5",
    img: testimonial5,
    content:
      "We've been waiting for a powerful piece of software that can help businesses manage their marketing projects",
    name: "Tim Shaw - Designer",
  },
  {
    id: "slide-6",
    img: testimonial6,
    content:
      "The app support team is amazing. They've helped me with some issues and I am so grateful to the entire team",
    name: "Ann Blake - Developer",
  },
];

export const cards = [
  {
    id: "card-1",
    title: "STANDARD",
    price: 29,
    content: "This basic package covers the marketing needs of small startups",

    lists: [
      {
        first: "List building and relations",
        second: "Seamless platform integration",
        third: "Great performance on devices",
        fourth: "Community support and videos",
      },
    ],
  },
  {
    id: "card-2",
    title: "ADVANCE",
    price: 39,
    content: "This is a more advanced package suited for medium companies",

    lists: [
      {
        first: "Second building and relations",
        second: "Seamless platform integration",
        third: "Great performance on devices",
        fourth: "Community support and videos",
      },
    ],
  },
  {
    id: "card-3",
    title: "COMPLETE",
    price: 49,
    content: "This is a comprehensive package designed for big organizations",

    lists: [
      {
        first: "Third building and relations",
        second: "Seamless platform integration",
        third: "Great performance on devices",
        fourth: "Community support and videos",
      },
    ],
  },
];
