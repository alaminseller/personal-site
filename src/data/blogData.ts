export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  image: string;
  tags: string[];
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "who-is-alamin-rafi",
    title: "Who is Alamin Rafi?",
    description: "Learn more about Alamin Rafi, a dedicated Digital Service Provider helping businesses grow.",
    content: `
      <p>Alamin Rafi is a professional Digital Service Provider specializing in web development and modern design. With a focus on performance and user experience, Alamin helps businesses establish a strong online presence.</p>
      <p>Whether you need a simple landing page or a complex business website, Alamin Rafi provides affordable and high-quality solutions tailored to your needs.</p>
    `,
    date: "May 5, 2026",
    image: "/4.png",
    tags: ["Personal", "Professional", "Alamin Rafi"],
    author: "Alamin Rafi"
  },
  {
    id: "2",
    slug: "affordable-website-development-services",
    title: "Affordable Website Development Services",
    description: "Quality websites don't have to be expensive. Explore affordable development options with Alamin Rafi.",
    content: `
      <p>Finding a balance between quality and cost is crucial for small businesses. Alamin Rafi offers web development services that are both high-performing and budget-friendly.</p>
      <p>From WordPress sites to custom React applications, get a website that looks professional and works flawlessly without breaking the bank.</p>
    `,
    date: "May 4, 2026",
    image: "/4.png",
    tags: ["Web Development", "Business", "Affordable"],
    author: "Alamin Rafi"
  },
  {
    id: "3",
    slug: "how-i-build-fast-business-websites",
    title: "How I Build Fast Business Websites",
    description: "Speed matters. Learn the techniques Alamin Rafi uses to ensure lightning-fast load times.",
    content: `
      <p>In today's digital world, a slow website is a lost opportunity. Alamin Rafi prioritizes performance in every project.</p>
      <p>Using modern frameworks, optimized images, and clean code, Alamin ensures that your business website loads in under 3 seconds, keeping your visitors engaged and improving SEO.</p>
    `,
    date: "May 3, 2026",
    image: "/4.png",
    tags: ["Performance", "SEO", "Tech"],
    author: "Alamin Rafi"
  },
  {
    id: "4",
    slug: "why-small-businesses-need-websites",
    title: "Why Small Businesses Need Websites",
    description: "A website is the digital storefront of your business. Here is why you need one in 2026.",
    content: `
      <p>If your business isn't online, it's invisible to a large portion of your target audience. A professional website builds trust and credibility.</p>
      <p>Alamin Rafi helps small businesses bridge the gap between their services and their online presence, ensuring they stay competitive in a digital-first economy.</p>
    `,
    date: "May 2, 2026",
    image: "/4.png",
    tags: ["Business Growth", "Digital Marketing", "Success"],
    author: "Alamin Rafi"
  }
];
