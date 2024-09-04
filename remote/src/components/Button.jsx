import { useState } from "react";

import "./Button.css";
export const Button = () => {
  const [state, setState] = useState(0);
  const handleOnClick = () => {
    setState((s) => s + 1)
  }
  return (
    <div>
      <p>Share Components</p>
      <button className="shared-btn" onClick={handleOnClick}>
        Click me: {state}
      </button>
    </div>
  );
};

export default Button;