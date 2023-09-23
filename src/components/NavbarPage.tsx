import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import Footer from "./Footer";

interface INavbarPage {
  children: ReactNode;
}

export default function NavbarPage({ children }: INavbarPage) {
  return (
    <>
      <nav className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/spacestation"}>🛰️ Spacestation Location</Link>
              </li>
              <li>
                <Link to={"/astronauts"}>👨‍🚀 Astronauts</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            🚀 SpaceSpotter
          </Link>
        </div>
        <div className="navbar-end">
          <UserButton />
        </div>
      </nav>
      <main className="max-w-4xl mx-auto px-4 md:px-4 lg:px-2 mb-4">
        {children}
      </main>
      <Footer />
    </>
  );
}
