import { colors } from 'material-ui/styles';

const primary = colors.blue500;
const secondary = colors.amber500;

const firebaseAppTheme = {
  palette: {
    primary1Color: primary,
    accent1Color: secondary
  }
};

const auth = {
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
    padding: 12,
    marginBottom: 56
  }
};

const footer = {
  paper: {
    position: 'fixed',
    bottom: 0,
    width: '100%'
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

export { primary, secondary, firebaseAppTheme, auth, common, footer, loader };
