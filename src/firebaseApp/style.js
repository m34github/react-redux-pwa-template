import { colors } from 'material-ui/styles';

export const primary = colors.blue500;
export const secondary = colors.amber500;

export const firebaseAppTheme = {
  palette: {
    primary1Color: primary,
    accent1Color: secondary
  }
};

export const auth = {
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

export const loader = {
  progress: {
    height: window.innerHeight,
    width: window.innerWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};
