import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import AnimatedContainer from "../components/AnimatedContainer";

export default function Profile() {
  const user = useUser();
  console.log(user);

  return (
    <AnimatedContainer>
      <div className="hero rounded-lg  bg-neutral">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="./lone-astro.jpg"
            className="max-w-sm rounded-lg shadow-2xl w-full"
          />
          <div>
            <h1 className="text-3xl md:text-5xl font-bold">
              Hello there <br />
              {user.user?.firstName} 👋
            </h1>
            <p className="py-2 md:py-4">
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
    </AnimatedContainer>
  );
}
