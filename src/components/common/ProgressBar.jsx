import React from "react";

const ProgressBar = (props) => {
  const { numberOfBars, active } = props;

  const getDividers = () => {
    let list = [];
    for (let i = 1; i <= numberOfBars; i++) {
      list.push(
        <div key={i} className={i <= active ? "bar bar-active" : "bar"}></div>
      );
    }
    return list;
  };

  return <div className="progress-bar-container">{getDividers()}</div>;
};

export default ProgressBar;
