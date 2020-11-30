import React from "react";
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Button
} from "reactstrap";

class Form extends React.Component {
  render() {
    return (
      <div className="input-form">
        <h3>Input data</h3>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText className="input-label">
              Sample size A
            </InputGroupText>
          </InputGroupAddon>
          <Input type="number" placeholder="Visitors" required />
        </InputGroup>
        <InputGroup className="mt-2">
          <InputGroupAddon addonType="prepend">
            <InputGroupText className="input-label">
              > Conversion A
            </InputGroupText>
          </InputGroupAddon>
          <Input type="number" placeholder="Conversions" />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText className="input-label">
              Sample size B
            </InputGroupText>
          </InputGroupAddon>
          <Input type="number" placeholder="Visitors" />
        </InputGroup>
        <InputGroup className="mt-2">
          <InputGroupAddon addonType="prepend">
            <InputGroupText className="input-label">
              > Convertion B
            </InputGroupText>
          </InputGroupAddon>
          <Input type="number" placeholder="Conversions" />
        </InputGroup>
        <div>
          <Button className="button">Submit</Button>
        </div>
      </div>
    );
  }
}

export default Form;
