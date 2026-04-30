export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  size: 'small' | 'large';
  tags: string[];
  prototypeUrl?: string;
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
    prototypeUrl: "https://embed.figma.com/proto/XVVvhX8ahqBksg7Ffhy2D7/03_7%22-Touch?node-id=193-2242&viewport=5356%2C2401%2C0.46&scaling=contain&content-scaling=fixed&starting-point-node-id=84%3A6905&page-id=84%3A5718&embed-host=share"
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
    prototypeUrl: "https://embed.figma.com/proto/IdKktdDvGvQvaYIYDEVNT4/01_Enli8-VPU-GUI---Design?node-id=816-28881&p=f&scaling=contain&content-scaling=fixed&page-id=1%3A13&starting-point-node-id=816%3A28463&embed-host=share"
  },
  {
    id: "4",
    title: "Biorad Quantino",
    description: "Designing a high-precision diagnostic interface for laboratory workflows, built to minimize error and maximize throughput.",
    image: "/projects/quantino_hero.png",
    category: "Healthcare",
    size: "large",
    tags: ["Lab Diagnostics", "Healthcare UX", "Workflow"],
    prototypeUrl: "https://embed.figma.com/proto/C1ccZy6vyOQl75mAszj8Z4/05_Quantino_Relook?node-id=1-23115&p=f&scaling=contain&content-scaling=fixed&page-id=1%3A22063&starting-point-node-id=1%3A23115&embed-host=share"
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
    prototypeUrl: "https://embed.figma.com/proto/0madtudLOJvYCwpY5wuA2J/11_MI-Blogs-studio-v1.0?node-id=2208-14341&viewport=165%2C-5262%2C0.15&scaling=contain&content-scaling=fixed&starting-point-node-id=2208%3A14341&page-id=2208%3A6565&embed-host=share"
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
    prototypeUrl: "https://embed.figma.com/proto/zmJWr1VnmSy1nnOproWfgn/03---00-_-ZHEAL-1.0-and-REM42-v1.0--Prototypes-?node-id=2346-35003&p=f&scaling=contain&content-scaling=fixed&page-id=1070%3A3285&starting-point-node-id=2346%3A35003&embed-host=share"
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
    prototypeUrl: "https://embed.figma.com/proto/pZGF0oe0S8CTM3aT9n3kjq/01_Bajaj-Connect?node-id=1417-34810&viewport=2130%2C5610%2C0.23&scaling=contain&content-scaling=fixed&starting-point-node-id=1417%3A37201&page-id=1%3A6&embed-host=share"
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
  // Merged Case Studies
  {
    id: "cs1",
    title: "Philips Hospitality TV",
    description: "A centralized platform for managing large-scale display ecosystem.",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format&fit=crop",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["Enterprise", "Display Ecosystem", "Dashboard"],
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?page-id=3005%3A2&node-id=3005-9&p=f&viewport=377%2C-674%2C0.24&scaling=contain&content-scaling=fixed&starting-point-node-id=3005%3A9&embed-host=share"
  },
  {
    id: "cs2",
    title: "MINDSPARK",
    description: "Personalised learning platform enabling children to meaningfully advance at their own pace.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    category: "EdTech",
    size: "small",
    tags: ["EdTech", "Personalised Learning", "UX"],
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=65-3486&p=f&viewport=2617%2C4359%2C0.32&scaling=contain&content-scaling=fixed&starting-point-node-id=65%3A3486&page-id=0%3A1&embed-host=share"
  },
  {
    id: "cs3",
    title: "Isha Foundation",
    description: "Centralized platform for spiritual awareness.",
    image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=2070&auto=format&fit=crop",
    category: "Social Impact",
    size: "small",
    tags: ["Spiritual", "Platform", "Community"],
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=989-3281&p=f&viewport=764%2C2632%2C0.3&scaling=contain&content-scaling=fixed&starting-point-node-id=989%3A3281&page-id=989%3A3280&embed-host=share"
  },
  {
    id: "cs4",
    title: "TRAFORM",
    description: "Corporate travel and expense management tool.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["Enterprise", "SaaS", "Travel Management"],
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=989-4394&viewport=642%2C4957%2C0.47&scaling=contain&content-scaling=fixed&starting-point-node-id=989%3A4394&page-id=989%3A4391&embed-host=share"
  },
  {
    id: "cs5",
    title: "FUNDSINDIA",
    description: "Financial advisory and self-service investment portal.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["Fintech", "Investment", "Portal"],
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=989-4894&p=f&viewport=721%2C669%2C0.06&scaling=contain&content-scaling=fixed&starting-point-node-id=989%3A4894&page-id=989%3A4893&embed-host=share"
  },
  {
    id: "cs6",
    title: "TP Vision",
    description: "Convert handwritten notes into digital text.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["Productivity", "Digital Text", "UX"],
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=862-85&p=f&viewport=3079%2C5278%2C0.63&scaling=scale-down&content-scaling=fixed&starting-point-node-id=862%3A85&page-id=860%3A2&embed-host=share"
  },
  {
    id: "cs7",
    title: "Maventic",
    description: "Upgrading cloud based ERP solutions for retail and sales management.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["Retail", "ERP", "Sales Management"],
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=816-4787&p=f&viewport=881%2C810%2C0.08&scaling=scale-down&content-scaling=fixed&starting-point-node-id=816%3A4787&page-id=816%3A4786&embed-host=share"
  },
  {
    id: "cs8",
    title: "Jeevika",
    description: "Empowering Street Vendors, Protecting Their Rights.",
    image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=2070&auto=format&fit=crop",
    category: "Social Impact",
    size: "small",
    tags: ["Social Impact", "Empowerment", "Vendors"],
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=217-23355&viewport=2295%2C11031%2C0.34&scaling=scale-down&content-scaling=fixed&starting-point-node-id=217%3A23355&page-id=65%3A4000&embed-host=share"
  },
  {
    id: "cs9",
    title: "Mobicip",
    description: "Introducing Parental controls without the drama.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop",
    category: "EdTech",
    size: "small",
    tags: ["Parental Control", "Mobile App", "Family"],
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=3175-30339&p=f&viewport=623%2C7889%2C0.24&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3175%3A30339&page-id=5%3A3506&embed-host=share"
  },
  {
    id: "cs10",
    title: "HealthAsyst",
    description: "Clinic Management portal for Data Analytics and Reports Processing in healthcare domain.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    category: "Healthcare",
    size: "small",
    tags: ["Healthcare", "Data Analytics", "Portal"],
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=2-1174&p=f&viewport=659%2C516%2C0.03&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A1174&page-id=2%3A2&embed-host=share"
  },
  {
    id: "cs11",
    title: "Portico",
    description: "Human Resource and Payroll Management Suite.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["Enterprise", "HR", "Payroll"],
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=2-2400&p=f&viewport=795%2C7905%2C0.49&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2400&page-id=2%3A1727&embed-host=share"
  },
  {
    id: "cs12",
    title: "Angel Broking",
    description: "A mutual fund investment and tracking application that helps anyone to be an investor.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["Fintech", "Investment", "Mobile App"],
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=2-5569&p=f&viewport=789%2C9212%2C0.63&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A5569&page-id=2%3A3920&embed-host=share"
  },
  {
    id: "cs13",
    title: "Microsoft",
    description: "Dynamics 365 is a product line of enterprise resource planning (ERP) and customer relationship management (CRM) applications.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["Enterprise", "ERP", "CRM"],
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=2-11215&p=f&viewport=726%2C4510%2C0.56&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A11215&page-id=2%3A11214&embed-host=share"
  },
  {
    id: "cs14",
    title: "Young Artiste",
    description: "An art form learning application which provides real-time content and feedback.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
    category: "EdTech",
    size: "small",
    tags: ["EdTech", "Learning App", "Art"],
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=2-21&p=f&viewport=623%2C8846%2C0.55&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A21&page-id=2%3A3&embed-host=share"
  }
];
