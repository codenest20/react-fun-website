import { useNavigate } from "react-router-dom";
import styles from "../../Styles/Contact.module.css";
import GoogleMap from "../GoogleMap/GoogleMap";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div className={styles.contactContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1>Contact Us</h1>
        <p>
          We value your feedback and are here to assist you. <br></br> If you
          have any questions or inquiries, please feel free to reach out to us.
        </p>
        <button className={styles.ctaButton} onClick={() => navigate("/about")}>
          Learn More
        </button>
      </section>
      <GoogleMap />
    </div>
  );
}
