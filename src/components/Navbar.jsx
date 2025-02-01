import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react"; // Icons for navbar

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [progress, setProgress] = useState(40); // Dummy progress (replace with actual progress)
  const navigate = useNavigate();
  const location = useLocation(); // Track current page

  // Close dropdown when route changes
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location.pathname]);

  return (
    <nav className="bg-blue-500 text-white shadow-md w-full fixed top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 text-white text-4xl">
  <img src="/logo.png" alt="Logo" className="w-40 h-40 object-contain" />
</Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-15">
            <Link to="/" className="hover:text-gray-200 text-3xl px-6 py-4">Home</Link>
            <Link to="/courses" className="hover:text-gray-200 text-3xl px-6 py-4">Courses</Link>
            <Link to="/about" className="hover:text-gray-200 text-3xl px-6 py-4">About Us</Link>
          </div>

          {/* Circular Button for Account */}
          <div className="relative">
            <button 
              className="w-13 h-13 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-lg hover:bg-gray-100 cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <User size={24} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4">
                {/* Create Account Button */}
                <button 
                  className="w-full text-left px-4 py-2 text-blue-600 hover:bg-gray-100 rounded"
                  onClick={() => navigate("/create-account")}
                >
                  Create Account
                </button>
                
                {/* Dashboard Button */}
                <button 
                  className="w-full text-left px-4 py-2 text-blue-600 hover:bg-gray-100 rounded mt-2"
                  onClick={() => navigate("/dashboard")} // Navigate to Dashboard
                >
                  Dashboard
                </button>


                 {/* Games Button */}
                <button 
                  className="w-full text-left px-4 py-2 text-blue-600 hover:bg-gray-100 rounded mt-2"
                  onClick={() => navigate("/games")} // Navigate to Games
                >
                  Games
                </button>

                <div className="border-t my-2"></div>

                {/* Progress Bar */}
                <div>
                  <p className="text-sm font-semibold">Video Progress</p>
                  <div className="w-full bg-gray-300 rounded-full h-3 mt-1">
                    <div className="bg-blue-500 h-3 rounded-full" style={{ width: `${progress}%` }}></div>
                  </div>
                  <p className="text-gray-600 text-xs mt-1">{progress}% completed</p>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none ml-4" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="hidden md:flex space-x-6 ml-auto">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/courses" className="hover:text-gray-200">Courses</Link>
          <Link to="/about" className="hover:text-gray-200">About Us</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
