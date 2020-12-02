import React, { useEffect, useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./form";
import Chart from "./chart";

const datas = [
  [10, 30, 40, 20],
  [10, 40, 30, 20, 50, 10],
  [60, 30, 40, 20, 30]
];
var i = 0;

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    changeData();
  }, []);

  const changeData = () => {
    setData(datas[i++]);
    if (i === datas.length) i = 0;
  };

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
      <div>
        <h3>Bell Chart</h3>
        <Chart width={300} height={200} data={data} />
      </div>
    </div>
  );
}
