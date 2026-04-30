export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  prototypeUrl?: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Philips Hospitality TV",
    description: "A centralized platform for managing large-scale display ecosystem.",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format&fit=crop",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?page-id=3005%3A2&node-id=3005-9&p=f&viewport=377%2C-674%2C0.24&scaling=contain&content-scaling=fixed&starting-point-node-id=3005%3A9&embed-host=share",
    tags: ["Enterprise", "Display Ecosystem", "Dashboard"]
  },
  {
    id: "2",
    title: "MINDSPARK",
    description: "Personalised learning platform enabling children to meaningfully advance at their own pace.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=65-3486&p=f&viewport=2617%2C4359%2C0.32&scaling=contain&content-scaling=fixed&starting-point-node-id=65%3A3486&page-id=0%3A1&embed-host=share",
    tags: ["EdTech", "Personalised Learning", "UX"]
  },
  {
    id: "3",
    title: "Biorad Enli8",
    description: "Crafting a precision-focused solution for the video processing unit of the endoscope.",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=929-6237&p=f&viewport=-191%2C5218%2C0.49&scaling=contain&content-scaling=fixed&starting-point-node-id=929%3A6237&page-id=906%3A200&embed-host=share",
    tags: ["Healthcare", "Medical UI", "Precision"]
  },
  {
    id: "4",
    title: "Mera Bajaj",
    description: "Designing a mobile app to enhance the riding and after sales experience of Bajaj motorcycle owners.",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=988-2889&p=f&viewport=272%2C859%2C0.03&scaling=contain&content-scaling=fixed&starting-point-node-id=988%3A2889&page-id=868%3A2&embed-host=share",
    tags: ["Automotive", "Mobile App", "After-Sales"]
  },
  {
    id: "5",
    title: "Isha Foundation",
    description: "Centralized platform for spiritual awareness.",
    image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=2070&auto=format&fit=crop",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=989-3281&p=f&viewport=764%2C2632%2C0.3&scaling=contain&content-scaling=fixed&starting-point-node-id=989%3A3281&page-id=989%3A3280&embed-host=share",
    tags: ["Spiritual", "Platform", "Community"]
  },
  {
    id: "6",
    title: "Biorad Quantino",
    description: "Designing an Interactive and Digital Interface for a Thulium Fibre Laser Device.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=989-3578&p=f&viewport=715%2C4065%2C0.36&scaling=contain&content-scaling=fixed&starting-point-node-id=989%3A3578&page-id=989%3A3576&embed-host=share",
    tags: ["Healthcare", "Digital Interface", "Laser Device"]
  },
  {
    id: "7",
    title: "TRAFORM",
    description: "Corporate travel and expense management tool.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=989-4394&viewport=642%2C4957%2C0.47&scaling=contain&content-scaling=fixed&starting-point-node-id=989%3A4394&page-id=989%3A4391&embed-host=share",
    tags: ["Enterprise", "SaaS", "Travel Management"]
  },
  {
    id: "8",
    title: "FUNDSINDIA",
    description: "Financial advisory and self-service investment portal.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=989-4894&p=f&viewport=721%2C669%2C0.06&scaling=contain&content-scaling=fixed&starting-point-node-id=989%3A4894&page-id=989%3A4893&embed-host=share",
    tags: ["Fintech", "Investment", "Portal"]
  },
  {
    id: "9",
    title: "TP Vision",
    description: "Convert handwritten notes into digital text.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=862-85&p=f&viewport=3079%2C5278%2C0.63&scaling=scale-down&content-scaling=fixed&starting-point-node-id=862%3A85&page-id=860%3A2&embed-host=share",
    tags: ["Productivity", "Digital Text", "UX"]
  },
  {
    id: "10",
    title: "Bajaj Chetak",
    description: "A unique interface for the Chetak EV speedometer / Info-meter which is classy, highly consumable, user-friendly to operate, and attractive to use.",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=859-14&p=f&viewport=512%2C2728%2C0.14&scaling=scale-down&content-scaling=fixed&starting-point-node-id=859%3A14&page-id=859%3A2&embed-host=share",
    tags: ["Automotive", "Speedometer", "EV"]
  },
  {
    id: "11",
    title: "REM42",
    description: "A sleep app ecosystem for high athletic performance.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=816-51&p=f&viewport=978%2C1028%2C0.06&scaling=scale-down&content-scaling=fixed&starting-point-node-id=816%3A51&page-id=816%3A2&embed-host=share",
    tags: ["Healthcare", "Sleep App", "Athletic"]
  },
  {
    id: "12",
    title: "Milestone Internet",
    description: "Transforming a Legacy Enterprise Software Into Customer Facing SAAS Platform.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=816-2874&p=f&viewport=699%2C876%2C0.05&scaling=scale-down&content-scaling=fixed&page-id=816%3A2699&starting-point-node-id=816%3A2874&embed-host=share",
    tags: ["Enterprise", "SaaS", "Transformation"]
  },
  {
    id: "13",
    title: "Maventic",
    description: "Upgrading cloud based ERP solutions for retail and sales management.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=816-4787&p=f&viewport=881%2C810%2C0.08&scaling=scale-down&content-scaling=fixed&starting-point-node-id=816%3A4787&page-id=816%3A4786&embed-host=share",
    tags: ["Retail", "ERP", "Sales Management"]
  },
  {
    id: "14",
    title: "Jeevika",
    description: "Empowering Street Vendors, Protecting Their Rights.",
    image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=2070&auto=format&fit=crop",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=217-23355&viewport=2295%2C11031%2C0.34&scaling=scale-down&content-scaling=fixed&starting-point-node-id=217%3A23355&page-id=65%3A4000&embed-host=share",
    tags: ["Social Impact", "Empowerment", "Vendors"]
  },
  {
    id: "15",
    title: "Mobicip",
    description: "Introducing Parental controls without the drama.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=3175-30339&p=f&viewport=623%2C7889%2C0.24&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3175%3A30339&page-id=5%3A3506&embed-host=share",
    tags: ["Parental Control", "Mobile App", "Family"]
  },
  {
    id: "16",
    title: "HealthAsyst",
    description: "Clinic Management portal for Data Analytics and Reports Processing in healthcare domain.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=2-1174&p=f&viewport=659%2C516%2C0.03&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A1174&page-id=2%3A2&embed-host=share",
    tags: ["Healthcare", "Data Analytics", "Portal"]
  },
  {
    id: "17",
    title: "Portico",
    description: "Human Resource and Payroll Management Suite.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=2-2400&p=f&viewport=795%2C7905%2C0.49&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2400&page-id=2%3A1727&embed-host=share",
    tags: ["Enterprise", "HR", "Payroll"]
  },
  {
    id: "18",
    title: "Angel Broking",
    description: "A mutual fund investment and tracking application that helps anyone to be an investor.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=2-5569&p=f&viewport=789%2C9212%2C0.63&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A5569&page-id=2%3A3920&embed-host=share",
    tags: ["Fintech", "Investment", "Mobile App"]
  },
  {
    id: "19",
    title: "Microsoft",
    description: "Dynamics 365 is a product line of enterprise resource planning (ERP) and customer relationship management (CRM) applications.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=2-11215&p=f&viewport=726%2C4510%2C0.56&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A11215&page-id=2%3A11214&embed-host=share",
    tags: ["Enterprise", "ERP", "CRM"]
  },
  {
    id: "20",
    title: "Young Artiste",
    description: "An art form learning application which provides real-time content and feedback.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
    prototypeUrl: "https://embed.figma.com/proto/t37PvHYZ9myLVtWmpr88BM/01_Compiled-Case-Studies?node-id=2-21&p=f&viewport=623%2C8846%2C0.55&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A21&page-id=2%3A3&embed-host=share",
    tags: ["EdTech", "Learning App", "Art"]
  }
];
