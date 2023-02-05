import React, { useEffect, useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { GetRepositoryList } from "./api/GitApi";
import { Repository } from "./api/interface/git";

function App() {
  const [repositoryList, setRepositoryList] = useState<Repository[] | null>(
    null
  );

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    const { repository } = await GetRepositoryList({
      q: "react",
      page: 1,
      per_page: 20,
    });
    setRepositoryList(repository);
    console.log("repositoryList", repository);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
