export type NavColumn = {
  heading: string;
  links: { label: string; href: string }[];
};

export type NavItem = {
  label: string;
  href: string;
  columns?: NavColumn[];
  badge?: string;
};

export const navItems: NavItem[] = [
  {
    label: "Kashmir",
    href: "/destinations/kashmir",
    columns: [
      {
        heading: "Explore Kashmir",
        links: [
          { label: "Destination Overview", href: "/destinations/kashmir" },
          { label: "All Kashmir Packages", href: "/packages?destination=kashmir" },
          { label: "Honeymoon in Kashmir", href: "/packages?destination=kashmir&category=honeymoon" },
          { label: "Family Tours", href: "/packages?destination=kashmir&category=family" },
        ],
      },
      {
        heading: "Popular Circuits",
        links: [
          { label: "Srinagar", href: "/destinations/kashmir#srinagar" },
          { label: "Gulmarg", href: "/destinations/kashmir#gulmarg" },
          { label: "Pahalgam", href: "/destinations/kashmir#pahalgam" },
          { label: "Sonamarg", href: "/destinations/kashmir#sonamarg" },
        ],
      },
    ],
  },
  {
    label: "Ladakh",
    href: "/destinations/ladakh",
    columns: [
      {
        heading: "Explore Ladakh",
        links: [
          { label: "Destination Overview", href: "/destinations/ladakh" },
          { label: "All Ladakh Packages", href: "/packages?destination=ladakh" },
          { label: "Adventure Tours", href: "/packages?destination=ladakh&category=adventure" },
          { label: "Luxury Escapes", href: "/packages?destination=ladakh&category=luxury" },
        ],
      },
      {
        heading: "Popular Circuits",
        links: [
          { label: "Leh", href: "/destinations/ladakh#leh" },
          { label: "Nubra Valley", href: "/destinations/ladakh#nubra" },
          { label: "Pangong Tso", href: "/destinations/ladakh#pangong" },
          { label: "Tso Moriri", href: "/destinations/ladakh#tsomoriri" },
        ],
      },
    ],
  },
  {
    label: "Packages",
    href: "/packages",
    columns: [
      {
        heading: "Browse by Style",
        links: [
          { label: "Trending Packages", href: "/packages?category=trending" },
          { label: "Best Selling Tours", href: "/packages?category=best-selling" },
          { label: "Luxury Holidays", href: "/packages?category=luxury" },
          { label: "Honeymoon Packages", href: "/packages?category=honeymoon" },
        ],
      },
      {
        heading: "Browse by Group",
        links: [
          { label: "Family Tours", href: "/packages?category=family" },
          { label: "Group Tours", href: "/packages?category=group" },
          { label: "Adventure Tours", href: "/packages?category=adventure" },
          { label: "Weekend Getaways", href: "/packages?category=weekend" },
        ],
      },
    ],
  },
  { label: "Activities", href: "/activities" },
  { label: "Hotels", href: "/hotels" },
  { label: "Blog", href: "/blog" },
  { label: "Flights", href: "/flights", badge: "New" },
  { label: "Custom Package Builder", href: "/customize" },
  { label: "Contact Us", href: "/contact" },
];

export const mobileNavExtras = [
  { label: "About Us", href: "/about" },
];
