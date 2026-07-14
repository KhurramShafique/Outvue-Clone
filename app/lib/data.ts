export const navLinks = [
  { label: "Features", href: "/features" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "Integrations", href: "/integrations" },
  { label: "Pricing", href: "/pricing" },
  { label: "Customers", href: "/customers" },
  { label: "Blog", href: "/blog" },
];

export type Feature = {
  icon:
    | "Clapperboard"
    | "Type"
    | "Camera"
    | "Plug"
    | "BarChart3"
    | "Users"
    | "Mic"
    | "LayoutTemplate"
    | "Send"
    | "Terminal"
    | "Zap"
    | "Webhook";
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: "Clapperboard",
    title: "AI Personalized Videos",
    description:
      "Record once. Outvue generates a unique version of your video for every prospect, down to the frame.",
  },
  {
    icon: "Type",
    title: "Dynamic Name Replacement",
    description:
      "Names, companies, and roles are lip-synced into the video automatically, no reshoots required.",
  },
  {
    icon: "Camera",
    title: "Website Screenshot Personalization",
    description:
      "Drop a live screenshot of each prospect's website or LinkedIn straight into the video frame.",
  },
  {
    icon: "Plug",
    title: "CRM Integrations",
    description:
      "Sync prospects and campaign results with HubSpot, Salesforce, and Pipedrive in real time.",
  },
  {
    icon: "BarChart3",
    title: "Analytics Dashboard",
    description:
      "Track opens, watch-through rate, and replies per video, per rep, per campaign.",
  },
  {
    icon: "Users",
    title: "Team Collaboration",
    description:
      "Shared templates, approval flows, and campaign libraries keep every rep on-brand.",
  },
  {
    icon: "Mic",
    title: "AI Voice Cloning",
    description:
      "Clone your voice once to narrate personalized lines without picking the camera back up.",
  },
  {
    icon: "LayoutTemplate",
    title: "Video Templates",
    description:
      "Start from proven outbound formats for sales, recruiting, and partnerships.",
  },
  {
    icon: "Send",
    title: "Bulk Campaigns",
    description:
      "Generate and send thousands of personalized videos in a single campaign run.",
  },
  {
    icon: "Terminal",
    title: "API Access",
    description:
      "Trigger video generation and pull analytics programmatically from your own stack.",
  },
  {
    icon: "Zap",
    title: "Zapier Integration",
    description:
      "Connect Outvue to 6,000+ apps without writing a line of code.",
  },
  {
    icon: "Webhook",
    title: "Webhooks",
    description:
      "Push real-time events, like a watched video or a reply, straight into your own systems.",
  },
];

export const steps = [
  {
    number: "01",
    title: "Import prospects",
    description: "Upload a CSV or sync a list directly from your CRM in seconds.",
  },
  {
    number: "02",
    title: "Record one video",
    description: "Film a single take. That's the only time you'll be on camera.",
  },
  {
    number: "03",
    title: "AI personalizes every video",
    description: "Outvue generates a unique, lip-synced version for every prospect on the list.",
  },
  {
    number: "04",
    title: "Launch campaign and track results",
    description: "Send at scale and watch opens, replies, and meetings booked roll in.",
  },
];

export const integrations = [
  "HubSpot",
  "Salesforce",
  "Pipedrive",
  "Apollo",
  "Clay",
  "n8n",
  "Zapier",
  "Slack",
  "Gmail",
  "Outlook",
  "LinkedIn",
];

export type Plan = {
  name: string;
  tagline: string;
  monthly: number;
  yearly: number;
  cta: string;
  highlighted?: boolean;
  features: string[];
};

export const plans: Plan[] = [
  {
    name: "Starter",
    tagline: "For individual reps testing personalized video",
    monthly: 49,
    yearly: 39,
    cta: "Start Free Trial",
    features: [
      "200 personalized videos / month",
      "1 seat",
      "Dynamic name replacement",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    name: "Professional",
    tagline: "For growing sales and recruiting teams",
    monthly: 149,
    yearly: 119,
    cta: "Start Free Trial",
    highlighted: true,
    features: [
      "2,000 personalized videos / month",
      "Up to 10 seats",
      "Website screenshot personalization",
      "CRM + Zapier integrations",
      "Advanced analytics dashboard",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For agencies and large outbound teams",
    monthly: 0,
    yearly: 0,
    cta: "Book Demo",
    features: [
      "Unlimited personalized videos",
      "Unlimited seats",
      "AI voice cloning",
      "API access + webhooks",
      "Dedicated onboarding & CSM",
      "Custom security review",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Reply rates on our outbound tripled in the first month. Prospects assume every video was recorded just for them.",
    name: "Priya Nandakumar",
    role: "Head of Sales Development, Ferro Systems",
  },
  {
    quote:
      "We used to spend hours screen-recording for candidates. Now one video covers an entire hiring pipeline.",
    name: "Marcus Webb",
    role: "Talent Lead, Northbridge Recruiting",
  },
  {
    quote:
      "Our agency runs outbound for a dozen clients. Outvue is the only way that scales without losing the personal touch.",
    name: "Elena Torres",
    role: "Founder, Vantage Growth Agency",
  },
  {
    quote:
      "The website screenshot personalization alone doubled our booked meetings. It just feels different from a template.",
    name: "Daniel Osei",
    role: "Account Executive, Loopwave",
  },
];

export const customerLogos = [
  "Ferro Systems",
  "Northbridge",
  "Vantage Growth",
  "Loopwave",
  "Cursive",
  "Beacon Partners",
  "Fieldstone",
  "Harborlight",
];

export const stats = [
  { label: "Personalized videos generated", value: 4200000, suffix: "+" },
  { label: "Average reply rate lift", value: 3, suffix: "x" },
  { label: "Hours saved per rep monthly", value: 22, suffix: "h" },
  { label: "Teams running on Outvue", value: 1800, suffix: "+" },
];

export const faqs = [
  {
    question: "How realistic are the AI-personalized videos?",
    answer:
      "Outvue uses lip-sync and voice cloning trained on your single source recording, so names, companies, and details are rendered directly into your face and voice. Most prospects can't tell the video wasn't recorded individually for them.",
  },
  {
    question: "Is there a limit on how many videos I can upload or generate?",
    answer:
      "Each plan includes a monthly generation allowance. Starter includes 200 videos, Professional includes 2,000, and Enterprise is unlimited. You can upgrade or add capacity at any time.",
  },
  {
    question: "Which integrations does Outvue support out of the box?",
    answer:
      "Outvue natively integrates with HubSpot, Salesforce, Pipedrive, Apollo, Clay, Gmail, Outlook, Slack, and LinkedIn, plus Zapier and n8n for everything else, and a full REST API with webhooks for custom workflows.",
  },
  {
    question: "Can I switch between monthly and yearly billing?",
    answer:
      "Yes. You can switch billing cycles at any time from your workspace settings. Yearly plans are billed annually at a discounted rate shown at checkout.",
  },
  {
    question: "How is my video and prospect data secured?",
    answer:
      "All video and prospect data is encrypted in transit and at rest. Enterprise plans include SSO, audit logs, and a custom security review with our team before rollout.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-personalized-video-beats-cold-email",
    title: "Why personalized video beats cold email in 2026",
    excerpt:
      "Open rates are down across every outbound channel except one. Here's what the data shows about video-first outreach.",
    category: "Outbound Strategy",
    date: "Jun 18, 2026",
    readTime: "6 min read",
  },
  {
    slug: "recruiting-teams-scaling-with-ai-video",
    title: "How recruiting teams are scaling candidate outreach with AI video",
    excerpt:
      "Three talent teams share how they replaced generic InMail with personalized video, without adding headcount.",
    category: "Recruiting",
    date: "Jun 3, 2026",
    readTime: "5 min read",
  },
  {
    slug: "agency-playbook-video-outreach-at-scale",
    title: "The agency playbook for running video outreach at scale",
    excerpt:
      "A practical framework for agencies managing outbound video across multiple clients without losing quality.",
    category: "Agencies",
    date: "May 21, 2026",
    readTime: "8 min read",
  },
];
