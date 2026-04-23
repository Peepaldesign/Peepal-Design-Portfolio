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
  {
    id: "1",
    title: "Bajaj Chetak",
    description: "Digital transformation of the iconic Chetak experience with a modern EV ecosystem.",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop",
    category: "Automotive",
    size: "large",
    tags: ["EV", "Mobile App", "Automotive"],
    prototypeUrl: dummyProto
  },
  {
    id: "2",
    title: "Bajaj Dominar",
    description: "Enhancing the touring experience for the Dominar community through connected tech.",
    image: "https://images.unsplash.com/photo-1558981403-c5f91dbaf975?q=80&w=2070&auto=format&fit=crop",
    category: "Automotive",
    size: "small",
    tags: ["Touring", "Community", "UX"],
    prototypeUrl: dummyProto
  },
  {
    id: "3",
    title: "Biorad Enli8",
    description: "Next-generation GUI for endoscopy systems, prioritizing surgeon precision and patient safety.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    category: "Healthcare",
    size: "small",
    tags: ["Medical", "GUI", "High-Stakes"],
    prototypeUrl: dummyProto
  },
  {
    id: "4",
    title: "Biorad Quantino",
    description: "Streamlining laboratory workflows with an intuitive diagnostic interface.",
    image: "https://images.unsplash.com/photo-1579152276503-31581d966b61?q=80&w=2070&auto=format&fit=crop",
    category: "Healthcare",
    size: "large",
    tags: ["Diagnostics", "Laboratory", "SaaS"],
    prototypeUrl: dummyProto
  },
  {
    id: "5",
    title: "Arable POC",
    description: "Data-driven agriculture: Visualizing real-time crop health and climate data for farmers.",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop",
    category: "Industrial & Agri-Tech",
    size: "small",
    tags: ["Agri-Tech", "IoT", "Data Viz"],
    prototypeUrl: dummyProto
  },
  {
    id: "6",
    title: "Milestone Internet",
    description: "A comprehensive SaaS platform for hospitality digital marketing and performance tracking.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["SaaS", "Hospitality", "Marketing"],
    prototypeUrl: dummyProto
  },
  {
    id: "7",
    title: "TPV Genius",
    description: "Revolutionizing digital payments and transaction management for global retailers.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["Fintech", "Payments", "Retail"],
    prototypeUrl: dummyProto
  },
  {
    id: "8",
    title: "Rem42",
    description: "AI-powered sleep coaching ecosystem designed to optimize athletic performance and recovery.",
    image: "https://images.unsplash.com/photo-1553484771-047a44eee27b?q=80&w=1974&auto=format&fit=crop",
    category: "Healthcare",
    size: "small",
    tags: ["AI", "Wellness", "Wearables"],
    prototypeUrl: dummyProto
  },
  {
    id: "9",
    title: "AXS",
    description: "Simplifying complex ticketing and venue management through user-centric interface design.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["Ticketing", "Events", "UX"],
    prototypeUrl: dummyProto
  },
  {
    id: "10",
    title: "Bobcat",
    description: "Human-machine interface (HMI) for heavy machinery, built for rugged reliability.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
    category: "Industrial & Agri-Tech",
    size: "small",
    tags: ["HMI", "Industrial", "Rugged"],
    prototypeUrl: dummyProto
  },
  {
    id: "11",
    title: "Infinity Learn",
    description: "Personalized learning paths and adaptive assessment tools for the next generation of students.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
    category: "EdTech",
    size: "small",
    tags: ["EdTech", "Education", "LMS"],
    prototypeUrl: dummyProto
  }
];
