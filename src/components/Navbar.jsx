import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md w-full fixed top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold">CodeKaro</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/courses" className="hover:text-gray-200">Courses</Link>
            <Link to="/about" className="hover:text-gray-200">About Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <Link to="/" className="block px-4 py-2 hover:bg-blue-800">Home</Link>
          <Link to="/courses" className="block px-4 py-2 hover:bg-blue-800">Courses</Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-blue-800">About Us</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
