function Login() {
  return (
    <div>
      <form>
        <table>
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
              <label fohtmlForr="cnfPassword">Password:</label>
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
            <td></td>
            <td style={{textAlign:"left"}}>
              <button type="Submit">Sign Up</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
export default Login;
