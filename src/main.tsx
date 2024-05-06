import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { StrictMode } from 'react'
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import Routing from './routing';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)
root.render(
  <StrictMode>
    <BrowserRouter>
    <NextUIProvider>       
          <Routing/>
    </NextUIProvider>
    </BrowserRouter>
  </StrictMode>,
)