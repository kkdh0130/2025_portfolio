import React from "react";

const Home = () => {
  return (
    <>
      <div className="shrink-0 mb-6 md:mb-0 md:mr-10">
        <img
          id="home"
          className="w-56 h-56 rounded-full border-2 object-cover"
          src="https://api.dicebear.com/9.x/adventurer/svg?seed=Maria"
          alt="avatar"
        />
      </div>
      <div className="md:text-right text-center">
        <h1 className="text-4xl font-bold mb-2">김다현</h1>
        <p className="text-xl mb-4">혁신적인 개발자</p>
        <p className="text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores distinctio autem
          ipsum saepe? Maiores possimus veniam culpa aperiam saepe accusantium tempora molestias
          consequatur reprehenderit officiis sint, quo necessitatibus aliquid alias!
        </p>
      </div>
    </>
  );
};

export default Home;
