import React from 'react';
import { CircularProgress } from '@material-ui/core';

import { loader } from '../style';

const Loader = () => (
  <section style={loader.progress}>
    <CircularProgress size={80} />
  </section>
);

export default Loader;
