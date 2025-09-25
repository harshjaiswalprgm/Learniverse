import React, { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    title: "AI in Education: Transforming Classrooms with Smart Learning",
    description:
      "How artificial intelligence is reshaping the future of personalized education.",
    author: "Harsh",
    date: "Sep 20, 2025 · Bengaluru",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    link: "https://timesofindia.indiatimes.com/blogs/voices/how-the-new-age-technology-is-transforming-e-learning-in-india/",
  },
  {
    title: "Gamification in Online Learning: Making Education Fun",
    description:
      "Discover how gamified elements boost student engagement in digital platforms.",
    author: "Priya",
    date: "Sep 15, 2025 · Delhi",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
    link: "https://www.analyticsinsight.net/how-gamification-is-revolutionizing-online-education/",
  },
  {
    title: "Future of EdTech Startups in India",
    description:
      "Why 2025 is the golden year for emerging e-learning startups and innovators.",
    author: "Rohit",
    date: "Sep 10, 2025 · Gurgaon",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=80",
    link: "https://yourstory.com/2025/01/future-of-edtech-startups-india",
  },
  {
    title: "Virtual Reality in Learning: A New Era of Immersive Education",
    description:
      "Explore how VR is bridging the gap between theory and practice in classrooms.",
    author: "Ananya",
    date: "Sep 05, 2025 · Noida",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=80",
    link: "https://www.ndtv.com/education/virtual-reality-transforming-classrooms-edu-news",
  },
  {
    title: "The Rise of Microlearning: Short Lessons, Big Impact",
    description:
      "How bite-sized learning is becoming the most effective way to upskill quickly.",
    author: "Aditya",
    date: "Aug 28, 2025 · Lucknow",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80",
    link: "https://economictimes.indiatimes.com/tech/startups/microlearning-reshaping-corporate-training/articleshow/105254431.cms",
  },
  {
    title: "Hybrid Classrooms: Blending Online and Offline Education",
    description:
      "Why hybrid learning models are the future of education across India.",
    author: "Kavya",
    date: "Aug 20, 2025 · Varanasi",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    link: "https://www.hindustantimes.com/education/news/hybrid-learning-the-future-of-education-in-india-101635015839843.html",
  },
];

export default function LatestArticles() {
  useEffect(() => {
    gsap.utils.toArray(".article-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const fallbackSrc =
    "https://via.placeholder.com/900x600?text=Image+Unavailable";

  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
          Latest Articles
        </h2>
        <p className="text-gray-600 text-lg">
          Discover the latest trends, tips, and insights in online learning and
          educational technology. From expert advice to practical guides, our
          articles help learners and educators stay informed, improve skills,
          and make the most of digital education.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <motion.div
            key={article.title}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="article-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group"
          >
            {/* Image wrapped with link */}
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-48 overflow-hidden bg-gray-100"
            >
              <img
                src={article.image}
                alt={article.title}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = fallbackSrc;
                }}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                loading="lazy"
              />
              <span className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                {article.author}
              </span>
            </a>

            {/* Content */}
            <div className="p-6">
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white line-clamp-2 hover:underline">
                  {article.title}
                </h3>
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                {article.description}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>📅 {article.date}</span>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium group-hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
