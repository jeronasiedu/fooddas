import React from "react"

const SignIn = () => {
  return (
    <div>
      <div className="w-full h-full px-4 py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full p-10 mt-16 bg-white rounded shadow lg:w-1/3 md:w-1/2">
            <p
              tabindex="0"
              className="text-2xl font-extrabold leading-6 text-gray-800 focus:outline-none"
            >
              Login to your account
            </p>
            <p
              tabindex="0"
              className="mt-4 text-sm font-medium leading-none text-gray-500 focus:outline-none"
            >
              Dont have account?{" "}
              <a
                href="javascript:void(0)"
                className="text-sm font-medium leading-none text-gray-800 cursor-pointer hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline"
              >
                {" "}
                Sign up here
              </a>
            </p>
            <button
              aria-label="Continue with google"
              role="button"
              className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
                alt="google"
              />
              <p className="ml-4 text-base font-medium text-gray-700">
                Continue with Google
              </p>
            </button>
            <button
              aria-label="Continue with github"
              role="button"
              className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg3.svg"
                alt="github"
              />
              <p className="ml-4 text-base font-medium text-gray-700">
                Continue with Github
              </p>
            </button>
            <button
              aria-label="Continue with twitter"
              role="button"
              className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg4.svg"
                alt="twitter"
              />
              <p className="ml-4 text-base font-medium text-gray-700">
                Continue with Twitter
              </p>
            </button>
            <div className="flex items-center justify-between w-full py-5">
              <hr className="w-full bg-gray-400" />
              <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
                OR
              </p>
              <hr className="w-full bg-gray-400 " />
            </div>
            <div>
              <label
                id="email"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Email
              </label>
              <input
                aria-labelledby="email"
                type="email"
                className="w-full py-3 pl-3 mt-2 text-xs font-medium leading-none text-gray-800 bg-gray-200 border rounded"
              />
            </div>
            <div className="w-full mt-6">
              <label
                for="pass"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Password
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  id="pass"
                  type="password"
                  className="w-full py-3 pl-3 mt-2 text-xs font-medium leading-none text-gray-800 bg-gray-200 border rounded"
                />
                <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg"
                    alt="viewport"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button
                role="button"
                className="w-full py-4 text-sm font-semibold leading-none text-white bg-indigo-700 border rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none hover:bg-indigo-600"
              >
                Create my account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
