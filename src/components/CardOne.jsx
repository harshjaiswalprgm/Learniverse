import React from "react";

export default function CardsSection() {
  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row gap-6 p-4 sm:p-6 justify-center items-center">
  {/* Left Card */}
  <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center w-full sm:max-w-sm">
    <h2 className="font-bold text-lg mb-4 text-center">
      Word-by-word practice
    </h2>
    <p className="text-gray-600 text-center text-sm mb-6">
      Let’s learn some sentences that you’ll speak in the next conversation
      practice.
    </p>
    <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6">
      {[
        "https://cdn-icons-png.flaticon.com/128/1828/1828970.png", // book
        "https://cdn-icons-png.flaticon.com/128/1828/1828911.png", // chart
        "https://cdn-icons-png.flaticon.com/128/1055/1055687.png", // coding
        "https://cdn-icons-png.flaticon.com/128/3135/3135715.png", // mentorship
      ].map((icon, i) => (
        <div
          key={i}
          className="bg-gray-100 p-4 sm:p-6 rounded-full flex items-center justify-center"
        >
          <img
            src={icon}
            alt={`practice${i + 1}`}
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
        </div>
      ))}
    </div>
    <button className="bg-yellow-400 px-6 py-2 rounded-xl font-semibold shadow hover:bg-yellow-500 w-full sm:w-auto">
      Get It
    </button>
  </div>

  {/* Middle Cards */}
  <div className="flex flex-col gap-4 w-full sm:max-w-sm">
    <div className="bg-blue-500 text-white rounded-xl p-4 shadow">
      <h3 className="font-bold text-lg mb-1">Tech Programs</h3>
      <p className="text-sm mb-3">
        Learn coding, web development, AI & more with hands-on projects.
      </p>
      <div className="flex justify-between items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1055/1055687.png"
          alt="tech-programs"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover"
        />
        <button className="bg-white text-blue-600 px-3 py-1 rounded-lg font-medium shadow">
          Explore
        </button>
      </div>
    </div>

    <div className="bg-purple-400 text-white rounded-xl p-4 shadow">
      <h3 className="font-bold text-lg mb-1">Non-Tech Programs</h3>
      <p className="text-sm mb-3">
        Develop skills in management, communication, and digital marketing.
      </p>
      <div className="flex justify-between items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1828/1828911.png"
          alt="non-tech-programs"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover"
        />
        <button className="bg-white text-purple-600 px-3 py-1 rounded-lg font-medium shadow">
          Start Learning
        </button>
      </div>
    </div>

    <div className="bg-pink-500 text-white rounded-xl p-4 shadow">
      <h3 className="font-bold text-lg mb-1">Career Webinars</h3>
      <p className="text-sm mb-3">
        Join live sessions with experts who guide you toward career success.
      </p>
      <div className="flex justify-between items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1157/1157109.png"
          alt="career-webinars"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover"
        />
        <button className="bg-white text-pink-600 px-3 py-1 rounded-lg font-medium shadow">
          Unlock Access
        </button>
      </div>
    </div>

    <div className="bg-green-400 text-white rounded-xl p-4 shadow">
      <h3 className="font-bold text-lg mb-1">Mentorship & Guidance</h3>
      <p className="text-sm mb-3">
        Get one-on-one mentorship and career advice from industry experts.
      </p>
      <div className="flex justify-between items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
          alt="mentorship"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover"
        />
        <button className="bg-white text-green-600 px-3 py-1 rounded-lg font-medium shadow">
          Practice with Mentor
        </button>
      </div>
    </div>
  </div>

  {/* Right Quiz Card */}
  <div className="bg-white shadow-lg rounded-2xl p-6 w-full sm:max-w-sm">
    <div className="flex justify-between items-center mb-4">
      <span className="text-red-500 font-bold">❤ 5</span>
      <button className="text-gray-500 font-bold">✕</button>
    </div>
    <h2 className="text-lg font-semibold mb-4 text-center sm:text-left">
      Quick Knowledge Check{" "}
      <span className="font-bold text-yellow-600">Think</span>
    </h2>
    <div className="grid grid-cols-2 gap-4 mb-6">
      {[
        {
          name: "Coding",
          icon: "https://cdn-icons-png.flaticon.com/128/1055/1055687.png",
        },
        {
          name: "Marketing",
          icon: "https://cdn-icons-png.flaticon.com/128/1828/1828911.png",
        },
        {
          name: "Webinar",
          icon: "https://cdn-icons-png.flaticon.com/128/1157/1157109.png",
        },
        {
          name: "Mentor",
          icon: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="border rounded-xl flex flex-col items-center justify-center p-4 sm:p-6 hover:bg-gray-100 cursor-pointer"
        >
          <img
            src={item.icon}
            alt={item.name.toLowerCase()}
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
          />
          <p className="text-sm mt-2">{item.name}</p>
        </div>
      ))}
    </div>
    <button className="bg-yellow-400 w-full py-2 rounded-xl font-semibold shadow hover:bg-yellow-500">
      Check
    </button>
  </div>
</div>

  );
}
