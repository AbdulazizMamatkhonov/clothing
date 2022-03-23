import React from "react";
import "./menu-item.styles.scss";
import { useLocation, useNavigate } from "react-router-dom";

function withRouter(Child) {
  return (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    return <Child {...props} navigate={navigate} location={location} />;
  };
}

const MenuItem = ({ title, imageUrl, size, navigate, linkUrl, location }) => {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => {
        navigate(`${location.pathname}${linkUrl}`);
      }}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
