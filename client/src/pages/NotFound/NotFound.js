import React from "react";
import "./NotFound.css"; 

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>Oops! 404 Page Not Found</h1>
      <p>Looks like you've stumbled upon a page that doesn't exist. Don't worry, even the best of us get lost sometimes!</p>
      <p>But hey, while you're here, why not <a href="/">go back to the homepage</a> and explore more of our awesome content?</p>
    </div>
  );
};

export default NotFound;