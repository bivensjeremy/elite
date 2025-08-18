export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Adjusters Power Washing",
  description: "Serving all your exterior pressure washing needs.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Our Work",
      href: "/services/ourwork",
    },
    // {
    //   label: "Services",
    //   href: "/services",
    // },
    {
      label: "Contact Us",
      href: "/services/contact",
    },
    // {
    //   label: "About",
    //   href: "/about",
    // },
  ],
  links: {
    facebook: "https://www.facebook.com/adjusterspowerwashing",
    // twitter: "https://twitter.com/hero_ui",
  },
  company: {
    phone: '229-352-6684',
    address: '1151 Dawson Rd, Albany, GA 31707',
    email: 'torre@adjusterspowerwashing.com',
  }
};
