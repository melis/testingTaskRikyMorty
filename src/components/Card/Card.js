import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

const Card = ({ person }) => {
  return (
    <div className={styles.card}>
      <img src={person.image} />
      <div className={styles.content}>
        <h3>
        <Link to={`/${person.id}`}>{person.name}</Link>
        </h3>
        {/* <div>Status: {person.status}</div>
        <div>Species: {person.species}</div> */}
        <div>Gender: {person.gender}</div>
      </div>
    </div>
  );
};

export default Card;
