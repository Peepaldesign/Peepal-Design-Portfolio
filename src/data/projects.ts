export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'Automotive' | 'Healthcare' | 'Industrial & Agri-Tech' | 'Enterprise & Fintech' | 'EdTech';
  size: 'small' | 'large';
  tags: string[];
  prototypeUrl?: string;
}

const dummyProto = "https://embed.figma.com/proto/IdKktdDvGvQvaYIYDEVNT4/01_Enli8-VPU-GUI---Design?node-id=844-27066&p=f&viewport=-145%2C1210%2C0.02&scaling=contain&content-scaling=fixed&starting-point-node-id=816%3A28881&show-proto-sidebar=1&page-id=1%3A13&embed-host=share";

export const projects: Project[] = [
  // Group 1: Large on Left
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
  
  // Group 2: Large on Right
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

  // Group 3: Large on Left
  {
    id: "12",
    title: "Mera Bajaj / Connect",
    description: "A comprehensive mobile ecosystem for Bajaj owners, integrating vehicle health, service tracking, and connected riding features.",
    image: "/projects/mera_bajaj.png",
    category: "Automotive",
    size: "large",
    tags: ["Mobile UX", "Automotive", "Connected Tech"],
    prototypeUrl: "https://embed.figma.com/proto/pZGF0oe0S8CTM3aT9n3kjq/01_Bajaj-Connect?node-id=1417-34810&viewport=2130%2C5610%2C0.23&scaling=contain&content-scaling=fixed&starting-point-node-id=1417%3A37201&page-id=1%3A6&embed-host=share"
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

  // Group 4: Large on Right
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
    id: "14",
    title: "ARMMAN",
    description: "Tech-driven healthcare intervention for maternal and child health, designed to empower rural communities with life-saving information.",
    image: "/projects/armman.png",
    category: "Healthcare",
    size: "large",
    tags: ["Social Impact", "Healthcare", "Mobile UI"],
    prototypeUrl: "https://embed.figma.com/proto/CzwYibJOko8HZT0bVwsYoX/02_ARMMAN-Prototype?node-id=510-929&viewport=-6320%2C1704%2C0.23&scaling=contain&content-scaling=fixed&starting-point-node-id=510%3A929&page-id=442%3A10228&embed-host=share"
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
  }
];
