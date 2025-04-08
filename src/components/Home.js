import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start">
      {/* 프로필 이미지 */}
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
        <p className="text-xl mb-4 text-blue-600 dark:text-blue-400">
          웹 퍼블리셔 & UI/UX 디자이너
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          사용자의 경험을 최우선으로 생각하며, <br className="hidden md:block" />
          직관적인 디자인과 반응형 웹 구현을 통해 더 나은 웹 환경을 만들고자 합니다. <br />
          최신 웹 기술과 디자인 트렌드를 적용하여 깔끔하고 가독성 높은 UI를 제작합니다.
        </p>
      </div>
    </div>
  );
};

export default Home;
