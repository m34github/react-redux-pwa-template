import { colors } from 'material-ui/styles';

const primary = colors.deepPurple600;
const secondary = colors.orange600;

const simpleAppTheme = {
  palette: {
    primary1Color: primary,
    accent1Color: secondary
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

export { primary, secondary, simpleAppTheme, common, footer, loader };
