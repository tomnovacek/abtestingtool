import React from "react";
import "./styles.css";
import Form from "./Form";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <h1>AB testing tool</h1>
      <h2>Ensure significance and power of the tests</h2>
      <div>
        <Form />
      </div>
      <div>
        <h3>Summary</h3>
        <p>Experiment output</p>
      </div>
      <div>
        <h3>Additional data</h3>
        <p>significance: </p>
        <p>power: </p>
      </div>
      <div style={{ height: "100px" }}>Sample distribution graph.</div>
    </div>
  );
}
