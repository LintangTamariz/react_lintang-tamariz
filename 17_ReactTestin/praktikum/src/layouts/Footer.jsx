import React from "react";
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  const SITEMAP = [
    {
      title1: "ARSHA",
      links: ["A108 Adam Street", "Careers", "Our Team", "Projects"],
    },
    {
      title2: "Help Center",
      links: ["Discord", "Twitter", "GitHub", "Contact Us"],
    },
    {
      title3: "Resources",
      links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
    },
    {
      title: "Products",
      links: ["Templates", "UI Kits", "Icons", "Mockups"],
    },
  ];

  const currentYear = new Date().getFullYear();
  return (
    <footer className="">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SITEMAP.map(({ title1, links }) => (
            <div key={title1} className="w-full">
              <Typography
                variant="small"
                className="text-blue-950 mb-4 font-bold text-2xl underline"
              >
                {title1}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography
                    key={key}
                    as="li"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <a
                      href="#"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full items-center justify-center  py-4 md:flex-row md:justify-between bg-blue-500 text-white">
        <div className="mx-auto  w-full">
          <Typography
            variant="small"
            className=" text-center font-normal text-blue-gray-900 md:mb-0 "
          >
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">Copyright.ARSHA</a>. All
            Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;