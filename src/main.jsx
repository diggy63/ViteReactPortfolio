import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
> 
    <App />
    </ThemeProvider>
  </Router>,
)
