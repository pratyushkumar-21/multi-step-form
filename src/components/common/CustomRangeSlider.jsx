import React, { memo } from "react";
import Error from "./Error";

const CustomRangeSlider = ({
  error,
  value,
  min,
  max,
  rangeSymbol,
  ...rest
}) => {
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

      {error && <Error error={error} />}
    </div>
  );
};

export default memo(CustomRangeSlider);
