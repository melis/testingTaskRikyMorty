import React, { useEffect } from "react";
import styles from "./Person.module.scss";
import * as actions from "../../store/person/personActions";
import { connect } from "react-redux";

const Person = (props) => {
  const { setPerson, person, loadPerson } = props;
  const { personId } = props.match.params;
  useEffect(() => {
    // setPerson(personId);
    loadPerson(personId);
  }, []);

  return (
    <div>
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
  };
};
export default connect(mapStateToProps, actions)(Person);
