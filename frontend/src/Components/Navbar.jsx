import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="">
      <div className="navbar bg-base-300 ">
        <div className="flex-1 px-2 lg:flex-none">
          <Link to="/users" className="text-lg font-bold ml-10">
            DBMS
          </Link>
        </div>
        <div className="flex justify-center flex-1 px-2">
          <div className="flex items-stretch">
            <Link to="/groups" className="btn btn-ghost rounded-btn text-xl">
              Groups
            </Link>

            <Link to="/users" className="btn btn-ghost rounded-btn text-xl">
              Users
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
