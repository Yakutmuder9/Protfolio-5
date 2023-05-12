import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const menuRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (menuRef.current !== null) {
        const menuItems = menuRef.current.querySelectorAll(".menu-item");

        menuItems.forEach((item, index) => {
          item.onmouseover = () => {
            setActiveIndex(index);
          };
        });
      }

      if (currentScrollY > 70 && currentScrollY > prevScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  const handleShow = () => setIsNavOpen(!isNavOpen);
  return (
    <nav className={`navbar ${showNavbar ? "active" : ""}`}>
      <div className="nav-container">
        <div className="logo">
          <h1>
            <span>Y</span> ADCreative
          </h1>
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
        <div className="start-project">
          <button className="btn">Start a project</button>
        </div>
      </div>
      <div className="collapse-menu">
        <button
          className={isNavOpen ? "btn nav-toggler open" : "btn nav-toggler"}
          onClick={handleShow}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div  className={`open-menu-container ${
            isNavOpen ? "slide-down" : "slide-up"
          }`}>
          {/* {isNavOpen ? (
            <> */}
              <div id="menu" ref={menuRef} data-active-index={activeIndex}>
              <div id="menu-items">
                    <div className="menu-item"  onClick={handleShow}>
                      <a href="#">Service</a>
                    </div>
                    <div className="menu-item"  onClick={handleShow}>
                      <a href="#about">Process</a>
                    </div>
                    <div className="menu-item"  onClick={handleShow}>
                      <a href="#projects">Projects</a>
                    </div>
                    <div className="menu-item"  onClick={handleShow}>
                      <a href="#contact">Contact</a>
                    </div>
                  </div>
                  <div id="menu-background-pattern"></div>
                  <div id="menu-background-image"></div>
              </div>
            {/* </>
          ) : (
            <></>
          )} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
