import { useNavigate } from "react-router-dom";
import styles from '../../Styles/Services.module.css';
import image1 from "../../assets/imagesServices/image1.jpeg"
import image2 from "../../assets/imagesServices/image2.jpg"
import image3 from "../../assets/imagesServices/image3.webp"
import useTitle from "../../Hooks/useTitle/useTitle";

export default function Services() {
  const navigate = useNavigate();
  useTitle("CODENEST | Services")

  return (
    <div className={styles.servicesContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1>Our Comprehensive Services</h1>
        <p>
          At [Your Company Name], we are dedicated to providing exceptional services tailored to your specific needs. 
          Explore our offerings designed to elevate your experience and drive success.
        </p>
        <button className={styles.ctaButton} onClick={() => navigate("/about")}>
          Learn More
        </button>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2>What We Offer</h2>
        <p>
          Our extensive range of services is crafted to empower you and help you achieve your goals effectively. 
          Here’s how we can assist you:
        </p>
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <h3>Consulting Services</h3>
            <div className={styles["img-container"]} >
            <img src={image1} alt="consulting-services-image" className={styles["image"]} />
            </div>
            <p>
              Our expert consultants deliver valuable insights and strategies, guiding you through complex challenges 
              to achieve your objectives efficiently.
            </p>
          </div>
          <div className={styles.featureItem}>
            <h3>Product Development</h3>
            <div className={styles["img-container"]} >
            <img src={image2} alt="product-development-image" className={styles["image"]} />
            </div>
            <p>
              We specialize in crafting innovative products tailored to your specifications, ensuring quality and 
              operational efficiency every step of the way.
            </p>
          </div>
          <div className={styles.featureItem}>
            <h3>Customer Support</h3>
            <div className={styles["img-container"]} >
            <img src={image3} alt="customer-support-image"  className={styles["image"]}/>
            </div>
            <p>
              Our dedicated support team is committed to providing exceptional service, ensuring a seamless and 
              satisfying experience for our clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
