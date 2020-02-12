import React from "react";

function IconText({ icon, text }) {
  return (
    <>
      <div className="icon-text">
        <i className={icon}></i>
        <p>{text}</p>
      </div>
    </>
  );
}

export default IconText;
