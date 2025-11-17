export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Elite Lawn - DRAFT Blueprint Web Dev",
  description: "Professional Web Development Services",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/pages/about"
    },
    {
      label: "Services",
      href: "/pages/services",
    },
    {
      label: "Gallery",
      href: "/pages/gallery",
    },
    {
      label: "Contact",
      href: "/pages/contact",
    },
  ],
  links: {
    facebook: "https://www.facebook.com/bivensblueprint",
    instagram: "https://www.instagram.com/bivensjeremy",
    business: "https://www.bivensblueprint.com",
    linkedin: "https://www.linkedin.com/in/bivensjeremy",
    business2: "https://www.blueprintwebdev.com"
  },
  company: {
    phone: "810-441-1742",
    address: ["779 Fiveash Rd", "Oakfield, GA 31772"],
    email: "elitelawnsolutiohn@gmail.com",
    lead: "https://bivensblueprintllc.hbportal.co/public/blueprintwebdevleadform"
  }
};
