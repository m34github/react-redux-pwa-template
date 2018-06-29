import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, withStyles } from '@material-ui/core';

import { loader } from '../style';

const Loader = (props) => {
  const { classes } = props;

  return (
    <section className={classes.progress}>
      <CircularProgress size={80} />
    </section>
  );
};

Loader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(loader)(Loader);
