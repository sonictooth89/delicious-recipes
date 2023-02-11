import { Link } from "react-router-dom";
import { about } from "../contents/about";

export const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">{about}</p>

          <Link to="/recipes">
            <button className="btn btn-primary">Go to recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
