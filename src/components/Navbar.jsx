import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const handleLog = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <nav>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-[#22C55E] font-bold text-2xl">Logo</h1>
            </Link>
          </div>
          <div className="flex items-center">
            <button
              className="bg-[#22C55E] text-white px-6 py-2 rounded-full text-sm font-semibold mr-3"
              onClick={handleLog}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
