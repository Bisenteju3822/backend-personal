import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { message } from "antd";
import "./Insert.css";

const Insert = () => {
  const [input, setInput] = useState({
    amount: "",
    category: "",
    date: "",
    description: "",
    paymentMethod: "",
    notes: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = "https://personal-finance-tracker-avsp.onrender.com/personal/insert";
    try {
      const response = await axios.post(api, input);
      console.log(response.data);
      message.success(response.data.msg);
      setInput({
        amount: "",
        category: "",
        date: "",
        description: "",
        paymentMethod: "",
        notes: "",
      });
    } catch (error) {
      {
        error;
      }
      message.error("Error saving expense data.");
    }
  };

  return (
    <div id="myForm">
      <h1 style={{ color: "green" }}>Insert Expense Record</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicAmount">
          <Form.Label>Enter Amount</Form.Label>
          <Form.Control
            type="number"
            name="amount"
            value={input.amount}
            onChange={handleInput}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCategory">
          <Form.Label>Enter Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={input.category}
            onChange={handleInput}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Enter Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={input.date}
            onChange={handleInput}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Enter Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={input.description}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPaymentMethod">
          <Form.Label>Enter Payment Method</Form.Label>
          <Form.Control
            type="text"
            name="paymentMethod"
            value={input.paymentMethod}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNotes">
          <Form.Label>Enter Notes</Form.Label>
          <Form.Control
            type="text"
            name="notes"
            value={input.notes}
            onChange={handleInput}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Insert;
