import React, { useState } from "react";
import PlaylistSuggestions from "./PlaylistSuggestions";
import { CheckCircle } from "lucide-react";

const recommendations = {
  beginner: ["Python", "JavaScript", "Scratch"],
  intermediate: ["Java", "C++", "Swift"],
  expert: ["Rust", "Go", "Kotlin"]
};

function LanguageRecommendations({ skillLevel }) {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
  };

  const renderLanguageList = () => {
    const languages = recommendations[skillLevel] || [];
    return languages.map((lang) => (
      <li
        key={lang}
        className="flex items-center space-x-2 bg-gray-100 p-2 rounded-lg shadow-sm cursor-pointer"
        onClick={() => handleLanguageSelect(lang)}
      >
        <CheckCircle className="text-green-500" />
        <span className="font-semibold">{lang}</span>
      </li>
    ));
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-10 overflow-auto">
      <div className="p-6 bg-white shadow-2xl rounded-2xl text-center w-full max-w-md transform transition duration-300 hover:scale-105 mb-8">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Recommended Languages</h2>
        <ul className="text-lg text-gray-700 space-y-3">
          {renderLanguageList()}
        </ul>
      </div>

      {/* Only show PlaylistSuggestions if a language is selected */}
      {selectedLanguage && (
        <PlaylistSuggestions
          language={selectedLanguage}
        />
      )}
    </div>
  );
}

export default LanguageRecommendations;
