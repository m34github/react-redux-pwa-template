import React from 'react';
import { CircularProgress } from 'material-ui';

import { loader } from '../commons/style';

const Loader = () => (
  <section style={loader.progress}>
    <CircularProgress size={80} />
  </section>
);

export default Loader;
