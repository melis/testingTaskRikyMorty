import React, { FC } from "react";
import { Link } from "react-router-dom";
import { personType } from "../../store/person/person";
import styles from "./Card.module.scss";
type Props = {
  person: personType;
};
const Card: FC<Props> = ({ person }) => {
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
