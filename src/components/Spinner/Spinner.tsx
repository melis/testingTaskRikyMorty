import { Spin } from "antd";
import React, { FC } from "react";
import style from "./Spinner.module.scss";

const Spinner: FC = () => {
  return (
    <div className={style.example}>
      <Spin />
    </div>
  );
};
export default Spinner;
