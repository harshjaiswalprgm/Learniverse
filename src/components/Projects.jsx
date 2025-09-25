import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "001",
    title: "MindCraft: AI Learning for Rural India",
    city: "Uttar Pradesh, India",
    date: "Feb 2025",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
  },
  {
    number: "002",
    title: "Sakshm AI: Socratic Coding Tutor",
    city: "Bengaluru, India",
    date: "Mar 2025",
    image:
      "1.png",
  },
  {
    number: "003",
    title: "Aryabhata: JEE Math Reasoning Model",
    city: "Delhi, India",
    date: "Aug 2025",
    image:
      "2.png",
  },
  {
    number: "004",
    title: "Interval Learning Platform",
    city: "Kerala, India",
    date: "2025",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80",
  },
  {
    number: "005",
    title: "Alice.Tech: AI for Exams",
    city: "Copenhagen / Global",
    date: "2025",
    image:
      "3.png",
  },
  {
    number: "006",
    title: "Cherrilearn Digital Learning in Kannada Schools",
    city: "Mangaluru, Karnataka",
    date: "2025",
    image:
      "5.png",
  },
];

export default function FeaturedProjects() {
  const [hovered, setHovered] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".featured-title", {
        opacity: 0,
        y: -40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });

      gsap.utils.toArray(".project-row").forEach((row, i) => {
        gsap.from(row, {
          opacity: 0,
          x: i % 2 === 0 ? -60 : 60,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-4 py-20 relative">
      <h2 className="featured-title text-5xl md:text-7xl font-extrabold leading-tight mb-12">
        FEATURED <br /> PROJECTS
      </h2>

      {/* Floating preview image */}
      <div className="hidden md:flex absolute top-0 right-0 h-full items-center pr-4 z-50 pointer-events-none">
        {hovered !== null && (
          <div className="relative">
            <img
              key={hovered}
              src={projects[hovered].image}
              alt={projects[hovered].title}
              className="w-[400px] h-auto object-cover rounded-2xl shadow-2xl transform scale-95 opacity-100 transition-all duration-500"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-500/30 via-pink-400/20 to-yellow-300/30 blur-3xl -z-10"></div>
          </div>
        )}
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left relative">
          <thead>
            <tr className="text-gray-500 text-xs md:text-sm uppercase border-b border-gray-300">
              <th className="w-16 py-3">No</th>
              <th className="py-3">Title</th>
              <th className="py-3">City</th>
              <th className="py-3">Date</th>
              <th className="w-8"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr
                key={index}
                className="project-row border-b border-gray-200 cursor-pointer relative group hover:bg-gray-50 transition"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <td className="py-4 text-gray-700 font-bold">{project.number}</td>
                <td className="py-4 font-medium relative">
                  <span className="relative inline-block">
                    {project.title}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
                  </span>
                </td>
                <td className="py-4 text-gray-600">{project.city}</td>
                <td className="py-4 text-gray-600">{project.date}</td>
                <td className="py-4 text-gray-800 font-bold transition-transform group-hover:translate-x-1 group-hover:rotate-12">
                  ↗
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden grid gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-5 relative cursor-pointer group"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3 className="font-bold text-lg mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm">{project.city}</p>
            <p className="text-gray-500 text-xs mb-2">{project.date}</p>
            <span className="absolute top-3 right-3 font-bold text-gray-700">
              {project.number}
            </span>
            {hovered === index && (
              <img
                src={project.image}
                alt={project.title}
                className="mt-3 w-full h-48 object-cover rounded-lg shadow-lg transition-all duration-500"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
