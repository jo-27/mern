import '../css/Signup.css'
import React from "react"
import {Link,useNavigate} from "react-router-dom"
function Signup() {
    const navigate = useNavigate();
    const handleSubmit = () => {
    navigate("/Login");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <table>
          <tr>
            <td>
              <label htmlFor="First name">First name:</label>
            </td>
            <td>
              <input type="text" placeholder="Enter first name" required />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="Last name">Last name:</label>
            </td>
            <td>
              <input type="text" placeholder="Enter Last name" required />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="Email">Email:</label>
            </td>
            <td>
              <input
                type="email"
                placeholder="Enter your email"
                defaultValue="@sjit.ac.in"
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="cnfPassword">Confirm Password:</label>
            </td>
            <td>
              <input
                type="password"
                placeholder="Enter your Password"
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="dob">Date of Birth:</label>
            </td>
            <td>
              <input type="date" placeholder="Enter your Date" required />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="Phone number">Mobile number:</label>
            </td>
            <td>
              <input type="tel" placeholder="Enter your Password" required />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="Gender">Gender:</label>
            </td>
            <td>
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" value="male" />
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" value="female" />
              <label htmlFor="other">Other</label>
              <input type="radio" name="gender" value="other" />
            </td>
          </tr>
          
          <tr>
            <td></td>
            <td style={{textAlign:"left"}}>
              <button type="Submit" className="sbutton">Sign Up</button>
            </td>
          </tr>
        </table>
        <p style={{textAlign:"center"}}>Already have an account?<Link to="/Login">Login</Link></p>
      </form>
    </div>
  );
}
export default Signup;
