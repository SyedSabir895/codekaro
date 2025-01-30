import { useNavigate } from 'react-router-dom';

function SkillLevelSelector() {
  const navigate = useNavigate();

  return (
<div className="px-4 w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 min-h-[100vh]">
<h1 className="text-white text-3xl font-bold mb-4">Select Your Skill Level</h1>
<div className="flex gap-4">
<button 
          className="bg-blue-600 text-white px-6 py- rounded-lg cursor pointer"
          onClick={() => navigate('/beginner')} 
        >
          Beginner
        </button>
        <button 
          onClick={() => navigate('/intermediate')} 
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Intermediate
        </button>
        <button 
          onClick={() => navigate('/expert')} 
          className="bg-red-600 text-white px-6 py-3 rounded-lg"
        >
          Expert
        </button>
        {/*<button 
          onClick={() => navigate('/courses')}
        >
        </button>*/}

      </div>
    </div>
  );
}

export default SkillLevelSelector;
