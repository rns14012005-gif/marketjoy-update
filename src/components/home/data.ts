const MJ = "";
export const LIVE = "https://marketjoy.com";
const UP = `${LIVE}/wp-content/uploads`;

// Logo files live in /public. Colour version for light surfaces, white version for dark surfaces.
export const LOGO_URL = "/marketjoy-logo.png";
export const LOGO_WHITE_URL = "/marketjoy-logo-white.png";
export const BOOK_URL = "https://meetings.hubspot.com/curtis-bendt/inbound-round-robin-for-discovery-calls";
export const FREE_Q4_URL = "https://meetings.hubspot.com/curtis-bendt/data-building-only-meeting-link";

export type NavLeaf = { label: string; href: string };
export type NavItem = NavLeaf & { children?: NavLeaf[] };
export type NavGroup = { label: string; items: NavItem[] };

const MFG = `${MJ}/industries/manufacturing-lead-generation`;
const CON = `${MJ}/construction-lead-generation`;
const CHEM = `${MJ}/industries/chemical-lead-generation`;

export const NAV: NavGroup[] = [
  { label: "Products", items: [
    { label: "InfoJoy", href: `${MJ}/products/infojoy/` },
    { label: "Buyer Intent", href: `${MJ}/products/buyer-intent/` },
    { label: "Web Traffic Revealer", href: `${MJ}/products/web-traffic-revealer/` },
  ]},
  { label: "Services", items: [
    { label: "B2B Lead Generation", href: `${MJ}/b2b-lead-generation-services/` },
    { label: "Sales Facilitation", href: `${MJ}/salesfacilitation/` },
    { label: "List Building", href: `${MJ}/b2b-list-building-services/` },
    { label: "Digital Marketing", href: `${MJ}/digital-marketing/` },
    { label: "AI SEO Services", href: `${MJ}/ai-seo-services/` },
    { label: "Answer Engine Optimization", href: `${MJ}/answer-engine-optimization-services/` },
    { label: "Generative Engine Optimization", href: `${MJ}/generative-engine-optimization-services/` },
    { label: "Omnichannel Marketing", href: `${MJ}/omnichannel-marketing-services/` },
    { label: "Appointment Generation Setting", href: `${MJ}/appointment-generation-setting/` },
    { label: "Outbound SDR Services", href: `${MJ}/outbound-sdr-services/` },
    { label: "Finance & Accounting Outsourcing", href: `${MJ}/finance-and-accounting-outsourcing-services/` },
  ]},
  { label: "Industries", items: [
    { label: "Business | Consulting", href: `${MJ}/industries/business-consulting-lead-generation/` },
    { label: "Utilities", href: `${MJ}/industries/utilities-lead-generation/` },
    { label: "E-commerce", href: `${MJ}/industries/e-commerce-online-retail-lead-generation/` },
    { label: "Finance | Fintech", href: `${MJ}/industries/fintech-lead-generation/` },
    { label: "High Tech | Software", href: `${MJ}/industries/high-tech-and-software-lead-generation/` },
    { label: "Medical | Healthcare", href: `${MJ}/industries/medical-healthcare-lead-generation/` },
    { label: "Manufacturing", href: `${MFG}/`, children: [
      { label: "Chemical & Materials Manufacturing", href: `${MFG}/chemical-and-materials/` },
      { label: "Consumer Goods & Electronics", href: `${MFG}/consumer-goods-electronics/` },
      { label: "Contract & Custom Manufacturing", href: `${MFG}/contract-custom/` },
      { label: "Energy & Environmental Manufacturing", href: `${MFG}/energy-and-environmental/` },
      { label: "High-Tech & Precision Manufacturing", href: `${MFG}/high-tech-precision-manufacturing/` },
      { label: "Industrial & Heavy Manufacturing", href: `${MFG}/industrial-heavy-manufacturing/` },
      { label: "Food & Beverage Manufacturers", href: `${MFG}/food-beverage-manufacturers/` },
    ] },
    { label: "Construction", href: `${CON}/`, children: [
      { label: "Roofing Business", href: `${CON}/roofing/` },
      { label: "Flooring Business", href: `${CON}/flooring/` },
      { label: "Architecture Business", href: `${CON}/architecture/` },
      { label: "Paving Business", href: `${CON}/paving-lead-generation-services/` },
      { label: "Painting Business", href: `${CON}/painting-business/` },
      { label: "HVAC Business", href: `${CON}/hvac-lead-generation/` },
    ] },
    { label: "Environmental | Facilities", href: `${MJ}/industries/environmental-and-facilities-lead-generation/` },
    { label: "Manufacturing Suppliers", href: `${MJ}/industries/manufacturing-suppliers-lead-generation/` },
    { label: "Logistics | Supply Chain", href: `${MJ}/industries/shipping-and-supply-chain-logistics-lead-generation/` },
    { label: "Food & Beverages", href: `${MJ}/industries/food-and-beverages-lead-generation/` },
    { label: "Chemicals", href: `${CHEM}/`, children: [
      { label: "Basic & Commodity Chemical Companies", href: `${CHEM}/basic-and-commodity/` },
      { label: "Green & Sustainable Chemical Companies", href: `${CHEM}/green-sustainable-chemical-companies/` },
      { label: "Industrial Chemical Companies", href: `${CHEM}/industrial-chemical-companies/` },
      { label: "Pharmaceutical & Life Science Chemicals", href: `${CHEM}/pharmaceutical-life-science/` },
      { label: "Specialty Chemical Companies", href: `${CHEM}/specialty-chemical-companies/` },
    ] },
    { label: "Industrial Automation", href: `${MJ}/industries/industrial-automation-lead-generation/` },
    { label: "Renewable Energy", href: `${MJ}/industries/renewable-energy-lead-generation/` },
  ]},
  { label: "Success Stories", items: [
    { label: "Client Reviews", href: `${MJ}/client-reviews/` },
    { label: "Case Studies", href: `${MJ}/case-studies/` },
  ]},
  { label: "Resources", items: [
    { label: "Contact Us", href: `${MJ}/contact-us/` },
    { label: "Blog", href: `${MJ}/blog/` },
    { label: "FAQs", href: `${MJ}/faqs/` },
    { label: "Press Releases", href: `${MJ}/press-release/` },
    { label: "Industry News", href: `${MJ}/industry-news/` },
    { label: "JoyPedia", href: `${MJ}/joypedia/` },
    { label: "B2B Platforms", href: `${MJ}/b2b-sales-marketing-lead-generation-vendors/` },
  ]},
];
export const ALL_INDUSTRIES: NavItem[] = NAV.find((g) => g.label === "Industries")?.items ?? [];

export const ABOUT_URL = `${MJ}/about/`;

export const CLIENT_LOGOS = [
  { name: "Hitachi", src: `${UP}/2024/02/Hitachi-Logo.png` },
  { name: "Western Union", src: `${UP}/2025/07/westernunion.png` },
  { name: "Peet's Coffee", src: `${UP}/2024/02/Peets-Coffee-Logo.png` },
  { name: "110 Metalworks", src: `${UP}/2024/02/110-Metalworks-Logo.png` },
  { name: "Spacelabs Healthcare", src: `${UP}/2024/02/Spacelabs-Healthcare-Logo.png` },
  { name: "Certara", src: `${UP}/2024/06/Certara-Logo.png` },
  { name: "Client", src: `${UP}/2023/10/Group-33924.svg` },
  { name: "Client", src: `${UP}/2023/10/Group-33908.svg` },
  { name: "Client", src: `${UP}/2023/10/Group-33994.svg` },
  { name: "Client", src: `${UP}/2023/10/Group-33916.svg` },
];

export const SERVICES = [
  { key: "lead", title: "Lead Generation", desc: "Sales-qualified leads that are nurtured, verified, and ready for a conversation.", href: `${MJ}/b2b-lead-generation-services/` },
  { key: "sales", title: "Sales Facilitation", desc: "Support your sales team with qualified opportunities and real buyer insight.", href: `${MJ}/salesfacilitation/` },
  { key: "list", title: "List Building", desc: "Hand-curated contact lists built around your ideal customer profile.", href: `${MJ}/b2b-list-building-services/` },
  { key: "digital", title: "Digital Marketing", desc: "Amplify outreach with multichannel campaigns that reach decision-makers.", href: `${MJ}/digital-marketing/` },
  { key: "appt", title: "Appointment Setting", desc: "Book qualified sales meetings with prospects who match your ICP.", href: `${MJ}/appointment-generation-setting/` },
  { key: "sdr", title: "Outbound SDR", desc: "Dedicated email and calling SDRs acting as an extension of your team.", href: `${MJ}/outbound-sdr-services/` },
] as const;

export const INDUSTRIES = [
  { title: "Manufacturing", img: `${UP}/2025/08/Manufacturing.webp`, href: `${MJ}/industries/manufacturing-lead-generation/` },
  { title: "Consulting", img: `${UP}/2025/08/Consulting-.webp`, href: `${MJ}/industries/business-consulting-lead-generation/` },
  { title: "Healthcare & Life Sciences", img: `${UP}/2025/08/Healthcare-Life-Sciences.webp`, href: `${MJ}/industries/medical-healthcare-lead-generation/` },
  { title: "Financial Services", img: `${UP}/2025/08/Financial-Services-.webp`, href: `${MJ}/industries/fintech-lead-generation/` },
  { title: "Logistics", img: `${UP}/2025/08/Logistics.webp`, href: `${MJ}/industries/shipping-and-supply-chain-logistics-lead-generation/` },
  { title: "IT Software & Tech", img: `${UP}/2025/08/IT-Software-Tech-.webp`, href: `${MJ}/industries/high-tech-and-software-lead-generation/` },
];

export const PRODUCTS = [
  { key: "infojoy", title: "InfoJoy", desc: "The InfoJoy GTM engine, powered by 310M+ B2B profiles, to find and reach real decision-makers.", href: `${MJ}/products/infojoy/` },
  { key: "intent", title: "Buyer Intent", desc: "Identify and prioritize prospects actively researching solutions like yours, so your team engages at the right time.", href: `${MJ}/products/buyer-intent/` },
  { key: "traffic", title: "Web Traffic Revealer", desc: "Installed on your site to monitor and attribute traffic from outbound and inbound sources, giving clearer insight into buyer behaviour.", href: `${MJ}/products/web-traffic-revealer/` },
] as const;

export const FEATURES = [
  { key: "team", title: "Your Dedicated Growth Team", desc: "Growth Advisor, Strategist, Customer Success Manager, SDRs, script writers and tech ops." },
  { key: "launch", title: "Go Live in Just 15 Days", desc: "From kickoff to outreach in as little as 15 business days. No delays." },
  { key: "review", title: "Bi-Weekly Strategy Reviews", desc: "Live performance reviews, insight-driven adjustments and updated tactics." },
  { key: "guarantee", title: "100% SQL Guarantee", desc: "If results don't meet agreed expectations, we continue at no cost." },
] as const;

export const STORIES = [
  { industry: "Manufacturing", client: "Busch Vacuum", title: "159 Quality Leads in Just 8 Months", metric: "159", metricLabel: "quality leads", href: `${MJ}/case-studies/` },
  { industry: "Software", client: "Publicity.ai", title: "2 Major Deals Closed in Just 2 Months", metric: "2", metricLabel: "closed deals", href: `${MJ}/case-studies/` },
  { industry: "Finance", client: "Tiger Payment Solutions", title: "48 Leads in 5 Months", metric: "48", metricLabel: "leads", href: `${MJ}/case-studies/` },
];

export const TESTIMONIALS = [
  { quote: "We experienced qualified leads, excellent data-driven metrics, and were given input into the process – all within the first 4 weeks! Very professionally administered and communicated; well worth the investment in our sales and marketing efforts.", name: "Mark A. Kaiser", role: "President & CEO, Lindquist Machine Corporation" },
  { quote: "I've used 5 appointment setting services over the past few years, in addition to a couple of internal SDR's. This was the first team to be profitable almost immediately out of the gate. We had 2 deals close within 2 months of starting.", name: "Jason Labriola", role: "Head of Sales, Publicity.ai" },
  { quote: "MarketJoy has been a great asset to our marketing efforts. They are efficient, communicative, and have brought us great leads and resulting quotes and sales. They stay in contact and are very responsive.", name: "Harland Pond", role: "Vice President Sales, Busch LLC" },
];

export const FAQ_CATEGORIES = ["Basics", "Strategy", "Working with MarketJoy"] as const;
export const FAQS = [
  { q: "What is B2B lead generation?", cat: "Basics", a: "B2B lead generation is the process of identifying, attracting and engaging potential business customers that are highly interested in a company's products or services. The primary goal is to build a qualified sales pipeline for your sales team." },
  { q: "What are lead generation services?", cat: "Basics", a: "Outsourced solutions provided by specialized teams to help businesses find and connect with potential customers, using tools and data-driven outreach to deliver qualified leads directly to your sales pipeline." },
  { q: "What's the benefit of hiring a B2B lead generation company?", cat: "Strategy", a: "Access to revenue and sales expertise, advanced prospect targeting technology and proven campaign strategies — an extension of your team that accelerates market reach and delivers guaranteed sales-qualified leads." },
  { q: "When should I invest in a B2B lead generation service?", cat: "Strategy", a: "When your team struggles to fill the pipeline with qualified prospects, faces low lead-to-customer conversion, is stretched between prospecting and closing, wants to scale quickly, or needs guaranteed results and a clear ROI plan." },
  { q: "What are the different types of B2B lead generation services?", cat: "Basics", a: "Outbound email and calling campaigns, buyer intent data targeting, personalized prospecting and list curation, campaign optimization and analytics, appointment setting and sales facilitation, and content syndication." },
  { q: "What is the most effective channel for B2B lead generation?", cat: "Strategy", a: "It depends on your market and ICP, but a multi-channel approach of personalized email outreach and outbound calling, complemented by buyer intent data, is often the most successful." },
  { q: "Do you offer any guarantees?", cat: "Working with MarketJoy", a: "Yes. MarketJoy offers a unique 100% SQL Guarantee. If our results don't meet the agreed-upon expectations, we continue at no cost." },
  { q: "What makes MarketJoy different from other lead generation agencies?", cat: "Working with MarketJoy", a: "We define your ICP, use buyer intent data and hand-curated contacts, manage all outreach, run bi-weekly performance reviews and continuously optimize campaigns — with a transparent, ROI-focused culture." },
];

export const FOOTER = {
  services: (NAV[1]?.items ?? []).filter((i) => ["B2B Lead Generation","Sales Facilitation","List Building","Digital Marketing","Appointment Generation Setting","Outbound SDR Services"].includes(i.label)),
  products: NAV[0]?.items ?? [],
  industries: NAV[2]?.items ?? [],
  resources: [
    { label: "About Us", href: ABOUT_URL },
    { label: "Contact Us", href: `${MJ}/contact-us/` },
    { label: "Blog", href: `${MJ}/blog/` },
    { label: "FAQs", href: `${MJ}/faqs/` },
    { label: "JoyPedia", href: `${MJ}/joypedia/` },
    { label: "MarketJoy Vendors", href: `${MJ}/b2b-sales-marketing-lead-generation-vendors/` },
    { label: "Client Reviews", href: `${MJ}/client-reviews/` },
    { label: "Case Studies", href: `${MJ}/case-studies/` },
  ],
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/marketjoy-inc./" },
    { label: "YouTube", href: "https://www.youtube.com/@MarketJoy" },
    { label: "Facebook", href: "https://www.facebook.com/marketjoy" },
  ],
  privacy: `${MJ}/privacy-policy/`,
};

export const PILLARS = [
  { key: "guarantee", title: "100% Lead Guarantee" },
  { key: "team", title: "Team of up to six people" },
  { key: "setup", title: "No Setup Fees Ever" },
] as const;

export const ONBOARDING = [
  "Assigned Growth Team: PGS, CSM, Strategist & Tech Ops",
  "ICP Definition + Target Account Research",
  "Custom Cold Email + Call Script Development",
  "Domain Warming + Inbox Setup",
  "Launch Checklist & QA Review",
  "No Setup Fees",
];

export const TEAM_ROLES = [
  "Partner Growth Advisor (PGA)",
  "Partner Growth Strategist (PGS)",
  "Customer Success Manager (CSM)",
  "Email and Calling SDRs",
  "Content Writer & Script Developers",
  "Technical Operations and Delivery Experts",
];

export const BUNDLE = [
  { key: "traffic", title: "Website Traffic Revealer", desc: "Installed on your site to monitor and attribute traffic from outbound and inbound sources, giving you clearer insights into buyer behaviour." },
  { key: "ai", title: "AI Assistant", desc: "Trained on your sales and marketing materials to automatically qualify leads, answer FAQs, and book meetings even after hours." },
  { key: "intent", title: "Buyer Intent", desc: "Identify and prioritize prospects actively researching solutions like yours, helping your sales team engage high value opportunities at the right time." },
  { key: "unified", title: "Unified Insight", desc: "Behavioral data from the chatbot and pixel is integrated into our campaign strategy for next-level optimization." },
  { key: "managed", title: "Fully Managed", desc: "We handle the installation, training, testing, and reporting with no added work for your team." },
] as const;

export const RECOGNITION = [
  { name: "DesignRush", src: `${UP}/2025/09/designrush.png`, href: "https://www.designrush.com/agency/business-consulting/florida" },
  { name: "HubSpot", src: `${UP}/2025/09/hubspot.png`, href: "https://ecosystem.hubspot.com/marketplace/solutions/marketjoy" },
  { name: "Best B2B Company", src: `${UP}/2025/09/best-b2b-company.png`, href: "https://www.mobileappdaily.com/directory/digital-marketing-companies/b2b" },
  { name: "Clutch", src: `${UP}/2025/09/clutch-1024x728.png`, href: "https://clutch.co/profile/marketjoy" },
  { name: "G2", src: `${UP}/2025/09/G2.png`, href: "https://www.g2.com/products/marketjoy/reviews" },
];

export const BLOGS = [
  { title: "How to Close a Sales Deal: 9 Proven Strategies for B2B Sales Teams", href: `${LIVE}/how-to-close-a-sales-deal/` },
  { title: "How to Generate Sales Leads That Actually Convert Into B2B Opportunities", href: `${LIVE}/how-to-generate-sales-leads/` },
  { title: "Outsourced SDR Services for Logistics Companies: How to Build a Predictable Sales Pipeline", href: `${LIVE}/outsourced-sdr-services-logistics-companies/` },
];
