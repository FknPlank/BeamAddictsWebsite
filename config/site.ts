export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Beam Addict's Gaming",
  description: "This is a website about Beam Addict's Gaming",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Whitelist",
      href: "/Whitelist",
    },
    {
      label: "Events",
      href: "/Events",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    Whitelist: "https://nextui.org",
    discord: "https://discord.gg/WfJywRExFm",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
