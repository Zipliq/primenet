import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How much will it cost me to build a static site?",
    answer: "The cost of building a static site depends on factors like design complexity, hosting, and development fees. If you use free platforms like GitHub Pages or Vercel, the cost can be minimal. Hiring a developer or using premium templates may add to the cost.",
    value: "item-1"
  },
  {
    question: "What are the benefits of using a static site over a dynamic one?",
    answer: "Static sites load faster, offer better security, and require less maintenance compared to dynamic sites. They are ideal for portfolios, blogs, and informational websites.",
    value: "item-2"
  },
  {
    question: "Which hosting providers are best for static websites?",
    answer: "Popular choices for static site hosting include Vercel, Netlify, GitHub Pages, and Cloudflare Pages. These platforms offer free tiers with easy deployment options.",
    value: "item-3"
  },
  {
    question: "Can I add a CMS to a static site?",
    answer: "Yes! You can use headless CMS options like Contentful, Strapi, or Sanity to manage content dynamically while keeping the site static for performance.",
    value: "item-4"
  },
  {
    question: "How do I improve SEO for a static website?",
    answer: "To improve SEO, optimize your metadata, use clean URLs, include structured data, and ensure fast page load speeds. Also, generate and submit a sitemap to search engines.",
    value: "item-5"
  }

];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
