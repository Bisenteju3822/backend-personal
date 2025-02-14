import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { message } from "antd";
import "./Search.css";

const Search = () => {
  const [input, setInput] = useState({ amount: "" });
  const [mydata, setMydata] = useState([]);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = "https://personal-finance-tracker-avsp.onrender.com/personal/search";
    try {
      const response = await axios.post(api, input);
      console.log(response.data);
      setMydata(response.data);
      if (response.data.length > 0) {
        message.success("Expense data found!");
      } else {
        message.info("No expense data found for the given amount.");
      }
    } catch (error) {
      message.error("Error fetching data.");
    }
  };

  const ans = mydata.map((key) => (
    <Card style={{ width: "18rem" }} key={key._id}>
      <Card.Body>
        <Card.Title>Amount: {key.amount}</Card.Title>
        <Card.Text>
          <h3>Category: {key.category}</h3>
          <h3>Date: {key.date}</h3>
          <h3>Description: {key.description}</h3>
          <h3>Payment Method: {key.paymentMethod}</h3>
          <h3>Notes: {key.notes}</h3>
        </Card.Text>
      </Card.Body>
    </Card>
  ));

  return (
    <>
      <div id="myForm">
        <h1 style={{ color: "green" }}>Search Expense Data</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicSearch">
            <Form.Label>Enter Amount</Form.Label>
            <Form.Control
              type="text"
              name="amount"
              value={input.amount}
              onChange={handleInput}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
        <hr />
        {ans}
      </div>
    </>
  );
};

export default Search;
