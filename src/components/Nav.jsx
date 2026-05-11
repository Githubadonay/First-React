import { Link } from "react-router-dom";
function Nav() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Users/mrBeast">Mr Beast</Link>
        <Link to="/Users/Kyliejenner">Kyliejenner</Link>
        <Link to="/Users/Imancodes">Iman codes</Link>
      </nav>
    );
}

export default Nav;