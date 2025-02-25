import React from "react";

const AboutMe = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">AboutMe</h2>
      <div className="text-start grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-6 hover:scale-105 transition-reansform duration-300">
          <h3 className="text-xl font-semibold mb-4">교육 및 활동</h3>
          <ul className="text-gray-800 dark:text-gray-300 leading-relaxed">
            <li>2024년 교육</li>
            <li>2024년 교육</li>
            <li>2024년 교육</li>
            <li>2024년 교육</li>
          </ul>
        </article>
        <article className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-6 hover:scale-105 transition-reansform duration-300">
          <h3 className="text-xl font-semibold mb-4">자격증</h3>
          <ul className="text-gray-800 dark:text-gray-300 leading-relaxed">
            <li>2024년 교육</li>
            <li>2024년 교육</li>
            <li>2024년 교육</li>
            <li>2024년 교육</li>
          </ul>
        </article>
      </div>
    </>
  );
};

export default AboutMe;
