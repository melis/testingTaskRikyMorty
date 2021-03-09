import React, { FC, useEffect } from "react";
import styles from "./Person.module.scss";
import * as actions from "../../store/person/personActions";
import { connect } from "react-redux";
import Error from "../Error/Error";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { PersonsStateType } from "../../store/persons/persons";
import { PersonStateType, personType } from "../../store/person/person";
import { RouteComponentProps } from "react-router";

type PathParamsType = {
  personId: string;
};

type PropsType = {
  error: null | string;
  loadPerson: (id: number) => void;
  loading: boolean | null;
  person: personType | null;
};
const Person: FC<RouteComponentProps<PathParamsType> & PropsType> = (props) => {
  const { person, loadPerson, error, loading } = props;
  const { personId } = props.match.params;
  useEffect(() => {
    loadPerson(Number(personId));
  }, []);

  if (error) return <Error info={error} />;
  if (loading || !person) return <Spinner />;

  return (
    <div className={styles.container}>
      <Link to="/">home</Link>

      <div className={styles.person}>
        <h2>{person.name}</h2>
        <img src={person.image} />
        <div className={styles.content}>
          <div>
            <span>Status:</span>
            <span className={styles.tt}>{person.status}</span>
          </div>
          <div>
            <span>Gender:</span>
            <span className={styles.tt}>{person.gender}</span>
          </div>
          <div>
            <span>Origin:</span>
            <span className={styles.tt}>{person.origin.name}</span>
          </div>
          <div>
            <span>Species:</span>
            <span className={styles.tt}>{person.species}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

type stateType = {
  person: PersonStateType;
  persons: PersonsStateType;
};
const mapStateToProps = (state: stateType) => {
  const { person } = state;
  return {
    person: person.person,
    error: person.error,
    loading: person.loading,
  };
};
export default connect(mapStateToProps, actions)(Person);
