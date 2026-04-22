export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'UX Design' | 'Research';
  size: 'small' | 'large';
  tags: string[];
  prototypeUrl?: string;
}

const dummyProto = "https://embed.figma.com/proto/IdKktdDvGvQvaYIYDEVNT4/01_Enli8-VPU-GUI---Design?node-id=844-27066&p=f&viewport=-145%2C1210%2C0.02&scaling=contain&content-scaling=fixed&starting-point-node-id=816%3A28881&show-proto-sidebar=1&page-id=1%3A13&embed-host=share";

export const projects: Project[] = [
  {
    id: "1",
    title: "Bioradedisys | Enli8",
    description: "Research and UI UX Design for a endoscopy system.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    category: "UX Design",
    size: "large",
    tags: ["Medical", "Research", "UI/UX"],
    prototypeUrl: dummyProto
  },
  {
    id: "2",
    title: "EcoSphere Mobile App",
    description: "End-to-end UX for a sustainable lifestyle platform.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    category: "UX Design",
    size: "small",
    tags: ["Mobile", "Sustainability", "UI/UX"],
    prototypeUrl: dummyProto
  },
  {
    id: "3",
    title: "User Behavior Study",
    description: "Deep dive into Gen-Z shopping patterns in Southeast Asia.",
    image: "https://images.unsplash.com/photo-1553484771-047a44eee27b?q=80&w=1974&auto=format&fit=crop",
    category: "Research",
    size: "small",
    tags: ["Insights", "Strategy"],
    prototypeUrl: dummyProto
  },
  {
    id: "4",
    title: "Aura Fintech Dashboard",
    description: "Visualizing complex financial data for high-net-worth individuals.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    category: "UX Design",
    size: "small",
    tags: ["Fintech", "Data Viz"],
    prototypeUrl: dummyProto
  },
  {
    id: "5",
    title: "Healthcare Accessibility Audit",
    description: "Evaluating digital health services for rural accessibility.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    category: "Research",
    size: "small",
    tags: ["Healthcare", "Accessibility"],
    prototypeUrl: dummyProto
  },
  {
    id: "6",
    title: "Urban Mobility Research",
    description: "Synthesizing transit data to improve city navigation experiences.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop",
    category: "Research",
    size: "small",
    tags: ["Mobility", "Urban Planning"],
    prototypeUrl: dummyProto
  }
];
