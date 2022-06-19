import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetings</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>All Meets</Link>
          </li>
          <li>
            <Link to={"/new"}>New Meets</Link>
          </li>
          <li>
            <Link to={"/fav"}>Fav Meets</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
