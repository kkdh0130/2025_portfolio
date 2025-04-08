import React from "react";

const Project = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Project</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className="min-h-[200px] flex flex-col justify-between bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300">
          <div className="w-full h-[200px] overflow-hidden relative group">
            <img
              className="w-full h-auto transform translate-y-0 group-hover:translate-y-[-50%] transition-transform duration-700 ease-in-out"
              src="/images/pj_1.webp"
              alt="휴일도안심"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              휴일도안심
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-200 dark:bg-gray-700 text-xs px-3 py-0.5 rounded-md border border-gray-300 dark:border-gray-600">
                React
              </span>
              <span className="bg-gray-200 dark:bg-gray-700 text-xs px-3 py-0.5 rounded-md border border-gray-300 dark:border-gray-600">
                JavaScript
              </span>
              <span className="bg-gray-200 dark:bg-gray-700 text-xs px-3 py-0.5 rounded-md border border-gray-300 dark:border-gray-600">
                Redux
              </span>
            </div>
            <div className="flex justify-end gap-2 mt-auto">
              <a
                href="https://www.canva.com/design/DAGhhV3BQ-k/FFLj7wjgPztCVMaHytrAQQ/view?utm_content=DAGhhV3BQ-k&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9387afb634#16"
                className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md"
              >
                기획서 보기
              </a>
            </div>
          </div>
        </article>
        <article className="min-h-[200px] flex flex-col justify-between bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300">
          <div className="w-full h-[200px] overflow-hidden relative group">
            <img
              className="w-full h-auto transform translate-y-0 group-hover:translate-y-[-50%] transition-transform duration-700 ease-in-out"
              src="/images/pj_2.webp"
              alt="PokémonDex"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              PokémonDex - 포켓몬 도감 웹 서비스
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-200 dark:bg-gray-700 text-xs px-3 py-0.5 rounded-md border border-gray-300 dark:border-gray-600">
                React
              </span>
              <span className="bg-gray-200 dark:bg-gray-700 text-xs px-3 py-0.5 rounded-md border border-gray-300 dark:border-gray-600">
                Pokémon API
              </span>
              <span className="bg-gray-200 dark:bg-gray-700 text-xs px-3 py-0.5 rounded-md border border-gray-300 dark:border-gray-600">
                REST API
              </span>
            </div>
            <div className="flex justify-end gap-2 mt-auto">
              <a
                href="https://kkdh0130.github.io/my-pokemon/"
                className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md"
              >
                홈페이지 이동
              </a>
            </div>
          </div>
        </article>
        <article className="min-h-[200px] flex flex-col justify-between bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300">
          <div className="w-full h-[200px] overflow-hidden relative group">
            <img
              className="w-full h-auto transform translate-y-0 group-hover:translate-y-[-50%] transition-transform duration-700 ease-in-out"
              src="/images/pj_3.webp"
              alt="HRD 교육 홈페이지"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              HRD 교육 홈페이지
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-200 dark:bg-gray-700 text-xs px-3 py-0.5 rounded-md border border-gray-300 dark:border-gray-600">
                웹 기획
              </span>
              <span className="bg-gray-200 dark:bg-gray-700 text-xs px-3 py-0.5 rounded-md border border-gray-300 dark:border-gray-600">
                React
              </span>
              <span className="bg-gray-200 dark:bg-gray-700 text-xs px-3 py-0.5 rounded-md border border-gray-300 dark:border-gray-600">
                JavaScript
              </span>
              <span className="bg-gray-200 dark:bg-gray-700 text-xs px-3 py-0.5 rounded-md border border-gray-300 dark:border-gray-600">
                Bootstrap
              </span>
            </div>
            <div className="flex justify-end gap-2 mt-auto">
              <a
                href="https://hrdpuroom-index.vavv.net/"
                className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md"
              >
                홈페이지 이동
              </a>
            </div>
          </div>
        </article>
        <article className="min-h-[200px] flex flex-col justify-between bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300">
          <div className="w-full h-[200px] overflow-hidden relative group">
            <img
              className="w-full h-auto transform translate-y-0 group-hover:translate-y-[-50%] transition-transform duration-700 ease-in-out"
              src="/images/pj_4.webp"
              alt="Udacity 교육 파트너 페이지 퍼블리싱"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Udacity 교육 파트너 페이지 퍼블리싱
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-200 dark:bg-gray-700 text-xs px-3 py-0.5 rounded-md border border-gray-300 dark:border-gray-600">
                React
              </span>
              <span className="bg-gray-200 dark:bg-gray-700 text-xs px-3 py-0.5 rounded-md border border-gray-300 dark:border-gray-600">
                JavaScript
              </span>
              <span className="bg-gray-200 dark:bg-gray-700 text-xs px-3 py-0.5 rounded-md border border-gray-300 dark:border-gray-600">
                Bootstrap
              </span>
            </div>
            <div className="flex justify-end gap-2 mt-auto">
              <a
                href="https://udacitypartner.com/Why"
                className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md"
              >
                홈페이지 이동
              </a>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Project;
