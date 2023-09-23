import { useUser } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  const user = useUser();
  console.log(user);

  return (
    <>
      <div className="hero rounded-lg  bg-neutral">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="./lone-astro.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Hello there <br />
              {user.user?.firstName} 👋
            </h1>
            <p className="py-6">
              Welcome space spotter! Our app offers two exciting features: a
              list of current astronauts in space and real-time tracking of the
              ISS on a world map. Explore the cosmos effortlessly and stay
              connected to the wonders of space. Join us today!
            </p>
            <Link to={"/astronauts"} className="btn btn-primary">
              Astronauts
            </Link>
            <Link to={"/spacestation"} className="btn ml-2">
              ISS Location
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
