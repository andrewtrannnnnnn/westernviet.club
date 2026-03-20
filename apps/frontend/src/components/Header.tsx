import { ComponentProps } from "react";
import { Link } from "react-router";
import "./Header.css";
import Logo from "../assets/Logo.svg";

interface HeaderProps extends ComponentProps<"header"> {}

export default function Header({ ...props }: HeaderProps) {
  return (
    <header className="header" {...props}>
      <nav className="header__nav">
        <Link to="/" className="header__link">
          <img src={Logo} alt="" />
        </Link>
        <ul className="header__list">

        </ul>
      </nav>
    </header>
  );
}
