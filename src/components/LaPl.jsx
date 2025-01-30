// src/components/MainPage.js
import React from "react";
import LanguageRecommendations from "./components/LanguageRecommendations";
import PlaylistSuggestions from "./components/PlaylistSuggestions";

const recommendations = {
  beginner: ["Python", "JavaScript", "Scratch"],
  intermediate: ["Java", "C++", "Swift"],
  expert: ["Rust", "Go", "Kotlin"]
};

const playlists = {
  beginner: "https://www.youtube.com/watch?v=rfscVS0vtbw",
  intermediate: "https://www.youtube.com/watch?v=LnX3B9oaKzw",
  expert: "https://www.youtube.com/watch?v=oPpnCh7InLY"
};

function MainPage({ skillLevel }) {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-10">
      <div className="flex flex-col items-center justify-center space-y-12">
        {/* Language Recommendations */}
        <div className="p-6 bg-white shadow-2xl rounded-2xl text-center w-full max-w-md transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Recommended Languages</h2>
          <ul className="text-lg text-gray-700 space-y-3">
            {recommendations[skillLevel]?.map((lang) => (
              <li key={lang} className="flex items-center space-x-2 bg-gray-100 p-2 rounded-lg shadow-sm">
                <CheckCircle className="text-green-500" />
                <span className="font-semibold">{lang}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Playlist Suggestions */}
        <div className="p-6 bg-white shadow-2xl rounded-2xl text-center w-full max-w-md transform transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Recommended Playlist</h2>
          <a 
            href={playlists[skillLevel]} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-red-500 text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-md transition duration-300 hover:bg-red-600 hover:shadow-xl"
          >
            <PlayCircle className="w-6 h-6" />
            <span>Watch on YouTube</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
