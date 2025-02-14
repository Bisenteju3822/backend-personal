import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
import "./Display.css";

const Display = () => {
  const [data, setData] = useState([]);

  const loadData = () => {
    const api = "https://personal-finance-tracker-avsp.onrender.com/personal/display";
    axios
      .get(api)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        message.error("Error loading data");
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div id="myForm">
        <h1 style={{ color: "green" }}>Display Expense Records</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
              <th>Description</th>
              <th>Payment Method</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {data.map((record, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{record.amount}</td>
                <td>{record.category}</td>
                <td>{record.date}</td>
                <td>{record.description}</td>
                <td>{record.paymentMethod}</td>
                <td>{record.notes}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Display;
