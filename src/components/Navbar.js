import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="sticky top-0 backdrop-blur-lg bg-opacity-90">
      <nav className="container max-w-4xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">김다현</h1>
        </div>
        <div className="hidden md:flex items-center gap-x-6">
          <a href="#home" className="hover:text-blue-500 transition-colors">
            홈
          </a>
          <a href="#about" className="hover:text-blue-500 transition-colors">
            AboutMe
          </a>
          <a href="#stack" className="hover:text-blue-500 transition-colors">
            Stack
          </a>
          <a href="#project" className="hover:text-blue-500 transition-colors">
            Project
          </a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">
            Contact
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
          >
            {darkMode ? (
              <i className="fas fa-sun text-yellow-400"></i>
            ) : (
              <i className="fas fa-moon text-gray-700"></i>
            )}
          </button>
        </div>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden p-2 text-gray-700 dark:text-white"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </nav>
      <aside
        className={`fixed top-0 right-0 h-screen w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="p-2 m-4 text-gray-700 dark:text-white"
        >
          <i className="fas fa-times text-2xl"></i>
        </button>
        <nav className="flex flex-col space-y-4 mt-10 px-6">
          <a href="#home" className="hover:text-blue-500 transition-colors">
            홈
          </a>
          <a href="#about" className="hover:text-blue-500 transition-colors">
            AboutMe
          </a>
          <a href="#stack" className="hover:text-blue-500 transition-colors">
            Stack
          </a>
          <a href="#project" className="hover:text-blue-500 transition-colors">
            Project
          </a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">
            Contact
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 w-full rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
          >
            {darkMode ? (
              <i className="fas fa-sun text-yellow-400"></i>
            ) : (
              <i className="fas fa-moon text-gray-700"></i>
            )}
          </button>
        </nav>
      </aside>
    </div>
  );
};

export default Navbar;
