import { extendTheme } from '@chakra-ui/react';
import { Button } from './components/button';

const theme = extendTheme({
  styles: {
    global: {
      body: {},
    },
  },
  components: {
    Button,
  },
});

export default theme;
