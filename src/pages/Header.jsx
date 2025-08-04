import NavListitem from "../components/NavListitem";
import Search from "../components/Search";
import navListData from "../data/navListData"
import './header.css'
import '../components/navListitem.css'
import Button from "../components/Button";

function Header() {
  return (
    <header>
      <a href="/" className="logo">
        Cinema
      </a>
      <ul className="nav">
        {navListData.map(nav => (
          <NavListitem key={nav._id} nav={nav} />
        ))}
      </ul>
      <Search />
       <Button icon={<ion-icon name="log-in-outline"></ion-icon>} name='Sign In'/>
    </header>
  );
}

export default Header;
