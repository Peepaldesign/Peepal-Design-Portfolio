export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'Automotive' | 'Healthcare' | 'Industrial & Agri-Tech' | 'Enterprise & Fintech' | 'EdTech' | 'Social Impact';
  size: 'small' | 'large';
  tags: string[];
  prototypeUrl?: string;
  caseStudyUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Bajaj Chetak",
    description: "Reimagining the legendary Chetak as a premium electric vehicle, focusing on a connected mobile ecosystem and intuitive riding controls.",
    image: "/projects/chetak_hero.png",
    category: "Automotive",
    size: "large",
    tags: ["EV App", "Mobile UX", "IoT"],
    prototypeUrl: "https://embed.figma.com/proto/XVVvhX8ahqBksg7Ffhy2D7/03_7%22-Touch?node-id=193-2242&viewport=5356%2C2401%2C0.46&scaling=contain&content-scaling=fixed&starting-point-node-id=84%3A6905&page-id=84%3A5718&embed-host=share",
    caseStudyUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=859-14&p=f&viewport=512%2C2728%2C0.14&scaling=scale-down&content-scaling=fixed&starting-point-node-id=859%3A14&page-id=859%3A2&embed-host=share"
  },
  {
    id: "2",
    title: "Bajaj Dominar",
    description: "Designing a robust touring platform for the Dominar 400, empowering long-distance riders with community features and trip analytics.",
    image: "/projects/dominar_hero.png",
    category: "Automotive",
    size: "small",
    tags: ["Touring", "Connect", "Community"],
    prototypeUrl: "https://embed.figma.com/proto/k1BZKgmAnTCf8yvDjnGkAO/BA02_Internal-Design-File?node-id=10030-59252&scaling=contain&content-scaling=fixed&page-id=1608%3A10166&starting-point-node-id=10030%3A57669&embed-host=share"
  },
  {
    id: "3",
    title: "Biorad Enli8",
    description: "A specialized GUI for endoscopy video processing units, standardizing medical procedures and enhancing surgeon situational awareness.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    category: "Healthcare",
    size: "small",
    tags: ["Medical UI", "Endoscopy", "Standardization"],
    prototypeUrl: "https://embed.figma.com/proto/IdKktdDvGvQvaYIYDEVNT4/01_Enli8-VPU-GUI---Design?node-id=816-28881&p=f&scaling=contain&content-scaling=fixed&page-id=1%3A13&starting-point-node-id=816%3A28463&embed-host=share",
    caseStudyUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=929-6237&p=f&viewport=-191%2C5218%2C0.49&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=929%3A6237&page-id=906%3A200&embed-host=share"
  },
  {
    id: "4",
    title: "Biorad Quantino",
    description: "Designing a high-precision diagnostic interface for laboratory workflows, built to minimize error and maximize throughput.",
    image: "/projects/quantino_hero.png",
    category: "Healthcare",
    size: "large",
    tags: ["Lab Diagnostics", "Healthcare UX", "Workflow"],
    prototypeUrl: "https://embed.figma.com/proto/C1ccZy6vyOQl75mAszj8Z4/05_Quantino_Relook?node-id=1-23115&p=f&scaling=contain&content-scaling=fixed&page-id=1%3A22063&starting-point-node-id=1%3A23115&embed-host=share",
    caseStudyUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=989-3578&p=f&viewport=715%2C4065%2C0.36&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=989%3A3578&page-id=989%3A3576&embed-host=share"
  },
  {
    id: "5",
    title: "Arable POC",
    description: "Visualizing complex agri-tech data through an IoT dashboard, enabling farmers to make real-time decisions based on crop and climate health.",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1974&auto=format&fit=crop",
    category: "Industrial & Agri-Tech",
    size: "small",
    tags: ["Agri-Tech", "IoT Data", "POC"],
    prototypeUrl: "https://embed.figma.com/proto/Vr2wQGD6AT3JDjfx2l3ATq/01_Arable-POC-v1?node-id=107-1133&p=f&viewport=761%2C-635%2C0.11&scaling=contain&content-scaling=fixed&starting-point-node-id=107%3A1133&page-id=35%3A4&embed-host=share"
  },
  {
    id: "6",
    title: "Milestone Internet",
    description: "A comprehensive SaaS platform for hospitality digital marketing, optimizing hotel asset management and conversion tracking.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["Hospitality", "Enterprise SaaS", "B2B"],
    prototypeUrl: "https://embed.figma.com/proto/0madtudLOJvYCwpY5wuA2J/11_MI-Blogs-studio-v1.0?node-id=2208-14341&viewport=165%2C-5262%2C0.15&scaling=contain&content-scaling=fixed&starting-point-node-id=2208%3A14341&page-id=2208%3A6565&embed-host=share",
    caseStudyUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=816-2874&p=f&viewport=699%2C876%2C0.05&scaling=scale-down&content-scaling=fixed&page-id=816%3A2699&starting-point-node-id=816%3A2874&embed-host=share"
  },
  {
    id: "7",
    title: "TPV Genius",
    description: "Designing a high-traffic retail payment experience for smart displays, focusing on speed, security, and global accessibility.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["Fintech", "Retail POS", "Smart Display"],
    prototypeUrl: "https://embed.figma.com/proto/MZDTpQB2cMfeqPvyTI5V5X/EIL2_04_TPV-PPDS-Dev-Delivery_Ext?node-id=3819-23020&viewport=644%2C1370%2C0.18&scaling=contain&content-scaling=fixed&starting-point-node-id=3819%3A23020&page-id=3252%3A7577&embed-host=share"
  },
  {
    id: "8",
    title: "Rem42",
    description: "AI-powered sleep coaching ecosystem designed for elite athletes, translating biometric data into actionable recovery insights.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop",
    category: "Healthcare",
    size: "small",
    tags: ["AI Coaching", "Wellness App", "Biometrics"],
    prototypeUrl: "https://embed.figma.com/proto/zmJWr1VnmSy1nnOproWfgn/03---00-_-ZHEAL-1.0-and-REM42-v1.0--Prototypes-?node-id=2346-35003&p=f&scaling=contain&content-scaling=fixed&page-id=1070%3A3285&starting-point-node-id=2346%3A35003&embed-host=share",
    caseStudyUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=816-51&p=f&viewport=978%2C1028%2C0.06&scaling=scale-down&content-scaling=fixed&starting-point-node-id=816%3A51&page-id=816%3A2&embed-host=share"
  },
  {
    id: "9",
    title: "AXS",
    description: "Streamlining the digital ticketing journey for global venues, ensuring a friction-free experience from discovery to entry.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["Ticketing", "Events", "User Flow"],
    prototypeUrl: "https://embed.figma.com/proto/AZVar7CMaQ8X1WsXBMZpx4/02_AXS?node-id=1172-2069&p=f&scaling=contain&content-scaling=fixed&page-id=1172%3A730&embed-host=share"
  },
  {
    id: "10",
    title: "Bobcat",
    description: "Designing the Human-Machine Interface (HMI) for industrial heavy equipment, built for durability and mission-critical reliability.",
    image: "https://images.unsplash.com/photo-1533923156502-be31530547c4?q=80&w=1974&auto=format&fit=crop",
    category: "Industrial & Agri-Tech",
    size: "small",
    tags: ["Industrial HMI", "Heavy Equip", "Safety UX"],
    prototypeUrl: "https://embed.figma.com/proto/zAsnKDA7b1OhAHZSCnpWrt/P21_Bobcat-Excavators?node-id=2768-9312&p=f&scaling=contain&content-scaling=fixed&page-id=2768%3A9311&embed-host=share"
  },
  {
    id: "11",
    title: "Infinity Learn",
    description: "An adaptive learning platform that institutionalizes pedagogy through personalized assessment and learning paths for K-12.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    category: "EdTech",
    size: "small",
    tags: ["EdTech", "LMS", "Adaptive Learning"],
    prototypeUrl: "https://embed.figma.com/proto/viy3szH5s8w8cg0uF4SMdh/13_Login-Sign-Up?node-id=1637-69194&viewport=-1296%2C114%2C0.09&scaling=contain&content-scaling=fixed&starting-point-node-id=1637%3A68743&page-id=0%3A1&embed-host=share"
  },
  {
    id: "12",
    title: "Mera Bajaj / Connect",
    description: "A comprehensive mobile ecosystem for Bajaj owners, integrating vehicle health, service tracking, and connected riding features.",
    image: "/projects/mera_bajaj.png",
    category: "Automotive",
    size: "small",
    tags: ["Mobile UX", "Automotive", "Connected Tech"],
    prototypeUrl: "https://embed.figma.com/proto/pZGF0oe0S8CTM3aT9n3kjq/01_Bajaj-Connect?node-id=1417-34810&viewport=2130%2C5610%2C0.23&scaling=contain&content-scaling=fixed&starting-point-node-id=1417%3A37201&page-id=1%3A6&embed-host=share",
    caseStudyUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=988-2889&p=f&viewport=272%2C859%2C0.03&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=988%3A2889&page-id=868%3A2&embed-host=share"
  },
  {
    id: "13",
    title: "MP Risk",
    description: "Enterprise-grade risk management platform for financial institutions, featuring complex data visualization and predictive analytics.",
    image: "/projects/mp_risk.png",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["Fintech", "Risk Management", "Dashboard"],
    prototypeUrl: "https://embed.figma.com/proto/COkQHDwxbtpe5ngu591eEc/02_MP-Risk_Cycle-1?node-id=5004-7247&viewport=1265%2C-1827%2C0.11&scaling=contain&content-scaling=fixed&starting-point-node-id=5004%3A7247&page-id=5004%3A4560&embed-host=share"
  },
  {
    id: "14",
    title: "ARMMAN",
    description: "Tech-driven healthcare intervention for maternal and child health, designed to empower rural communities with life-saving information.",
    image: "/projects/armman.png",
    category: "Healthcare",
    size: "small",
    tags: ["Social Impact", "Healthcare", "Mobile UI"],
    prototypeUrl: "https://embed.figma.com/proto/CzwYibJOko8HZT0bVwsYoX/02_ARMMAN-Prototype?node-id=510-929&viewport=-6320%2C1704%2C0.23&scaling=contain&content-scaling=fixed&starting-point-node-id=510%3A929&page-id=442%3A10228&embed-host=share"
  },
  {
    id: "tp-vision",
    title: "TP Vision",
    description: "Convert handwritten notes into digital text.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["AI", "OCR", "Productivity"],
    caseStudyUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=862-85&p=f&viewport=3079%2C5278%2C0.63&scaling=scale-down&content-scaling=fixed&starting-point-node-id=862%3A85&page-id=860%3A2&embed-host=share"
  },
  {
    id: "maventic",
    title: "Maventic",
    description: "Upgrading cloud based ERP solutions for retail and sales management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["ERP", "Cloud", "Retail"],
    caseStudyUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=816-4787&p=f&viewport=881%2C810%2C0.08&scaling=scale-down&content-scaling=fixed&starting-point-node-id=816%3A4787&page-id=816%3A4786&embed-host=share"
  },
  {
    id: "jeevika",
    title: "Jeevika",
    description: "Empowering Street Vendors, Protecting Their Rights.",
    image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=800",
    category: "Social Impact" as any,
    size: "small",
    tags: ["Mobile App", "Social Justice"],
    caseStudyUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=217-23355&viewport=2295%2C11031%2C0.34&scaling=scale-down&content-scaling=fixed&starting-point-node-id=217%3A23355&page-id=65%3A4000&embed-host=share"
  },
  {
    id: "mobicip",
    title: "Mobicip",
    description: "Introducing Parental controls without the drama.",
    image: "https://images.unsplash.com/photo-1544391496-1ca7c974957e?auto=format&fit=crop&q=80&w=800",
    category: "EdTech",
    size: "small",
    tags: ["Parental Control", "Safety", "Mobile"],
    caseStudyUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=3175-30339&p=f&viewport=623%2C7889%2C0.24&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3175%3A30339&page-id=5%3A3506&embed-host=share"
  },
  {
    id: "healthasyst",
    title: "HealthAsyst",
    description: "Clinic Management portal for Data Analytics and Reports Processing in healthcare domain.",
    image: "https://images.unsplash.com/photo-1504813184591-01592f252127?auto=format&fit=crop&q=80&w=800",
    category: "Healthcare",
    size: "small",
    tags: ["Clinic Management", "Data Analytics"],
    caseStudyUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=2-1174&p=f&viewport=659%2C516%2C0.03&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A1174&page-id=2%3A2&embed-host=share"
  },
  {
    id: "portico",
    title: "Portico",
    description: "Human Resource and Payroll Management Suite.",
    image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["HRMS", "Payroll", "B2B"],
    caseStudyUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=2-2400&p=f&viewport=795%2C7905%2C0.49&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2400&page-id=2%3A1727&embed-host=share"
  },
  {
    id: "angel-broking",
    title: "Angel Broking",
    description: "A mutual fund investment and tracking application that helps anyone to be an investor.",
    image: "https://images.unsplash.com/photo-1611974714608-3560e07a7a9c?auto=format&fit=crop&q=80&w=800",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["Investment", "Mobile App", "Stock Market"],
    caseStudyUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=2-5569&p=f&viewport=789%2C9212%2C0.63&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A5569&page-id=2%3A3920&embed-host=share"
  },
  {
    id: "microsoft-case",
    title: "Microsoft",
    description: "Dynamics 365 is a product line of enterprise resource planning (ERP) and customer relationship management (CRM) applications.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["ERP", "CRM", "Enterprise"],
    caseStudyUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=2-11215&p=f&viewport=726%2C4510%2C0.56&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A11215&page-id=2%3A11214&embed-host=share"
  },
  {
    id: "young-artiste",
    title: "Young Artiste",
    description: "An art form learning application which provides real-time content and feedback.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
    category: "EdTech",
    size: "small",
    tags: ["Art Learning", "Feedback", "Mobile"],
    caseStudyUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=2-21&p=f&viewport=623%2C8846%2C0.55&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A21&page-id=2%3A3&embed-host=share"
  },
  {
    id: "philips-hospitality",
    title: "Philips Hospitality TV",
    description: "A centralized platform for managing large-scale display ecosystem",
    image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=800",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["SaaS", "Dashboard", "IoT"],
    caseStudyUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?page-id=3005%3A2&node-id=3005-9&p=f&viewport=377%2C-674%2C0.24&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3005%3A9&embed-host=share"
  },
  {
    id: "mindspark",
    title: "MINDSPARK",
    description: "Personalised learning platform enabling children to meaningfully advance at their own pace.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    category: "EdTech",
    size: "small",
    tags: ["Learning", "K-12", "Adaptive"],
    caseStudyUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=65-3486&p=f&viewport=2617%2C4359%2C0.32&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=65%3A3486&page-id=0%3A1&embed-host=share"
  },
  {
    id: "isha-foundation",
    title: "Isha Foundation",
    description: "Centralized platform for spiritual awareness.",
    image: "https://images.unsplash.com/photo-1545208393-596371ba9a3c?auto=format&fit=crop&q=80&w=800",
    category: "Social Impact" as any,
    size: "small",
    tags: ["Web Portal", "Non-Profit"],
    caseStudyUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=989-3281&p=f&viewport=764%2C2632%2C0.3&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=989%3A3281&page-id=989%3A3280&embed-host=share"
  },
  {
    id: "traform",
    title: "TRAFORM",
    description: "Corporate travel and expense management tool.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80&w=800",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["Expense Management", "Fintech"],
    caseStudyUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=989-4394&viewport=642%2C4957%2C0.47&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=989%3A4394&page-id=989%3A4391&embed-host=share"
  },
  {
    id: "fundsindia",
    title: "FUNDSINDIA",
    description: "Financial advisory and self-service investment portal.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["Investment", "Portfolio Management"],
    caseStudyUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=989-4894&p=f&viewport=721%2C669%2C0.06&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=989%3A4894&page-id=989%3A4893&embed-host=share"
  }
];
