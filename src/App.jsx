import { Routes, Route } from "react-router-dom";
import SkillLevelSelector from "./components/SkillLevelSelector";
import LanguageRecommendations from "./components/LanguageRecommendations";
import Navbar from "./components/Navbar";
import PlaylistSuggestions from "./components/PlaylistSuggestions";
import CoursesPage from "./components/CoursesPage";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center py-8 h-full w-full">
        <Routes>
          <Route path="/" element={<SkillLevelSelector />} />
          <Route
            path="/beginner"
            element={
              <>
                <LanguageRecommendations skillLevel="beginner" />
                <PlaylistSuggestions skillLevel="beginner" />
              </>
            }
          />
          <Route
            path="/intermediate"
            element={
              <>
                <LanguageRecommendations skillLevel="intermediate" />
                <PlaylistSuggestions skillLevel="intermediate" />
              </>
            }
          />
          <Route
            path="/expert"
            element={
              <>
                <LanguageRecommendations skillLevel="expert" />
                <PlaylistSuggestions skillLevel="expert" />
              </>
            }
          />
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
