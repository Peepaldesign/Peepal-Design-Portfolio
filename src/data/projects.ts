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
    description: "Designing the mobile ecosystem for India's iconic EV relaunch, focusing on connected riding and after-sales service.",
    image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop",
    category: "Automotive",
    size: "large",
    tags: ["EV App", "Mobile UX", "IoT"],
    prototypeUrl: dummyProto
  },
  {
    id: "2",
    title: "Bajaj Dominar",
    description: "Creating a unified digital platform for long-distance tourers to enhance community engagement and trip tracking.",
    image: "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?q=80&w=1974&auto=format&fit=crop",
    category: "Automotive",
    size: "small",
    tags: ["Touring", "Connect", "Community"],
    prototypeUrl: dummyProto
  },
  {
    id: "3",
    title: "Biorad Enli8",
    description: "Revamping the GUI for endoscopy video processing units to standardize surgical flows and improve precision.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    category: "Healthcare",
    size: "small",
    tags: ["Medical UI", "Endoscopy", "TFT Display"],
    prototypeUrl: dummyProto
  },
  {
    id: "4",
    title: "Biorad Quantino",
    description: "Laboratory diagnostic interface design focused on reducing human error and accelerating testing workflows.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9d3a35223?q=80&w=2070&auto=format&fit=crop",
    category: "Healthcare",
    size: "large",
    tags: ["Lab Diagnostics", "SaaS", "Healthcare"],
    prototypeUrl: dummyProto
  },
  {
    id: "5",
    title: "Arable POC",
    description: "Proof-of-concept for an Agri-Tech IoT platform, visualizing real-time soil health and weather data for precision farming.",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1974&auto=format&fit=crop",
    category: "Industrial & Agri-Tech",
    size: "small",
    tags: ["Agri-Tech", "IoT Data", "POC"],
    prototypeUrl: dummyProto
  },
  {
    id: "6",
    title: "Milestone Internet",
    description: "Enterprise SaaS design for hospitality, optimizing digital asset management and performance tracking for hotels.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["Hospitality", "Enterprise SaaS", "B2B"],
    prototypeUrl: dummyProto
  },
  {
    id: "7",
    title: "TPV Genius",
    description: "Next-gen retail payment interface for interactive smart displays, streamlining transaction management for global markets.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["Fintech", "Retail POS", "Smart Display"],
    prototypeUrl: dummyProto
  },
  {
    id: "8",
    title: "Rem42",
    description: "UX design for an AI-powered sleep coaching ecosystem, built to optimize recovery and peak performance for athletes.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop",
    category: "Healthcare",
    size: "small",
    tags: ["AI Coaching", "Wellness App", "Healthcare"],
    prototypeUrl: dummyProto
  },
  {
    id: "9",
    title: "AXS",
    description: "Modernizing the live event ticketing experience with a focus on high-traffic performance and user flow efficiency.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
    category: "Enterprise & Fintech",
    size: "small",
    tags: ["Ticketing", "Events", "User Flow"],
    prototypeUrl: dummyProto
  },
  {
    id: "10",
    title: "Bobcat",
    description: "Human-Machine Interface (HMI) for heavy industrial equipment, engineered for clarity and safety in rugged environments.",
    image: "https://images.unsplash.com/photo-1533923156502-be31530547c4?q=80&w=1974&auto=format&fit=crop",
    category: "Industrial & Agri-Tech",
    size: "small",
    tags: ["Industrial HMI", "Heavy Equip", "Rugged UX"],
    prototypeUrl: dummyProto
  },
  {
    id: "11",
    title: "Infinity Learn",
    description: "Adaptive EdTech platform design, institutionalizing personalized learning and pedagogy for K-12 students.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    category: "EdTech",
    size: "small",
    tags: ["EdTech", "LMS", "Personalized Learn"],
    prototypeUrl: dummyProto
  }
];
