import React, { memo } from "react";

const BackArrow = ({ onClick }) => {
  return (
    <div className="back-button" onClick={onClick}>
      <img src={"/images/Vector.png"} />
    </div>
  );
};

export default memo(BackArrow);
