// Sidebar.js
import React, { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Settings", path: "/settings" },
    { name: "About", path: "/about" },
    { name: "Logout", path: "/logout" },
  ];

  return (
    <div>
      {/* Hamburger Button */}
      <button
        className="p-2 mt-8 mr-2 z-10  right-0 absolute top-0 text-[#1F2732] rounded-md focus:outline-none md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Bars3Icon className="w-12 h-12" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#1F2732] shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center bg-[#1F2732] justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            className="p-2 rounded-md hover:bg-gray-200"
            onClick={() => setIsOpen(false)}
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex bg-[#1F2732] flex-col  p-4 space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="p-2 rounded hover:bg-blue-100 transition"
              onClick={() => setIsOpen(false)} // close sidebar on click
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
