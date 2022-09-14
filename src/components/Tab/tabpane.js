import React from "react";
import PropTypes from "prop-types";

import styles from "./style.module.css";

const TabPane = (props) => {
  return <div className={styles.tabPane}>{props.childern}</div>;
};
TabPane.propTypes = {
  name: PropTypes.string,
};

export default TabPane;
