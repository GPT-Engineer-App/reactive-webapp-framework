import React from "react";
import { Route } from "react-router-dom";
import Projects from "./components/Projects";

function App() {
  return <Route path="/projects" element={<Projects />} />;
}

export default App;
