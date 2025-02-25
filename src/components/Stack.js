import React from "react";

const Stack = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Stack</h2>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
        <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
          <i class="fa-brands fa-html5 text-4xl text-red-500 mb-1"></i>
          <h3 className="text-lg font-semibold">HTML</h3>
        </div>
        <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
          <i class="fa-brands fa-css3-alt text-4xl text-blue-500 mb-1"></i>{" "}
          <h3 className="text-lg font-semibold">CSS3</h3>
        </div>
        <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
          <i class="fa-brands fa-js text-4xl text-yellow-500 mb-1"></i>
          <h3 className="text-lg font-semibold">JavaScript</h3>
        </div>
        <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
          <i class="fa-brands fa-react text-4xl text-blue-400 mb-1"></i>
          <h3 className="text-lg font-semibold">React</h3>
        </div>
        <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
          <i class="fa-brands fa-vuejs text-4xl text-green-500 mb-1"></i>
          <h3 className="text-lg font-semibold">Vue.js</h3>
        </div>
        <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
          <i class="fa-brands fa-node text-4xl text-black-500 mb-1"></i>
          <h3 className="text-lg font-semibold">Node.js</h3>
        </div>
      </div>
    </>
  );
};

export default Stack;
