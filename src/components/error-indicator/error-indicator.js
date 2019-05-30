import React from 'react';
import { connect } from 'react-redux';

import './error-indicator.css';

const ErrorIndicator = ({ error }) => {
  return <div>{error.message}</div>;
};

const mapStateToProps = ({ error }) => {
  return { error };
};
export default connect(mapStateToProps)(ErrorIndicator);
