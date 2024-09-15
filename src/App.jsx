import { Routes , Route} from "react-router-dom"
import Shop from "./pages/Shop/Shop"
import Profile from "./pages/Profile"
import RootLayout from "./shared/components/layouts/Root-Layout"
import NotFound from "./pages/notFound"
import Cart from "./pages/Cart/Cart"
import CartLayout from "./shared/components/layouts/Cart-Layout"
import SelectedItem from "./pages/SelectedItems/SelectedItem"
import CheckOut from "./pages/CheckOut/CheckOut"
import Search from "./pages/Searchitem/Search"

function App() {
  
  return (
    
    <div className="App">
      
        <Routes>
            <Route element = {<RootLayout />}>
              <Route path="/"  element = {<Shop />} />
              <Route path="/Profile"  element = {<Profile />} />  
              <Route path="/Search" element = {<Search/>}/>
              <Route path="/SelectedItem/:id" element = {<SelectedItem />} />
            </Route>
            <Route element = {<CartLayout/>}>
              <Route path="/Cart"  element = {<Cart />} />
              
              <Route path="/CheckOut" element = {<CheckOut />}/>
            </Route>
              <Route path="*"  element = {<NotFound />} />
        </Routes>
        
    </div>
    
  )
}

export default App
