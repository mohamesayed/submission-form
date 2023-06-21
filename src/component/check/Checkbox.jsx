import React, { useState } from "react";

function Checkbox() {
  const [isMaleChecked, setIsMaleChecked] = useState(false);
  const [isFemaleChecked, setIsFemaleChecked] = useState(false);

  function handleMaleChange() {
    setIsMaleChecked(!isMaleChecked);
    setIsFemaleChecked(false);
  }

  function handleFemaleChange() {
    setIsFemaleChecked(!isFemaleChecked);
    setIsMaleChecked(false);
  }

  return (
    <div style={{ marginTop: "50px" }}>
      <label>
        <input
          style={{ marginLeft: "20px", borderRadius: "50%" }}
          type="checkbox"
          checked={isMaleChecked}
          onChange={handleMaleChange}
        />
        Male
      </label>
      <label>
        <input
          style={{ marginLeft: "50px" }}
          type="checkbox"
          checked={isFemaleChecked}
          onChange={handleFemaleChange}
        />
        Female
      </label>
    </div>
  );
}

export default Checkbox;
