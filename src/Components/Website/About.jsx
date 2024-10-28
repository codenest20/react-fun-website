import { useNavigate } from "react-router-dom";
import "../../Styles/About.css"


export default function About() {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>About Us</h1>
        <p>
          Welcome to our company! <br></br>We are dedicated to providing top-notch services and innovative solutions to help you
          succeed. <br></br>Whether you're looking for resources, support, or expertise, we've got you covered.
        </p>
        <button className="cta-button" onClick={() => navigate("/about")}>
         Learn More
        </button>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>What We Offer</h2>
        <p>
          Our platform is designed with a variety of features to ensure you have everything you need to reach your
          goals. Here’s what makes us stand out:
        </p>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Innovative Solutions</h3>
            <p>
              Leverage cutting-edge tools and technologies that simplify complex tasks and maximize efficiency. We
              continuously improve our offerings to meet your evolving needs.
            </p>
          </div>
          <div className="feature-item">
            <h3>Expert Guidance</h3>
            <p>
              Our team of experts is here to support you every step of the way, providing insights and recommendations
              tailored to your unique challenges.
            </p>
          </div>
          <div className="feature-item">
            <h3>Customer-Centric Approach</h3>
            <p>
              We prioritize your experience and satisfaction, ensuring that our solutions are aligned with your specific
              goals and preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>
          Join us today and take the first step towards transforming your ideas into reality. We're here to help you
          achieve success.
        </p>
        <button className="cta-button" onClick={() => navigate("/contact")}>
          Contact Us
        </button>
      </section>
    </div>
  );
}
