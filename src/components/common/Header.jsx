import React from "react";
import LogoIcon from "../../assets/logo.svg";
import SearchIcon from "../../assets/icons/search.svg";
import LogoutIcon from "../../assets/icons/logout.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {

  const { auth,setAuth } = useAuth();
  const handleLogOut = () => {
    setAuth({ auth });
  }
  return (
    <header>
      <nav className="container">
        {/* <!-- Logo --> */}
        <div>
          <Link to={"/"}>
            <img className="w-32" src={LogoIcon} alt="lws" />
          </Link>
        </div>

        {/* <!-- Actions - Login, Write, Home, Search -->
      <!-- Notes for Developers -->
      <!-- For Logged in User - Write, Profile, Logout Menu -->
      <!-- For Not Logged in User - Login Menu --> */}
        <div>
          <ul className="flex items-center space-x-5">
            <li>
              <a
                href="./createBlog.html"
                className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                Write
              </a>
            </li>
            <li>
              <a
                href="./search.html"
                className="flex items-center gap-2 cursor-pointer"
              >
                <img src={SearchIcon} alt="Search" />
                <span>Search</span>
              </a>
            </li>
            {/* Login */}
            <li>
              {" "}
              {auth?.user ? (
                <Link
                  to="/login"
                  className="text-white/50 hover:text-white transition-all duration-200"
                  onClick={handleLogOut}
                >
                  <div className="flex border border-gray-500 rounded-lg px-1">
                    Logout&nbsp;
                    <img className=" h-7" src={LogoutIcon} alt="log-out" />
                  </div>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="text-white/50 hover:text-white transition-all duration-200"
                >
                  Login
                </Link>
              )}{" "}
            </li>
            <li className="flex items-center">
              {/* <!-- Circular Div with background color --> */}
              <div className="avater-img bg-orange-600 text-white">
                <span className="">S</span>
                {/* <!-- User's first name initial --> */}
              </div>

              {/* <!-- Logged-in user's name --> */}
              <span className="text-white ml-2">Saad Hasan</span>
              {/* <!-- Profile Image --> */}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
