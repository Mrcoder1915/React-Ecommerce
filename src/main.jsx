import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter} from "react-router-dom"
import ShopContext from "./pages/shopcontext"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>  
    <ShopContext>  
        <App />
        </ShopContext>
    </BrowserRouter>
    
  </React.StrictMode>,
)
