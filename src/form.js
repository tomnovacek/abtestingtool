import React, { useState } from "react";
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Button
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/fontawesome-free-solid";

function Form() {
  const [state, setState] = useState({
    vA: "300",
    cA: "30",
    vB: "300",
    cB: "30"
  });

  const handleChange = (e) => {
    const { name, value } = e.target; //react synthetic event, copy name and value before running setState
    setState({ ...state, [name]: value });
    console.log(state);
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="input-form">
      <h3>Input data</h3>
      <div className="row justify-content-center mb-2">
        <div className="col-3 offset-3">Visitors</div>
        <div className="col-3 offset-1">Converters</div>
      </div>
      <InputGroup className="mb-1">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Experiment A</InputGroupText>
        </InputGroupAddon>
        <Input
          type="number"
          id="vA"
          name="vA"
          value={state.vA}
          required
          onChange={handleChange}
        />
        <InputGroupAddon addonType="append">
          <InputGroupText style={{ width: "40px" }}>
            <FontAwesomeIcon icon={["fas", "arrow-right"]} />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          type="number"
          id="cA"
          name="cA"
          value={state.cA}
          required
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Experiment B</InputGroupText>
        </InputGroupAddon>
        <Input
          type="number"
          id="vB"
          name="vB"
          value={state.vB}
          required
          onChange={handleChange}
        />
        <InputGroupAddon addonType="append">
          <InputGroupText style={{ width: "40px" }}>
            <FontAwesomeIcon icon={["fas", "arrow-right"]} />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          type="number"
          id="cB"
          name="cB"
          value={state.cB}
          required
          onChange={handleChange}
        />
      </InputGroup>
      <div>
        <Button className="button" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}
export default Form;
