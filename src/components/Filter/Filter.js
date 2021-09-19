import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

const Filter = ({ handleChange, text }) => {
  return (
    <div>
      <Card className="text-center">
        <Card.Body>
          <Form.Control
            type="text"
            placeholder="Search Task"
            onChange={handleChange}
            value={text}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Filter;
