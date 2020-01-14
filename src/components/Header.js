import React from "react";

const Header = props => {
  return (
    <div className="jumbotron lead text-center container">
      <h1>{props.headerTitle} </h1>
    </div>
  );
};

export default Header;
