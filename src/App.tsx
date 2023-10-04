import React from "react";

interface User {
  name: string;
}

const userData: User = { name: "asdsa" };
console.log({ userData });

const UPPER_CASE = 24;
console.log(UPPER_CASE);

function App() {
  return (
    <div>
      <header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
