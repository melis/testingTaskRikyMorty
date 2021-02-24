import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/persons/personsActions";
import styles from "./Cards.module.scss";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";

const Cards = ({ persons, setPersons, next, loadPersons }) => {
  useEffect(() => {
    if (!persons.length) {
      // setPersons();
      loadPersons();
    }
  }, []);

  const handleScroll = (e) => {
    if (
      Math.round(
        e.target.documentElement.scrollHeight -
          e.target.documentElement.clientHeight
      ) == Math.round(window.scrollY) &&
      next
    ) {
      loadPersons(next);
      // setPersons(next);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [next]);

  if (!persons.length)  return <Spinner />;
  
  return (
    <div className={styles.app}>
      {persons.map((p) => {
        return <Card person={p} key={p.id} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    persons: state.persons.persons,
    next: state.persons.next,
  };
};

export default connect(mapStateToProps, actions)(Cards);
