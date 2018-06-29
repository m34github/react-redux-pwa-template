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

const auth = {
  button: {
    paddingTop: 24
  },
  title: {
    paddingBottom: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    borderRadius: 16,
    width: 120
  },
  divider: {
    marginTop: 16,
    marginBottom: 16
  },
  main: {
    padding: 64
  },
  textField: {
    paddingBottom: 12
  }
};

const common = {
  main: {
    padding: '12px 24px 12px 24px'
  }
};

const header = {
  sideMenu: {
    width: 200
  },
  typography: {
    flex: 1
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

export { theme, auth, common, header, loader };
