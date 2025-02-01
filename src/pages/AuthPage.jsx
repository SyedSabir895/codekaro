import { useState } from "react";
import axios from "axios";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const url = isRegister
        ? "http://localhost:5000/api/auth/register"
        : "http://localhost:5000/api/auth/login";

      const response = await axios.post(url, { email, password });

      if (response.data.message) {
        alert(response.data.message);
      }
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 p-4">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 p-8">
          <div className="flex justify-between border-b pb-2">
            <button
              className={`text-lg font-semibold ${!isRegister ? "text-gray-400" : "border-b-2 border-blue-500"}`}
              onClick={() => setIsRegister(true)}
            >
              Register
            </button>
            <button
              className={`text-lg font-semibold ${isRegister ? "text-gray-400" : "border-b-2 border-blue-500"}`}
              onClick={() => setIsRegister(false)}
            >
              Log in
            </button>
          </div>
          <div className="mt-6 space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
              {isRegister ? "Create Account" : "Log in"}
            </button>
            <div className="flex items-center my-4">
              <div className="flex-1 border-b"></div>
              <span className="px-2 text-gray-500">OR</span>
              <div className="flex-1 border-b"></div>
            </div>
            <button className="w-full flex items-center justify-center border rounded-lg py-2 hover:bg-gray-100">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-6 h-6 mr-2" />
              Continue with Google
            </button>
            <p className="text-xs text-center text-gray-500 mt-4">
              By continuing you agree to our <span className="text-blue-500">Terms of Use</span> and <span className="text-blue-500">Privacy Policy</span>
            </p>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="w-1/2 bg-gradient-to-br from-blue-500 to-blue-700 text-white flex flex-col justify-center items-center p-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Unlock your Coding Journey</h2>
          <ul className="text-lg space-y-2">
            <li className="flex items-center"><span className="mr-2">💻</span> Practice-Driven</li>
            <li className="flex items-center"><span className="mr-2">♾️</span> Unlimited</li>
            <li className="flex items-center"><span className="mr-2">🎮</span> Fun</li>
            <li className="flex items-center"><span className="mr-2">👤</span> Personalized</li>
            <li className="flex items-center"><span className="mr-2">🤖</span> AI Enhanced</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
