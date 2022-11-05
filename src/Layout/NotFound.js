import React from "react";
import { Link } from "react-router-dom";
import { HomeButton } from "./components/homepagecomponent/DecksButton";
function NotFound() {
  return (
    <div className="NotFound">
      <Link to='/'>
        <HomeButton />

      </Link>
      <h1>Not Found</h1>
    </div>
  );
}

export default NotFound;
