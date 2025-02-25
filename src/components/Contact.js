import React from "react";

const Contact = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form id="contactForm" className="space-y-4">
          <div>
            <label for="name" className="block mb-1 font-medium text-start">
              이름
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="dark:bg-gray-700 dark:border-gray-600 dark: text-white w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label for="name" className="block mb-1 font-medium text-start">
              이메일
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="dark:bg-gray-700 dark:border-gray-600 dark: text-white w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label for="name" className="block mb-1 font-medium text-start">
              메시지
            </label>
            <textarea
              type="text"
              id="name"
              name="name"
              required
              className="dark:bg-gray-700 dark:border-gray-600 dark: text-white w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 trasition-colors"
          >
            이메일 보내기
          </button>
        </form>
        <div className="flex flex-col items-center justify-center gap-y-4">
          <a
            href="#"
            target="_blank"
            className="dark:text-gray-300 flex items-center space-x-2 text-gray-600 hover:text-blue-500 trasition-colors"
          >
            <i class="fa-brands fa-github"></i>
            <span>GitHub</span>
          </a>
          <a
            href="#"
            className="dark:text-gray-300 flex items-center space-x-2 text-gray-600 hover:text-blue-500 trasition-colors"
          >
            <i class="fa-regular fa-envelope"></i>
            <span>kkdh0130@gmail.com</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
