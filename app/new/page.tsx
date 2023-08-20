import React from "react";

export default function Page() {
  console.log(`new page`);
  return (
    <main className={`flex min-h-screen flex-col justify-between p-24`}>
      <form>
        <div className={`space-y-12`}>
          <div className={`border-b border-gray-900/10 pb-12`}>
            <h2 className={`text-base font-semibold leading-7 text-gray-900`}>
              New Project
            </h2>
            <p className={`mt-1 text-sm leading-6 text-gray-600`}>
              새로운 프로젝트를 등록하기 위해 정보를 입력하세요.
            </p>

            <div
              className={`mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6`}
            >
              <div className={`sm:col-span-4`}>
                <label
                  htmlFor={`username`}
                  className={`block text-sm font-medium leading-6 text-gray-900`}
                >
                  프로젝트 명
                </label>
                <div className={`mt-2`}>
                  <div
                    className={`flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md`}
                  >
                    <input
                      type={`text`}
                      name={`username`}
                      id={`username`}
                      autoComplete={`username`}
                      className={`block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6`}
                      placeholder={`나의 웹소설`}
                    />
                  </div>
                </div>
              </div>

              <div className={`col-span-full`}>
                <label
                  htmlFor={`about`}
                  className={`block text-sm font-medium leading-6 text-gray-900`}
                >
                  About
                </label>
                <div className={`mt-2`}>
                  <textarea
                    id={`about`}
                    name={`about`}
                    rows={3}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                    defaultValue={``}
                    placeholder={`(선택 사항) 내 웹소설에 대한 간략한 소개를 적어주세요.`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-6 flex items-center justify-end gap-x-6`}>
          <button
            type={`button`}
            className={`text-sm font-semibold leading-6 text-gray-900`}
          >
            Cancel
          </button>
          <button
            type={`submit`}
            className={`rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          >
            Save
          </button>
        </div>
      </form>
    </main>
  );
}
