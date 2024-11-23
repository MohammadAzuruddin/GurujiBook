import {
  FaGlobe,
  FaExchangeAlt,
  FaMapMarkedAlt,
  FaDollarSign,
  FaLightbulb,
  FaHandsHelping,
} from "react-icons/fa";
export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#offers", label: "Offers" },
  { href: "#contact-us", label: "Contact Us" },
];
export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const services = [
  {
    title: "Find Your Bet",
    description:
      "Explore a wide range of betting options to find your perfect match.",
    icon: <FaGlobe />,
  },
  {
    title: "Seamless Transactions",
    description:
      "Effortlessly place bets and manage your account with our secure platform.",
    icon: <FaExchangeAlt />,
  },
  {
    title: "Live Betting Experience",
    description:
      "Enjoy the thrill of live betting with real-time odds and updates.",
    icon: <FaMapMarkedAlt />,
  },
  {
    title: "Expert Analysis",
    description:
      "Get valuable insights and predictions from our team of betting experts.",
    icon: <FaDollarSign />,
  },
  {
    title: "Personalized Recommendations",
    description:
      "Receive tailored betting suggestions based on your preferences.",
    icon: <FaLightbulb />,
  },
  {
    title: "Secure and Reliable",
    description: "Bet with confidence knowing your information is protected.",
    icon: <FaHandsHelping />,
  },
];

export const additionalInfo = [
  {
    title: "Our Bettors",
    description: "Trusted by thousands of bettors across the region.",
  },
  {
    title: "Monthly Bettors Connected",
    description: "Connecting with over 500 new bettors every month.",
  },
  {
    title: "New Betting Options",
    description: "Access to fresh and updated betting options every day.",
  },
];

export const footerAPI = {
  titles: [
    { title: " Guruji Book" },
    { title: "Get Help" },
    { title: "Company" },
  ],
  links: [
    [{ link: "Contact Us" }, { link: "FAQ" }, { link: "Sustainability" }],
    [{ link: "News" }, { link: "Careers" }, { link: "Investors" }],
    [{ link: "Gift Cards" }, { link: "Blog" }, { link: "Send Us Feeback" }],
  ],
};
