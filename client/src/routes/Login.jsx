import "./login.css";

export default function Login() {
  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form action="" className="form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
