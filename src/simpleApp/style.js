import { colors } from 'material-ui/styles';

export const primary = colors.grey900;
export const secondary = colors.lime600;

export const simpleAppTheme = {
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
