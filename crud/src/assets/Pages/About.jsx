const About = () => {
  return (
    <section className="about bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>About Us</h2>
            <p className="lead">
              Welcome to Your Financial Companion! Our Personal Finance Tracker
              is designed to help you take control of your financial life.
              Whether youre looking to manage your daily expenses, save for
              future goals, or track your investments, our app is here to
              support you every step of the way.
            </p>
            <p className="lead">
              <strong>Key Features:</strong>
              <br />
              <strong>Expense Tracking:</strong> Log and categorize your
              expenses to see where your money is going.
              <br />
              <strong>Budgeting:</strong> Create and manage budgets to ensure
              you stay on track with your financial goals.
              <br />
              <strong>Investment Monitoring:</strong> Keep an eye on your
              investments and see how they contribute to your financial health.
              <br />
              <strong>Credit Score Monitoring:</strong> Regularly check your
              credit score and receive alerts for any changes.
              <br />
              <strong>Financial Goal Setting:</strong> Set short-term and
              long-term goals, and track your progress.
              <br />
              <strong>Customizable Reports:</strong> Generate detailed reports
              to analyze your spending habits and make informed decisions.
            </p>
            <p className="lead">
              <strong>Why Choose Us?</strong>
              <br />
              <strong>User-Friendly Interface:</strong> Easy to navigate and
              use, even for beginners.
              <br />
              <strong>Real-Time Updates:</strong> Connect your bank accounts and
              credit cards for up-to-date information.
              <br />
              <strong>Security and Privacy:</strong> Your financial data is safe
              with us, thanks to advanced encryption and security measures.
              <br />
              <strong>Free and Affordable Plans:</strong> Choose a plan that
              fits your needs and budget.
            </p>
            <p className="lead">
              Join us today and start your journey towards financial stability
              and success!
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="pexels-william-fortunato-6393018.jpg"
              alt="About Us"
              className="img-fluid"
              style={{
                borderRadius: "20px",
                width: "500px",
                marginTop: "160px",
                marginLeft: "100px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
