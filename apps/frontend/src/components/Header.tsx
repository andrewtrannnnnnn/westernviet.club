import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import "./Header.scss";

export default function Header({ ...props }) {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  function handleClick() {
    setMenuIsOpen((previousState) => !previousState);
  }

  return (
    <header className="header" {...props}>
      <nav className="header__nav">
        {menuIsOpen ? (
          <MdClose onClick={handleClick} className="header__menu-icon--close" />
        ) : (
          <MdMenu onClick={handleClick} className="header__menu-icon" />
        )}

        <ul className="header__list">
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
      </nav>
    </header>
  );
}
