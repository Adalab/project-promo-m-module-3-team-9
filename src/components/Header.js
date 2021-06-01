import logo from "../images/logo-awesome-profile-cards.svg";

function Header() {
  return (
    <header className="header">
      <h1 className="title">Awesome profile cards</h1>
      <div className="imagecontainer">
        <a href="./index.html">
          <img
            className="logo"
            src={logo}
            alt="Logo"
            title="Awesome profile cards"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
