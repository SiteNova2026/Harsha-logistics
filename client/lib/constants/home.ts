export const homeCopy = {
  hero: {
    imageAlt: "Container ship crossing open water",
    titleLines: ["Reliable global", "shipping solutions"],
    description:
      "Your strategic partner for delivering efficient logistics, freight forwarding, and cargo handling worldwide.",
    button: "Discover our services",
    brand: "HARSHAVARDHANI",
  },
  services: {
    eyebrow: "Our services",
    title: "Strength beyond borders",
    description:
      "An integrated suite of shipping, customs and freight forwarding services working in synergy to keep your cargo moving across oceans, skies and ports.",
  },
  trust: {
    eyebrow: "Why choose us",
    title: "Built on trust, proven at every port",
    description:
      "Importers and exporters stay with Harsha because we combine deep local knowledge with a genuinely global reach.",
    items: [
      {
        title: "Reliable Global Shipping",
        description:
          "Carrier allocations and agent partners on every major lane keep your cargo moving on schedule.",
      },
      {
        title: "Experienced Logistics Team",
        description:
          "Licensed customs brokers and route specialists with over a decade at India's busiest ports.",
      },
      {
        title: "End-to-End Solutions",
        description:
          "Booking, haulage, customs, warehousing and delivery managed under one accountable team.",
      },
      {
        title: "Global Network",
        description:
          "Trusted overseas agents across Asia and Europe giving you local expertise at both ends.",
      },
      {
        title: "Fast & Efficient Delivery",
        description:
          "Documents filed ahead of arrival so cargo clears quickly and demurrage stays at zero.",
      },
      {
        title: "Customer-Focused Service",
        description:
          "A named coordinator, transparent pricing and a 24/7 operations desk you can actually reach.",
      },
    ],
  },
  featured: {
    eyebrow: "All services",
    title: "Every mode, one partner",
    controlsLabel: "Featured services carousel controls",
    previous: "Previous featured service",
    next: "Next featured service",
    learnMore: "Learn more",
    getQuote: "Get Quote",
  },
  beyond: {
    eyebrow: "Other services",
    title: "Beyond the freight",
    description:
      "Consultancy, data and compliance support that helps Indian importers and exporters trade smarter not just ship faster.",
    controlsLabel: "Other services carousel controls",
    previous: "Previous other service",
    next: "Next other service",
    contactLink: "Talk to us",
    cardDescription:
      "Advisory and practical support for confident international trade.",
    items: [
      {
        title: "EXIM Consultancy Services",
        description:
          "Advisory on trade policy, incoterms, licensing and compliance for importers and exporters.",
        icon: "consultancy",
      },
      {
        title: "PAN India EXIM Data Services",
        description:
          "Market and shipment data across Indian ports to help you benchmark rates and find buyers.",
        icon: "data",
      },
      {
        title: "AEO Authorisation",
        description:
          "End-to-end support in obtaining and maintaining Authorised Economic Operator status.",
        icon: "aeo",
      },
      {
        title: "Commodity & Duty Supported Licenses",
        description:
          "Assistance with advance authorisation, EPCG, MEIS/RoDTEP and commodity-specific permits.",
        icon: "licensing",
      },
      {
        title: "Storage & Distribution Services",
        description:
          "Nationwide storage, order fulfilment and last-mile distribution for imported stock.",
        icon: "storage",
      },
    ],
  },
  network: {
    eyebrow: "Trusted partnership companies",
    title: "A network you can rely on",
    description:
      "Our overseas agents act as our own offices, handling bookings, customs and delivery at origin and destination.",
    partners: [
      {
        code: "TH",
        country: "Thailand",
        company: "BANGKOK FREIGHT ALLIANCE",
        description:
          "Ocean and air consolidation partner covering Laem Chabang and Bangkok airport, with weekly LCL boxes to Chennai.",
        locations: "Bangkok · Laem Chabang",
        route: "Laem Chabang → Chennai · Bangkok → Chennai (Air)",
      },
      {
        code: "ID",
        country: "Indonesia",
        company: "NUSANTARA CARGO SERVICES",
        description:
          "Full-service agent for FCL, LCL and customs brokerage across Tanjung Priok and Semarang.",
        locations: "Jakarta · Semarang",
        route: "Jakarta → Chennai · Semarang → Tuticorin",
      },
      {
        code: "RU",
        country: "Russia",
        company: "VOSTOK LOGISTICS GROUP",
        description:
          "Multimodal partner handling sea-rail movements and inland distribution across the Russian Federation.",
        locations: "Vladivostok · Moscow",
        route: "Vladivostok → Chennai · Moscow (Rail-Sea)",
      },
    ],
  },
  about: {
    eyebrow: "About",
    title: "Vision beyond limits",
    description:
      "From humble beginnings in Chennai's Armenian Street to a globally trusted maritime partner, our journey has always been fuelled by purpose, precision and integrity. We move cargo — and we move it with pride.",
    imageAlt: "Port cranes and containers at dusk",
    linkLabel: "Check more",
    linkHref: "/about",
    stats: [
      { value: "13+", label: "Years of service" },
      { value: "All", label: "Major Indian ports" },
      { value: "24/7", label: "Operations desk" },
    ],
  },
  explore: {
    links: [
      { label: "About", title: "Vision beyond limits", href: "/about" },
      { label: "Services", title: "Strength beyond borders", href: "/services" },
      { label: "Contact", title: "Connect beyond distance", href: "/contact" },
    ],
    linkLabel: "Check more",
  },
} as const;
