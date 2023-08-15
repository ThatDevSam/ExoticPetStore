import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material'
import { Provider } from 'react-redux'
import store from './reduxstore/store.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  SharedLayout,
  Home,
  SingleProduct,
  Error
} from './pages'

function App() {

  let ecomTheme = createTheme({
    palette: {
      green: {
        light: '#c8e6c9',
        main: '#4caf50',
        dark: '#43a047',
      },
      grey: {
        light: '#eceff1'
      }
    },
    components: {
      MuiButton:{
        styleOverrides: {
          root:{
            fontSize: '1rem',
            padding: '10px'
          }
        }
      }
    }
  })

  ecomTheme = responsiveFontSizes(ecomTheme)

  return (
    <>
    <ThemeProvider theme={ecomTheme}>
      <Provider store={store}>
        <BrowserRouter>
          {/* redux store provider */}
            <Routes>
              <Route path='/' element={<SharedLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="/product/:id" element={<SingleProduct/>}/>
                <Route path="*" element={<Error msg={'Oops! How did you end up all the way out here?'}/>}/>
              </Route>
            </Routes>
            <ToastContainer/>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
    </>
  )
}

export default App
