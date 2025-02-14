import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useEffect, useState } from "react";
import { message } from "antd";
import "./update.css";

const EmpEdit = () => {
  const { id } = useParams();
  const [input, setInput] = useState({});

  const loadData = async () => {
    const api = "https://personal-finance-tracker-avsp.onrender.com/personal/editdatashow";
    const res = await axios.post(api, { expenseId: id });
    setInput(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    loadData();
  }, [id]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = "http://localhost:8000/personal/editdatasave";
    const res = await axios.post(api, input);
    message.success("Record Successfully updated!!!");
    console.log(res);
  };

  return (
    <>
      <div id="myForm">
        <h1 style={{ color: "green" }}>Edit Expense Record</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              name="amount"
              value={input.amount || ""}
              onChange={handleInput}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={input.category || ""}
              onChange={handleInput}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={input.date || ""}
              onChange={handleInput}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={input.description || ""}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMerchant">
            <Form.Label>Merchant/Vendor</Form.Label>
            <Form.Control
              type="text"
              name="merchant"
              value={input.merchant || ""}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPaymentMethod">
            <Form.Label>Payment Method</Form.Label>
            <Form.Control
              type="text"
              name="paymentMethod"
              value={input.paymentMethod || ""}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNotes">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              type="text"
              name="notes"
              value={input.notes || ""}
              onChange={handleInput}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default EmpEdit;
