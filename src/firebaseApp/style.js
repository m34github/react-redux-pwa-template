import { colors } from 'material-ui/styles';

export const primary = colors.blue500;
export const secondary = colors.amber500;

export const firebaseAppTheme = {
  palette: {
    primary1Color: primary,
    accent1Color: secondary
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
