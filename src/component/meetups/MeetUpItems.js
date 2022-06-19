import Card from "../layouts/Card";
import classes from "./MeetUpItems.module.css";

export default function MeetUpItems(props) {
  return (
    <li className={classes.item} key={props.id}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <h5>{props.address}</h5>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  );
}
