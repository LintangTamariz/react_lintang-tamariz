import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { useLocation, useNavigate } from "react-router-dom";

const Navlist = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <ul className="text-xl my-2 flex flex-col lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="/"
          className="flex items-center hover:text-white hover:bg-blue-400 rounded-xl p-2 text-blue transition-color"
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-white hover:bg-blue-400 rounded-xl p-2 text-blue transition-colorr"
        >
          Features
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-white hover:bg-blue-400 rounded-xl p-2 text-blue transition-color"
        >
          Pricing
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-white hover:bg-blue-400 p-2 rounded-xl text-blue transition-color"
        >
          FAQ
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="/createproduct"
          className="flex items-center hover:text-white hover:bg-blue-400 p-2 rounded-xl text-blue transition-color"
          
        >
          Create Product
        </a>
      </Typography>
    </ul>
  );
};

export default Navlist;
