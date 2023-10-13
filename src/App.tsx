import React from "react";

interface User {
  name: string;
  age: number;
}

interface Person {
  name: string;
}

const person1: Person = { name: "Mahesh" };

console.log(person1);

const userData: User = { name: "asdsa", age: 30 };
console.log({ userData });

userData.age = 30;

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
