import { Link } from "react-router";
import { ReactComponent as Logo } from "../assets/VSA.svg";
import "./Header.css";

const routes = [
  { path: "/a", label: "a" },
  { path: "/b", label: "b" },
  { path: "/c", label: "c" },
];

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/" className="header__link--logo">
          <img src={Logo} className="header__logo" alt="" />
        </Link>
        <ul className="header__list">
          {routes.map((route, index) => (
            <li key={index} className="header__item">
              <Link to={route.path} className="header__link">
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
