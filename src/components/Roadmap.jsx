import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Roadmap Data
const roadmapData = [
  {

    title: "Explore Possibilities",
    description:
      "Discover different domains, from tech to business, and choose the right learning journey for you.",
    image:
      "https://img.freepik.com/free-vector/businessman-looking-camera-target-it-s-like-business-looking-way-be-successful-vector-business-illustration-concept_1150-60931.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740&q=80",
    icon: <span className="text-6xl">🧭</span>, // bigger size here
  },
  {

    title: "Build Strong Foundations",
    description:
      "Start with beginner-friendly lessons to strengthen your basics and boost confidence.",
    image:
      "https://img.freepik.com/premium-vector/student-climbs-steps-books-top-with-cup-graduate-cap_153097-4587.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740&q=80",
    icon: <span className="text-6xl">🏗️</span>, // bigger size here
  },
  {

    title: "Learn by Doing",
    description:
      "Work on hands-on exercises, coding problems, and mini-projects to apply your skills.",
    image:
      "https://img.freepik.com/premium-vector/professional-education-increasing-business-professional-competences_277904-18886.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740&q=80",
    icon: <span className="text-6xl">🛠️</span>, // bigger size here
  },
  {

    title: "Deep Dive into Skills",
    description:
      "Advance step by step with structured modules designed for mastery in each subject.",
    image:
      "https://img.freepik.com/premium-vector/man-sits-atop-stack-books-reading-book-amongst-stars_24381-2717.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740&q=80",
    icon: <span className="text-6xl">📚</span>, // bigger size here
  },
  {

    title: "Collaborate & Network",
    description:
      "Connect with peers, share ideas, and grow together through group projects and discussions.",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-flat-design-group-people-background-composition_23-2149192135.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740&q=80",
    icon: <span className="text-6xl">🤝</span>, // bigger size here
  },
  {

    title: "Get Mentorship & Guidance",
    description:
      "Learn from industry experts through live sessions, personalized feedback, and career tips.",
    image:
      "https://img.freepik.com/premium-vector/man-woman-choosing-direction-standing-crossroad-with-arrows-road-sign-wrong-decision-making-concept_341509-1273.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740&q=80",
    icon: <span className="text-6xl">🎓</span>, // bigger size here
  },
  {

    title: "Achieve & Showcase",
    description:
      "Earn certificates, build a portfolio, and step confidently into jobs, internships, or entrepreneurship.",
    image:
      "https://img.freepik.com/free-vector/tiny-people-winners-sportsmen-podium-with-rating-stars-sports-rating-system-team-player-rating-competitive-strength-metrics-concept_335657-872.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740&q=80",
    icon: <span className="text-6xl">🏆</span>, // bigger size here
  },
];

export default function Roadmap() {
  const cardsRef = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    // Animate cards
    cardsRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 80 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        }
      );
    });

    // Animate timeline line (draw effect)
    gsap.fromTo(
      lineRef.current,
      { height: 0 },
      {
        height: "100%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
          end: "bottom 10%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-16 px-6 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Your Learning Journey with{" "}
        <span className="text-[#8bca1e]">TheLearniverse</span>
      </h2>

      <div className="relative">
        {/* Timeline vertical thread */}
        <div
          ref={lineRef}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#8bca1e] rounded-full"
          style={{ top: 0, bottom: 0 }}
        ></div>

        {/* Roadmap steps */}
        {roadmapData.map((step, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`mb-16 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot */}
            <div className="relative w-full md:w-1/2 flex justify-center md:justify-center">
              <div className="z-10 w-20 h-20 bg-[#8bca1e] rounded-full flex items-center justify-center text-white text-lg shadow-lg">
                {step.icon}
              </div>
            </div>

            {/* Card */}
            <div
              className="bg-gray-100 shadow-lg rounded-2xl p-6 max-w-xl hover:shadow-2xl
              transition-transform transform hover:-translate-y-2 duration-300 md:w-1/2"
            >
              <p className="text-sm text-gray-500 mb-2">{step.time}</p>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                {step.description}
              </p>
              <img
                src={step.image}
                alt={step.title}
                className="rounded-lg w-full h-45 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
