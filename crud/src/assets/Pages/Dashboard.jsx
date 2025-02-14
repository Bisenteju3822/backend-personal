import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaPlusCircle,
  FaEdit,
  FaTable,
  FaSearch,
  FaInfoCircle,
} from "react-icons/fa"; // Importing Font Awesome icons
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <Container id="dashboard" className="mt-5">
      <h1 className="dashboard-title text-center mb-5">Admin Dashboard</h1>
      <Row className="align-items-center">
        <Col md={8}>
          <Row>
            <Col md={6} className="mb-4">
              <Card
                as={Link}
                to="/insert"
                className="text-center dashboard-card"
              >
                <Card.Body>
                  <FaPlusCircle size={40} className="mb-3" />
                  <Card.Title>Insert Record</Card.Title>
                  <Card.Text>Add new records to the database.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card
                as={Link}
                to="/update"
                className="text-center dashboard-card"
              >
                <Card.Body>
                  <FaEdit size={40} className="mb-3" />
                  <Card.Title>Update Record</Card.Title>
                  <Card.Text>Edit existing records in the database.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card
                as={Link}
                to="/display"
                className="text-center dashboard-card"
              >
                <Card.Body>
                  <FaTable size={40} className="mb-3" />
                  <Card.Title>Display Records</Card.Title>
                  <Card.Text>View all records in the database.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card
                as={Link}
                to="/search"
                className="text-center dashboard-card"
              >
                <Card.Body>
                  <FaSearch size={40} className="mb-3" />
                  <Card.Title>Search Records</Card.Title>
                  <Card.Text>
                    Search for specific records in the database.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card
                as={Link}
                to="/about"
                className="text-center dashboard-card"
              >
                <Card.Body>
                  <FaInfoCircle size={40} className="mb-3" />
                  <Card.Title>About</Card.Title>
                  <Card.Text>Learn more about this application.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <img
            src="pexels-jakubzerdzicki-30572289.jpg"
            alt="Dashboard"
            className="img-fluid"
            style={{
              borderRadius: "20px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
