import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/Content";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
