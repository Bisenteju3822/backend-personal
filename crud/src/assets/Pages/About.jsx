const About = () => {
  return (
    <section className="about bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>About Us</h2>
            <p className="lead">
              We are a team of passionate individuals committed to delivering
              the best services to our customers. Our mission is to help you
              succeed by providing top-notch solutions tailored to your needs.
            </p>
            <p>
              With years of experience and a dedication to excellence, we strive
              to exceed your expectations in every project we undertake. Join us
              on our journey and lets achieve great things together!
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="pexels-william-fortunato-6393018.jpg"
              alt="About Us"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
