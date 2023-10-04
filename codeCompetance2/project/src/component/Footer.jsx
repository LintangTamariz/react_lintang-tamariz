import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="container w-full mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Lintang.
            </span>
          
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 text-xl">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 text-xl">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 text-xl">
                Licensing
              </a>
            </li>
            <li>
              <a className="hover:underline text-xl">
                Contact
              </a>
              <ul>
                <li>
                <a href="https://www.instagram.com/lintangtamariz/" className="hover:underline">
                Instagram
              </a>
                </li>
                <a href="https://www.linkedin.com/in/lintang-tamariz-1aa74a285/" className="hover:underline">
                LinkedIn
              </a>
              </ul>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Lintang
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
