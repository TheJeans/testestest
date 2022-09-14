import * as React from 'react';
import { createTheme, ThemeProvider } from 'design-system';
// import {Button} from 'design-system';
import {Checkbox} from 'design-system';

const innerTheme = createTheme({
  palette: {
    primary: {
      main: '#00FF00',
    },
  },
});
function App() {

  return (
      <ThemeProvider theme={innerTheme}>
        <Checkbox defaultChecked />
      </ThemeProvider>
  );
}

export default App;
