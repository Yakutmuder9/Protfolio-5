const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <span>D</span> YamHub
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <a href="">Service</a>
            </li>
            <li>
              <a href="">Process</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="start-project btn">
          <button>Start a project</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
