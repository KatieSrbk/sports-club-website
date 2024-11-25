import { extendTheme } from '@chakra-ui/react';
import { Button } from './components/button';
import { Container } from './components/container';

const theme = extendTheme({
  styles: {
    global: {
      body: {},
    },
  },
  components: {
    Button,
    Container,
  },
});

export default theme;
