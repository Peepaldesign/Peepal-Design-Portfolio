export interface CaseStudy {
  id: string;
  title: string;
  category: 'User Research' | 'UX Design';
  image: string;
}

const generateImage = (title: string) => {
  return `https://placehold.co/800x600/1a1a1a/ffffff?text=${encodeURIComponent(title)}&font=Montserrat`;
};

export const caseStudies: CaseStudy[] = [
  // User Research
  { id: "ur-1", title: "Rolling research", category: "User Research", image: generateImage("Rolling research") },
  { id: "ur-2", title: "The journey of home renovation", category: "User Research", image: generateImage("The journey of home renovation") },
  { id: "ur-3", title: "Mapping the farming ecosystem in India", category: "User Research", image: generateImage("Mapping the farming ecosystem in India") },
  { id: "ur-4", title: "Testing seamless game play", category: "User Research", image: generateImage("Testing seamless game play") },
  { id: "ur-5", title: "Capturing the Moment", category: "User Research", image: generateImage("Capturing the Moment") },

  // UX Design
  { id: "ux-1", title: "Redefining New Customer Lifecycle Management Product Line", category: "UX Design", image: generateImage("Redefining New Customer Lifecycle Management") },
  { id: "ux-2", title: "How to Implement a Premium Content Subscription Model?", category: "UX Design", image: generateImage("Premium Content Subscription Model") },
  { id: "ux-3", title: "Profits & the Planet", category: "UX Design", image: generateImage("Profits & the Planet") },
  { id: "ux-4", title: "Revolutionizing Crop Management with Integrated Technology", category: "UX Design", image: generateImage("Crop Management Tech") },
  { id: "ux-5", title: "Upgrading cloud-based ERP solutions for retail and sales management", category: "UX Design", image: generateImage("Cloud-based ERP Solutions") },
  { id: "ux-6", title: "Designing a mobile app for Bajaj", category: "UX Design", image: generateImage("Mobile App for Bajaj") },
  { id: "ux-7", title: "How to prepare your kids for a screen routine?", category: "UX Design", image: generateImage("Kids Screen Routine") },
  { id: "ux-8", title: "Building a sleep app ecosystem for high athletic performance", category: "UX Design", image: generateImage("Sleep App Ecosystem") },
  { id: "ux-9", title: "Designing an ENote Application", category: "UX Design", image: generateImage("ENote Application") },
  { id: "ux-10", title: "Procurement through Gamification", category: "UX Design", image: generateImage("Procurement Gamification") },
  { id: "ux-11", title: "Designing an Engaging Experience Flow for an Endoscopic Device", category: "UX Design", image: generateImage("Endoscopic Device Experience") },
  { id: "ux-12", title: "Experience Transformation", category: "UX Design", image: generateImage("Experience Transformation") },
  { id: "ux-13", title: "Redesigning the API Marketplace Experience", category: "UX Design", image: generateImage("API Marketplace Experience") },
  { id: "ux-14", title: "Improving online ride-booking experience across demographics", category: "UX Design", image: generateImage("Ride-booking Experience") },
  { id: "ux-15", title: "Healthasyst: Clinic Management Portal for Healthcare Data Analytics", category: "UX Design", image: generateImage("Healthasyst Portal") },
  { id: "ux-16", title: "Empowering street vendors and protecting their rights", category: "UX Design", image: generateImage("Empowering Street Vendors") },
  { id: "ux-17", title: "Human Resource and Payroll Management Suite", category: "UX Design", image: generateImage("HR & Payroll Management") },
  { id: "ux-18", title: "New Computing for a New Era", category: "UX Design", image: generateImage("New Computing Era") },
  { id: "ux-19", title: "Navigating Street Vendor Management with Ease", category: "UX Design", image: generateImage("Street Vendor Management") },
  { id: "ux-20", title: "A Learning Platform for Music, Dance and Instruments", category: "UX Design", image: generateImage("Music & Dance Learning Platform") }
];
