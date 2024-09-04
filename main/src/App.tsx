import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";

const RemoteButton = React.lazy(() => import("remoteApp/Button"));
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Main - Vite + React + TS</h1>

      <ErrorBoundary fallback={<div>Something went wrong...</div>}>
        {
          // Remember to use ErrorBoundary for error handling in module federation
          // when a package can’t be found.
        }
        <RemoteButton />
      </ErrorBoundary>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
