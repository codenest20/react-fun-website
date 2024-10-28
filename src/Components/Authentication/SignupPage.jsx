import { useState } from "react";
import styles from "./Css/SignupPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const keyName = "signupData";

const SignupPage = () => {
  const navigate = useNavigate();

  const initialData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const [inputData, setInputData] = useState(initialData);
  const [totalData, setTotalData] = useState(
    JSON.parse(localStorage.getItem(keyName)) || []
  );

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  const validateInput = () => {
    const { firstName, lastName, email, password, confirmPassword } = inputData;
    if (!firstName || !lastName || !email || !password) {
      toast.error("All fields are required.");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.", {
        position: "bottom-right",
        theme: "colored",
      });
      return false;
    }
    return true;
  };

  const saveToLocalStorage = (data) => {
    localStorage.setItem(keyName, JSON.stringify(data));
    setTotalData(data);
  };

  const signupClick = (e) => {
    e.preventDefault();
    if (validateInput()) {
      const updatedData = [...totalData, inputData];
      saveToLocalStorage(updatedData);
      toast.success("Registration Successful");
      navigate("/login");
    }
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupForm}>
        <h1>Create Your Account</h1>
        <form onSubmit={signupClick}>
          {Object.entries(inputData).map(([key, value]) => (
            <div className={styles.formGroup} key={key}>
              <input
                type={key.includes("password") ? "password" : "text"}
                name={key}
                id={key}
                value={value}
                placeholder={`Enter ${key.replace(/([A-Z])/g, " $1")}`}
                onChange={handleInput}
                required
              />
            </div>
          ))}
          <button type="submit" className={styles.signupBtn}>
            Sign Up
          </button>
          <div className={styles.accountAlready}>
            <p>Already Have an Account?</p>
            <Link className={styles.login} to="/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
