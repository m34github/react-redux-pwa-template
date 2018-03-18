import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Header from '../components/Header.jsx';
import { sampleTheme } from '../commons/style';

Enzyme.configure({
  adapter: new Adapter()
});

describe('<Header />', () => {
  it('assertion test by enzyme', () => {
    const wrapper = mount(
      <MuiThemeProvider muiTheme={getMuiTheme(sampleTheme)}>
        <Router>
          <Header />
        </Router>
      </MuiThemeProvider>
    );
    expect(wrapper.find('AppBar').prop('title')).toBe('PWA Template');
  })

  it('snapshot test by jest', () => {
    const rendered = renderer.create(
      <MuiThemeProvider muiTheme={getMuiTheme(sampleTheme)}>
        <Router>
          <Header />
        </Router>
      </MuiThemeProvider>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
