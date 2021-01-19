import React, { useState, useEffect } from "react";

const ActionButtons = ({ user, board }) => {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    //
  }, [user]);
  return (
    <div>
      <button>Save</button>
      <button style={{ backgroundColor: "green" }}>Saved</button>
      <button>Open Guide</button>
    </div>
  );
};

export default ActionButtons;
