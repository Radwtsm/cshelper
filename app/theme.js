import { createTheme } from '@mui/material/styles';
import { red,grey } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  type: 'dark',
  primary: {
    main: '#a60b00',
  },
  secondary: {
    main: '#f50057',
  },
},);

export default theme;
