import React, { useEffect } from "react";
import styles from "./Person.module.scss";
import * as actions from "../../store/person/personActions";
import { connect } from "react-redux";
import Error from "../Error/Error";
import { Link } from "react-router-dom";

const Person = (props) => {
  const { setPerson, person, loadPerson, error } = props;
  const { personId } = props.match.params;
  useEffect(() => {
    // setPerson(personId);
    loadPerson(personId);
  }, []);

  if (error) return <Error info={error} />;

  return (
    <div className={styles.container}>
      <Link to="/">Home</Link>
      {person ? (
        <div className={styles.person}>
          <img src={person.image} />
          <div className={styles.content}>
            <div>Name: {person.name}</div>
            <div>Status: {person.status}</div>
            <div>Gender: {person.gender}</div>
            <div>Location: {person.location.name}</div>
            <div>Species: {person.species}</div>
          </div>
        </div>
      ) : (
        <div className={styles.person}>loading...</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    person: state.person.person,
    error: state.person.error,
  };
};
export default connect(mapStateToProps, actions)(Person);
