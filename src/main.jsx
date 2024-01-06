import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import '@mantine/core/styles.css';
import 'animate.css';
import { MantineProvider } from '@mantine/core';
import {NextUIProvider} from '@nextui-org/react'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <MantineProvider>
    <NextUIProvider>
    <App />
    </NextUIProvider>
  </MantineProvider>
  </BrowserRouter>,
)
