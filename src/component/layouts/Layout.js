import Navbar from "./Navbar";
import classes from "./Layout.module.css";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <main className={classes.main}>{props.children}</main>
    </>
  );
}
