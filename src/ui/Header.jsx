import Logo from "./Logo";
import Nav from "./Nav";
import Dropdown from "./Dropdown";

function Header() {
  return (
    <header className="grid grid-cols-[1fr_auto] px-6 py-8 sm:px-12 sm:py-8">
      <Logo />
      <Nav />
      <Dropdown />
    </header>
  );
}

export default Header;
