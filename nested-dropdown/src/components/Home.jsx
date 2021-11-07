import React from "react";
import { Container, Dropdown } from "react-bootstrap";
import NestedDropdown from "./NestedDropdown";

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Dropdown autoClose="outside">
          <Dropdown.Toggle variant="primary">
            Dropdown
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <NestedDropdown title="Item 3">
              <Dropdown.Item>Item 3.1</Dropdown.Item>
              <Dropdown.Item>Item 3.2</Dropdown.Item>
              <Dropdown.Item>Item 3.3</Dropdown.Item>
            </NestedDropdown>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    );
  }
}
