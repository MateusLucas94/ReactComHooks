import User from "../User";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <p className="header-user">
        Olá, <User />{" "}
      </p>
    </header>
  );
}
export default Header;
