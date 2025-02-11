import axios from "axios";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import "./update.css";

const Update = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const loadData = async () => {
    let api = "http://localhost:8000/personal/display";
    const res = await axios.get(api);
    setData(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    let api = `http://localhost:8000/personal/delete/?expenseId=${id}`;
    const res = await axios.get(api);
    message.success(res.data);
    loadData();
  };

  const handleEdit = (id) => {
    navigate(`/empedit/${id}`);
  };

  const ans = data.map((record, index) => {
    return (
      <tr key={index}>
        <td>{record.amount}</td>
        <td>{record.category}</td>
        <td>{record.date}</td>
        <td>{record.description}</td>
        <td>{record.paymentMethod}</td>
        <td>{record.notes}</td>
        <td>
          <RiDeleteBin6Fill
            id="myIcon"
            onClick={() => {
              handleDelete(record._id);
            }}
          />
        </td>
        <td>
          <FaEdit
            id="myIcon"
            onClick={() => {
              handleEdit(record._id);
            }}
          />
        </td>
      </tr>
    );
  });

  return (
    <div id="myForm">
      <h1 style={{ color: "green" }}>Update Expense Records</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Description</th>
            <th>Payment Method</th>
            <th>Notes</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </Table>
    </div>
  );
};

export default Update;
