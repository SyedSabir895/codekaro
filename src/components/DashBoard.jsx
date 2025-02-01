import React, { useState } from "react";
import { motion } from "framer-motion";

const DashBoard = () => {
  const [level, setLevel] = useState("intermediate");

  const levelData = {
    beginner: {
      progress: 90,
      topics: [
        { name: "HTML/CSS", progress: 95 },
        { name: "JavaScript Basics", progress: 85 },
        { name: "Python Basics", progress: 80 },
      ],
    },
    intermediate: {
      progress: 65,
      topics: [
        { name: "React", progress: 70 },
        { name: "Node.js", progress: 60 },
        { name: "Data Structures", progress: 65 },
      ],
    },
    advanced: {
      progress: 30,
      topics: [
        { name: "System Design", progress: 35 },
        { name: "Machine Learning", progress: 25 },
        { name: "Cloud Architecture", progress: 30 },
      ],
    },
  };

  const { progress, topics } = levelData[level];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">
            J
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Welcome back, John!</h1>
            <p className="text-gray-600">Continue your learning journey</p>
          </div>
        </div>
        <div className="text-lg font-semibold">
          Current Level: {level.charAt(0).toUpperCase() + level.slice(1)}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Learning Streak", value: "7 days" },
          { title: "Hours Spent", value: "45h" },
          { title: "Completed Projects", value: "12" },
          { title: "Skills Mastered", value: "8" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-lg font-medium">{stat.title}</h3>
            <div className="text-xl font-bold text-blue-600">{stat.value}</div>
          </motion.div>
        ))}
      </div>

      {/* Learning Progress Section */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Learning Progress</h2>
          <div className="flex space-x-4">
            {["beginner", "intermediate", "advanced"].map((lvl) => (
              <button
                key={lvl}
                className={`px-4 py-2 rounded-lg ${
                  level === lvl ? "bg-blue-600 text-white" : "text-blue-600 border"
                }`}
                onClick={() => setLevel(lvl)}
              >
                {lvl.charAt(0).toUpperCase() + lvl.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Main Progress Bar */}
        <div className="relative bg-gray-200 h-2 mb-4 rounded-full">
          <motion.div
            className="bg-blue-600 h-2 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>

        {/* Animated Topic Progress Bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span>{topic.name}</span>
                <span>{topic.progress}%</span>
              </div>
              <div className="relative bg-gray-300 h-2 rounded-full">
                <motion.div
                  className="bg-blue-600 h-2 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${topic.progress}%` }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interests & Recommended Paths Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div
          className="bg-white p-6 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold mb-4">Your Interests</h2>
          <div className="flex flex-wrap gap-4">
            {["Web Development", "Mobile Apps", "Machine Learning", "Cloud Computing"].map(
              (tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-4">Recommended Paths</h2>
          <div className="flex flex-wrap gap-4">
            {["Frontend Development", "React Development"].map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashBoard;
