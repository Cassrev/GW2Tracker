import React, { useState } from "react";

export const NumberInputField = () => {
  const [val, setVal] = useState("");

  return (
    <div>
      <input
        type="number"
        pattern="[0-250]*"
        value={val}
        onChange={(e) =>
          setVal((v) => (e.target.validity.valid ? e.target.value : v))
        }
      />
    </div>
  );
}
