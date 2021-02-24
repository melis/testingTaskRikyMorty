import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

const Card = ({ person }) => {
  return (
    <Link to={`/${person.id}`} className={styles.card}>
      <img src={person.image} />
      <div>{person.name}</div>
    </Link>
  );
};

export default Card;
{
}
