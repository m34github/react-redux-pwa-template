import { colors } from 'material-ui/styles';

export const primary = colors.grey900;
export const secondary = colors.lime600;

export const sampleTheme = {
  palette: {
    primary1Color: primary,
    accent1Color: secondary
  }
};

export const common = {
  main: {
    padding: 16
  },
  fab: {
    position: 'fixed',
    bottom: 32,
    right: 32
  }
};

export const header = {
  title: {
    textAlign: 'center'
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

export const login = {
  loginButton: {
    paddingTop: 16,
    textAlign: 'center'
  }
};

export const user = {
  avatar: {
    paddingTop: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};
