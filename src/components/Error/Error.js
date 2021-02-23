import React from "react";
import styles from "./Error.module.scss";
import { Link } from "react-router-dom";
import { Result } from "antd";

const Error = ({ info }) => {
  return (
    <div className={styles.notfound}>
      <Result
        status="404"
        title="Some sing is wrong!"
        subTitle={info || "Some sing is wrong!"}
        extra={<Link to="/">Home</Link>}
      />
    </div>
  );
};

export default Error;
