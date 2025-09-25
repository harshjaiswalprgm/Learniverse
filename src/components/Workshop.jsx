import React from "react";

export default function WorkshopSection() {
  return (
    <section className="relative bg-white py-24">
      {/* Top Dark Box */}
      <div className="bg-green-400 text-white text-center py-12 px-6 rounded-2xl max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-3">Start Your Journey</h2>
        <p className="text-lg text-gray-800">
          Start your journey towards to you Corporate journey to unlock your
          true potential!
        </p>
      </div>

      {/* Bottom Light Box - Smaller + Proper Spacing */}
      <div className="max-w-4xl mx-auto -mt-10 relative z-20">
        <div className="bg-blue-100 rounded-2xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <p className="text-indigo-600 font-semibold uppercase">
              Masterclass
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
              Start Your Journey to a Successful Career
            </h3>
            <p className="text-gray-700 mt-4">
              Learn the science behind personal finance and easily achieve all
              your financial goals with peace of mind – with your Favourite
              Finance Guy.
            </p>

            <ul className="mt-6 space-y-3 text-gray-800">
              <li className="flex items-start gap-2">
                <span>
                  {" "}
                  <strong>📚 Explore Diverse Programs –</strong> Learn both
                  technical and non-technical skills designed to match today’s
                  industry needs.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>
                  <strong>🎯 Expert-Led Webinars –</strong>Gain insights
                  directly from professionals and mentors with real-world
                  experience.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>
                  <strong>🏅 Skill Development for Growth –</strong>Build
                  practical knowledge that prepares you for job opportunities
                  and entrepreneurship.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>
                  <strong>🤝 Career Guidance & Mentorship –</strong>Get
                  personalized support to choose the right career path.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>
                  <strong>🌍 Industry-Relevant Curriculum –</strong>Stay ahead
                  with programs that focus on current trends and future
                  technologies.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>
                  <strong>🏆 Certification & Recognition –</strong>Showcase your
                  skills with certifications that add value to your resume.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>
                  <strong>💡 Learn. Apply. Succeed. –</strong>Join a journey
                  where education meets opportunities for a brighter future.
                </span>
              </li>
            </ul>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center height-full" >
            <img
              src="https://images.unsplash.com/photo-1598520106830-8c45c2035460?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya3Nob3B8ZW58MHx8MHx8fDA%3D"
              alt="Workshop"
              className="rounded-2xl shadow-md "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
