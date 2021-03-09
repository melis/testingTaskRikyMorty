import React, { FC } from "react";
import styles from "./Error.module.scss";
import { Link } from "react-router-dom";
import { Result } from "antd";

type Props = {
  info: string;
};
const Error: FC<Props> = ({ info }) => {
  return (
    <div className={styles.notfound}>
      <Result
        status="404"
        title={info}
        subTitle="Some sing is wrong!"
        extra={<Link to="/">Home</Link>}
      />
    </div>
  );
};

export default Error;
