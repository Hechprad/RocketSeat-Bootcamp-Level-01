import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./App.css";

import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  const handleAddProject = async () => {
    const response = await api.post("projects", {
      title: `Projeto adicionado pelo onClick do button ${Date.now()}`,
      owner: "Jorge Hecherat",
    });

    const project = response.data;

    response.status === 200 && setProjects([...projects, project]);
  };

  return (
    <>
      <Header title="Projects" />
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
      <button type="button" onClick={() => handleAddProject()}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
