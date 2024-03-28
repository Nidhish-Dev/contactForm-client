import "../App.css";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(""); // New state for mobile number
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/contact", {
        name,
        email,
        message,
        mobile,
      }); // Include mobile in the data sent
      console.log(response.data);
      setAlertMessage("Sent successfully!");
      // Clear form fields upon successful submission
      setName("");
      setEmail("");
      setMessage("");
      setMobile("");
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setAlertMessage("Failed to send user data. Please try again.");
    }
  };

  return (
    <>
      <div className="App">
        <div className="main">
          <p className="getintouch">GET IN TOUCH</p>
          <form className="container" onSubmit={handleSubmit}>
            <input
              className="name"
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="mobile"
              placeholder="Mobile Number"
              type="tel"
              pattern="[0-9]{10}"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />{" "}
            {/* Mobile input with pattern for 10 digits */}
            <input
              className="msg"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></input>
            <button type="submit">
              Send
              <lord-icon
                src="https://cdn.lordicon.com/eodeknny.json"
                trigger="hover"
              ></lord-icon>
            </button>
            {alertMessage && (
              <div className="success">
                <p>{alertMessage}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
