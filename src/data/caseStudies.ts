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
  }
];
