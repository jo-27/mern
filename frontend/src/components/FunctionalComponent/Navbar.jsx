import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  return (
    <header>
      <nav>
        <li >
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li >
          <Link to="/about" className="link">
            About
          </Link>
        </li>
        <li >
          <Link to="/gallery" className="link">
            Gallery
          </Link>
        </li>
        <div
          className="dropdown"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <span className="link" >Hooks</span>
          {isDropdownVisible && (
            <ol className="dropdown-menu">
              <li>
                <Link to="/UseState" className="ulink">
                  UseState
                </Link>
              </li>
              <li>
                <Link to="/use-effect" className="ulink">
                  UseEffect
                </Link>
              </li>
              <li>
                <Link to="/UseEffectAPI" className="ulink">
                  UseEffectAPI
                </Link>
              </li>
              <li>
                <Link to="/UseRef" className="ulink">
                  UseRef
                </Link>
              </li>
              <li>
                <Link to="/UseMemo" className="ulink">
                  UseMemo
                </Link>
              </li>
              <li>
                <Link to="/UseCallback" className="ulink">
                  UseCallback
                </Link>
              </li>
              <li>
                <Link to="/UseMemoize" className="ulink">
                  UsememoizeCustomHook
                </Link>
              </li>
            </ol>
          )}
        </div>

        <li >
          <Link to="/contact" className="link">
            Contact
          </Link>
        </li>
        <li >
          <Link to="/HoC" className="link">
            HoC
          </Link>
        </li>
        <li >
          <Link to="/skills" className="link">
            Skills
          </Link>
        </li>
        <li >
          <Link to="/signup" className="link">
            SignUp
          </Link>
        </li>
      </nav>
    </header>
  );
};

export default Navbar;
