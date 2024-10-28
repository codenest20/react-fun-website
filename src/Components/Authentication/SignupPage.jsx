import { useState } from "react";
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
    <div className="flex justify-center items-center h-screen w-full bg-gray-100 p-8">
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-center mb-4 text-purple-600 text-2xl font-bold">Create Your Account</h1>
        <form onSubmit={signupClick}>
          {Object.entries(inputData).map(([key, value]) => (
            <div className="mb-3" key={key}>
              <input
                type={key.includes("password") ? "password" : "text"}
                name={key}
                id={key}
                value={value}
                placeholder={`Enter ${key.replace(/([A-Z])/g, " $1")}`}
                onChange={handleInput}
                required
                className="w-full h-10 px-3 border-2 border-gray-300 rounded focus:outline-none focus:border-purple-600 text-center"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300"
          >
            Sign Up
          </button>
          <div className="flex justify-center mt-4">
            <p>Already Have an Account?</p>
            <Link className="ml-1 text-blue-500 font-bold" to="/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
