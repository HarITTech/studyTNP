import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "4",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Generating Interview Questions",
  "Generating Interview Answers",
  "Seamless Generating on Real Time Data",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Live AI Interviewer",
    text: "Enable the AI Interviewer to understand and respond to voice commands, making it easier to prepare for Interview.",
    date: "April 2025",
    status: "progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Upcoming Features 2",
    text: "Description",
    date: "May 2025",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Upcoming Feature 3",
    text: "description",
    date: "June 2025",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Upcoming Feature 4",
    text: "description",
    date: "July 2025",
    status: "progress",
    imageUrl: roadmap2,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Feature 1",
    // text: collabText,
  },
  {
    id: "1",
    title: "Feature 2",
  },
  {
    id: "2",
    title: "Feature 3",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Basic plan, personalized recommendations",
    price: "0",
    features: [
      "An basic AI Interviewer",
      "All the free video lectures",
      "All the free notes",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced plan, priority.",
    price: "9.99",
    features: [
      "An advanced AI Interviewer",
      "All paid Videos",
      "All the Resume formate and Tutorial",
      "All the Features of Basic plan",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom Enterprise, advanced.",
    price: null,
    features: [
      "An Advanced AI Interviewer",
      "All the Features of Premium",
      "All the super advanced Tutorial and Resume formate",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Aptitude Tutorial",
    text: "Lets student able to solve aptitude questions quickly ",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Interview Crack Tutorial",
    text: "Lets student quickly crack the tutorial",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Advanced Java",
    text: "Prepare for Advanced JAVA with our tutorials ",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Python",
    text: "Lets learn the python for futuristic project and dream job",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "MERN Stack",
    text: "Lets learn the latest technology MERN Stack",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "DSA",
    text: "The altimate tutorial for DSA to solve advanced problems.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
