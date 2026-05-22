import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="d-flex">
      
      {/* SIDEBAR */}
      <div
        className="bg-dark text-white p-3"
        style={{ width: "200px", height: "100vh" }}
      >
        <h4>My App</h4>
        <hr />
        <ul className="nav flex-column">
          <li className="nav-item">
            <a href="#" className="nav-link text-white">Dashboard</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">Menu 1</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">Menu 2</a>
          </li>
        </ul>
      </div>

      {/* CONTENT */}
      <div className="w-100">
        
        {/* NAVBAR */}
        <nav className="navbar navbar-light bg-light px-3 shadow-sm">
          <span className="navbar-brand">Dashboard</span>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </nav>

        {/* MAIN CONTENT */}
        <div className="p-4">
          <h3>Welcome 👋</h3>
          <p>Ini halaman dashboard kamu</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;