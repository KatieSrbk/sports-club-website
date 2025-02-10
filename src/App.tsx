import { ChakraBaseProvider, ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/home';
import { ErrorPage } from './pages/error/ErrorPage';
import { PAGE_URL } from './utils/constants';
import { AboutUsPage } from './pages/about-us';

const router = createBrowserRouter([
  {
    path: PAGE_URL.HOME,
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: PAGE_URL.ABOUT_US,
    element: <AboutUsPage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <ChakraProvider>
      <ChakraBaseProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraBaseProvider>
    </ChakraProvider>
  );
}

export default App;
