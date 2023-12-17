import "./navbar.css";
export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-brand">BlogBurst</div>

      <div className="navbar-search">
        <div className="navbar-search-container">
          <form action="" className="search-bar">
            <input type="text" placeholder="Search anything" name="q" />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>

      <div className="navbar-options">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </div>
  );
}
