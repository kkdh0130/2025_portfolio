import React from "react";

const Contact = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        🎯 함께 성장할 수 있는 기회를 기다리고 있습니다. 언제든 연락 주세요!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
          <i className="fa-regular fa-envelope text-3xl text-blue-600 mb-3"></i>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Email</h3>
          <a href="mailto:kkdh0130@gmail.com" className="text-blue-600 hover:underline">
            kkdh0130@gmail.com
          </a>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
          <i className="fa-solid fa-code text-3xl text-green-500 mb-3"></i>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Skills</h3>
          <p className="text-gray-700 dark:text-gray-300 text-center">
            ✨ HTML, CSS, JavaScript, React
          </p>
        </div>
      </div>
      <p className="text-center text-gray-600 dark:text-gray-300 mt-8"></p>
    </>
  );
};

export default Contact;
