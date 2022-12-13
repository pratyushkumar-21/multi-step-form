import React from "react";

const CustomRangeSlider = ({ value, min, max, rangeSymbol, ...rest }) => {
  return (
    <div>
      <div>
        <input
          type="range"
          min={min}
          max={max}
          defaultValue={value}
          {...rest}
          className="custom-slider-input"
        />
      </div>
      <div className="range-slider-data-indicator-wrapper">
        <div>
          {rangeSymbol}
          {min}
        </div>
        <div>
          {rangeSymbol}
          {max}
        </div>
      </div>
    </div>
  );
};

export default CustomRangeSlider;
