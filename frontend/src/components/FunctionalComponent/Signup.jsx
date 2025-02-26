import "../css/Signup.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Signup() {
  const navigate=useNavigate()
  const [firstName, setFN] = useState("");
  const [lastName, setLN] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [phoneNumber, setPN] = useState(0);
  const handleSignup = async(event) => {
    event.preventDefault()
    const req =await axios.post("http://localhost:3001/signup", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phoneNumber,
    });
    const message=req.data.message
    const isSignup=req.data.isSignup
    if(isSignup){
      alert(message)
      navigate("/Login")
    }
    else{
      alert(message)
    }
  };
  return (
    <div>
      <form onSubmit={handleSignup} className="form-container">
        <table>
          <tr>
            <td>
              <label htmlFor="First name">First name:</label>
            </td>
            <td>
              <input
                id="firstName"
                value={firstName}
                onChange={(e) => setFN(e.target.value)}
                type="text"
                placeholder="Enter first name"
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="Last name">Last name:</label>
            </td>
            <td>
              <input
                id="lastName"
                value={lastName}
                onChange={(e) => setLN(e.target.value)}
                type="text"
                placeholder="Enter Last name"
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="Email">Email:</label>
            </td>
            <td>
              <input
                id="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter your email"
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="Password">Confirm Password:</label>
            </td>
            <td>
              <input
                id="Password"
                value={password}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="Enter your Password"
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="Phone number">Mobile number:</label>
            </td>
            <td>
              <input
                id="PhoneNumber"
                value={phoneNumber}
                onChange={(e) => setPN(parseInt(e.target.value))}
                type="number"
                placeholder="Enter your Password"
                required
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td style={{ textAlign: "left" }}>
              <button type="Submit" className="sbutton">
                Sign Up
              </button>
            </td>
          </tr>
        </table>
        <p style={{ textAlign: "center" }}>
          Already have an account?<Link to="/Login">Login</Link>
        </p>
      </form>
    </div>
  );
}
export default Signup;
