export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  prototypeUrl?: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "tp-vision",
    title: "TP Vision",
    description: "Convert handwritten notes into digital text.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800",
    category: "Enterprise & Productivity",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=862-85&p=f&viewport=3079%2C5278%2C0.63&scaling=scale-down&content-scaling=fixed&starting-point-node-id=862%3A85&page-id=860%3A2&embed-host=share",
    tags: ["AI", "OCR", "Productivity"]
  },
  {
    id: "maventic",
    title: "Maventic",
    description: "Upgrading cloud based ERP solutions for retail and sales management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    category: "Enterprise & Productivity",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=1052-16785&p=f&viewport=2910%2C4730%2C0.19&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1052%3A16785&page-id=1052%3A12505&embed-host=share",
    tags: ["ERP", "Cloud", "Retail"]
  },
  {
    id: "jeevika",
    title: "Jeevika",
    description: "Empowering Street Vendors, Protecting Their Rights.",
    image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=800",
    category: "Social Impact",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=1052-25916&p=f&viewport=3145%2C5082%2C0.19&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1052%3A25916&page-id=1052%3A21946&embed-host=share",
    tags: ["Mobile App", "Social Justice"]
  },
  {
    id: "mobicip",
    title: "Mobicip",
    description: "Introducing Parental controls without the drama.",
    image: "https://images.unsplash.com/photo-1544391496-1ca7c974957e?auto=format&fit=crop&q=80&w=800",
    category: "EdTech",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=1052-40455&p=f&viewport=4069%2C4977%2C0.18&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1052%3A40455&page-id=1052%3A36440&embed-host=share",
    tags: ["Parental Control", "Safety", "Mobile"]
  },
  {
    id: "healthasyst",
    title: "HealthAsyst",
    description: "Clinic Management portal for Data Analytics and Reports Processing in healthcare domain.",
    image: "https://images.unsplash.com/photo-1504813184591-01592f252127?auto=format&fit=crop&q=80&w=800",
    category: "Healthcare",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=1052-49132&p=f&viewport=4145%2C5162%2C0.21&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1052%3A49132&page-id=1052%3A46580&embed-host=share",
    tags: ["Clinic Management", "Data Analytics"]
  },
  {
    id: "portico",
    title: "Portico",
    description: "Human Resource and Payroll Management Suite.",
    image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800",
    category: "Enterprise & Productivity",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=1052-59155&p=f&viewport=4450%2C5100%2C0.15&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1052%3A59155&page-id=1052%3A54784&embed-host=share",
    tags: ["HRMS", "Payroll", "B2B"]
  },
  {
    id: "angel-broking",
    title: "Angel Broking",
    description: "A mutual fund investment and tracking application that helps anyone to be an investor.",
    image: "https://images.unsplash.com/photo-1611974714608-3560e07a7a9c?auto=format&fit=crop&q=80&w=800",
    category: "Fintech",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=1052-65625&p=f&viewport=4628%2C5300%2C0.18&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1052%3A65625&page-id=1052%3A62846&embed-host=share",
    tags: ["Investment", "Mobile App", "Stock Market"]
  },
  {
    id: "microsoft-case",
    title: "Microsoft",
    description: "Dynamics 365 is a product line of enterprise resource planning (ERP) and customer relationship management (CRM) applications.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800",
    category: "Enterprise & Productivity",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=1052-73010&p=f&viewport=4980%2C5420%2C0.13&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1052%3A73010&page-id=1052%3A70258&embed-host=share",
    tags: ["ERP", "CRM", "Enterprise"]
  },
  {
    id: "young-artiste",
    title: "Young Artiste",
    description: "An art form learning application which provides real-time content and feedback.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
    category: "EdTech",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=1052-82260&p=f&viewport=5320%2C5230%2C0.16&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1052%3A82260&page-id=1052%3A79426&embed-host=share",
    tags: ["Art Learning", "Feedback", "Mobile"]
  },
  {
    id: "philips-hospitality",
    title: "Philips Hospitality TV",
    description: "A centralized platform for managing large-scale display ecosystem",
    image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=800",
    category: "Enterprise & Productivity",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?page-id=3005%3A2&node-id=3005-9&p=f&viewport=377%2C-674%2C0.24&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3005%3A9&embed-host=share",
    tags: ["SaaS", "Dashboard", "IoT"]
  },
  {
    id: "mindspark",
    title: "MINDSPARK",
    description: "Personalised learning platform enabling children to meaningfully advance at their own pace.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    category: "EdTech",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=65-3486&p=f&viewport=2617%2C4359%2C0.32",
    tags: ["Learning", "K-12", "Adaptive"]
  },
  {
    id: "isha-foundation",
    title: "Isha Foundation",
    description: "Centralized platform for spiritual awareness.",
    image: "https://images.unsplash.com/photo-1545208393-596371ba9a3c?auto=format&fit=crop&q=80&w=800",
    category: "Social Impact",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=1052-16&p=f&viewport=2450%2C4670%2C0.67",
    tags: ["Web Portal", "Non-Profit"]
  },
  {
    id: "traform",
    title: "TRAFORM",
    description: "Corporate travel and expense management tool.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80&w=800",
    category: "Enterprise & Productivity",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=2311-20993&p=f&viewport=2311%2C3843%2C0.21",
    tags: ["Expense Management", "Fintech"]
  },
  {
    id: "fundsindia",
    title: "FUNDSINDIA",
    description: "Financial advisory and self-service investment portal.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
    category: "Fintech",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=2311-23746&p=f&viewport=2523%2C4258%2C0.21",
    tags: ["Investment", "Portfolio Management"]
  }
];
