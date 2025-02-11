import { useNavigate } from "react-router-dom";
import { FaDatabase } from "react-icons/fa"; // Importing Font Awesome icon

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/dashboard"); // Update this path to match your admin dashboard route
  };

  return (
    <>
      <section className="about bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 style={{ fontSize: "70px", marginTop: "90px" }}>
                This is{" "}
                <span style={{ color: "blue" }}>Personal Finance Tracker</span>
              </h1>
              <button
                onClick={handleButtonClick}
                style={{
                  fontSize: "20px",
                  padding: "10px 20px",
                  marginTop: "20px",
                  borderRadius: "10px", // Rounded corners
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#007bff", // Background color
                  color: "#fff", // Text color
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                  marginLeft: "80px", // Smooth transition for hover effect
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#0056b3"; // Change background on hover
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#007bff"; // Revert background on mouse out
                }}
              >
                <FaDatabase style={{ marginRight: "40px" }} /> Get Data
              </button>
            </div>
            <div className="col-md-6">
              <img
                style={{
                  borderRadius: "20px",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
                src="pexels-karolina-grabowska-4498483.jpg"
                alt="About Us"
                className="img-fluid"
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0px 8px 16px rgba(0, 0, 0, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0px 4px 8px rgba(0, 0, 0, 0.1)";
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
