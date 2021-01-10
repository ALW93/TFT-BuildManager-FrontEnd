import React, { useState, useEffect } from "react";

const View = ({ match }) => {
  const buildId = match.params.id;
  const [board, setBoard] = useState([]);

  useEffect(() => {
    //
  }, []);

  return (
    <div>
      <h1>Build Preview</h1>
      BUILD {buildId}
    </div>
  );
};
export default View;
