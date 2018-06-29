import { colors, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#005BAC'
    },
    secondary: {
      main: colors.cyan['500'],
      contrastText: '#FFF'
    }
  }
});

const common = {
  main: {
    padding: '12px 24px 12px 24px'
  }
};

const loader = {
  progress: {
    height: window.innerHeight,
    width: window.innerWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { theme, common, loader };
