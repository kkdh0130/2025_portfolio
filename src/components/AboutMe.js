import React from "react";

const AboutMe = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <div className="text-start grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-4">교육 및 활동</h3>
          <ul className="text-gray-800 dark:text-gray-300 leading-relaxed space-y-2">
            <li>🔹 2025 | RPA+시큐어코딩 활용 자바스프링 개발자 과정 수료</li>
            <li>🔹 2024 | Udacity Intro to Programming 강의 수료</li>
          </ul>
        </article>
        <article className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-4">경력</h3>
          <ul className="text-gray-800 dark:text-gray-300 leading-relaxed space-y-2">
            <li>🔹 푸름인재개발원 (2020.04 ~ 2024.04)</li>
            <li>📌 LMS 시스템 관리 및 웹 퍼블리싱</li>
            <li>📌 UI/UX 개선 작업 및 반응형 웹 디자인 적용</li>
            <li>📌 기획 및 디자인 작업을 통한 교육 플랫폼 개선</li>
          </ul>
        </article>
      </div>
    </>
  );
};

export default AboutMe;
