import React, { memo } from "react";

const Error = ({ error }) => {
  return (
    <small className="form-text text-muted">
      <p className="text-danger">{`*${error}`}</p>
    </small>
  );
};

export default memo(Error);
