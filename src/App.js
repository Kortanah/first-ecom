
import './App.css';
import { BrowserRouter as Router, Route,Routes,Link} from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Favorate from './Favorate';
import FavorateCard from './FavorateCard';
import Products from './product';
import ProductData from "./productData";
import ProductCart from "./ProductCart";
import ProductDetails from './ProductDetails';



function App() {
  return (
   
    <>
    <ProductData>
    <Router>
       <Nav />
    
        <Routes>
     
            <Route exact path='/' element={ <Home />} />
            <Route path="/favorate" element={<Favorate />} />
            <Route path="/product/:id" element={<ProductDetails/>} />
            <Route path="/productcart" element={<ProductCart/>} />
          
            
          </Routes>
      
    
    </Router>
    </ProductData>
    </>
  );
}

export default App;
