import React, { useEffect } from "react";
import styles from "./Person.module.scss";
import * as actions from "../../store/person/personActions";
import { connect } from "react-redux";
import Error from "../Error/Error";
import { Link } from "react-router-dom";
import { Card } from "antd";
import Spinner from "../Spinner/Spinner";

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
      <Link to="/">home</Link>
      {person ? (
        <div className={styles.person}>
          <h2>{person.name}</h2>
          <img src={person.image} />
          <div className={styles.content}>
            <div>
              <span>Status:</span>
              <span className={styles.tt}>{person.status}</span>
            </div>
            <div>
              <span>Gender:Gender:</span>
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
      ) : (
        <Spinner />
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
