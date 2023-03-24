import React from "react";
import PropTypes from "prop-types";

function Title({ title }) {
  return <h3 className="todos-list__title text-center">{title}</h3>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
