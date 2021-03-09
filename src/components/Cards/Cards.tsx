import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/persons/personsActions";
import styles from "./Cards.module.scss";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";
import { PersonsStateType } from "../../store/persons/persons";
import { PersonStateType, personType } from "../../store/person/person";

type Props = {
  persons: personType[];
  next: string | null;
  loadPersons: (next: string | null) => actions.loadPersonsType;
};
const Cards: FC<Props> = (props) => {
  const { persons, next, loadPersons } = props;

  useEffect(() => {
    if (!persons.length) {
      loadPersons(next);
    }
  }, []);

  const handleScroll = (e: any) => {
    if (
      Math.round(
        e.target.documentElement.scrollHeight -
          e.target.documentElement.clientHeight
      ) == Math.round(window.scrollY) &&
      next
    ) {
      loadPersons(next);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [next]);

  if (!persons.length) return <Spinner />;

  return (
    <div className={styles.app}>
      {persons.map((p: any) => {
        return <Card person={p} key={p.id} />;
      })}
    </div>
  );
};

type stateType = {
  person: PersonStateType;
  persons: PersonsStateType;
};
const mapStateToProps = (
  state: stateType
): { persons: personType[] | []; next: string | null } => {
  const { persons } = state;
  return {
    persons: persons.persons,
    next: persons.next,
  };
};

export default connect(mapStateToProps, actions)(Cards);
