import {  Link } from "react-router-dom";
import { MdOutlineShoppingBag, MdFavoriteBorder } from "react-icons/md";
import React ,{ useContext, useEffect,useState } from 'react';
import ProductsContext from './ProductsContext';


function Nav (){
    const {products,setProducts} = useContext(ProductsContext);
    const [newProList, setNewProList] = useState()
    const [favOnline,setFavOnline] = useState(false)
    const [cartOnline, setCartOnline] = useState(false)



    useEffect(()=>{
       
            const isCart =  products.find((item)=> item.inCart === true || false)
            if (isCart){
                setCartOnline(true)
                console.log("added to cart")
               }
               else {
                setCartOnline(false)
               }

            const isFav =  products.find((item)=> item.isFavorate === true || false)
            if (isFav){
             setFavOnline(true)
            }
            else {
                setFavOnline(false)
            }
            
        
        

    },[products])

  
    
    return(
        <nav>
            <div className="Brand-id">
                <span> <strong>STORE</strong> </span>
            </div>
             <ul>
           <li className="nav-links"> <Link className="link" to={"/"}>Home</Link> </li> 
           <li className="nav-links"> <Link className="link" to={"/"}>Store</Link> </li> 
           <li className="nav-links"> <Link className="link" to={"/"}>Women</Link> </li> 
           <li className="nav-links"> <Link className="link" to={"/"}>Men</Link> </li> 
           <li className="nav-links"> <Link className="link" to={"/"}>Contact</Link> </li>     
        </ul>
            <div className="items-nav"> 
                { favOnline &&
                    <span className="online-fav"></span>
                }    
               <Link to={"/favorate"}><span> <MdFavoriteBorder /> </span> </Link> 
               <Link to={"/productcart"}> <button className='icon-btn btn-primary'><MdOutlineShoppingBag/></button></Link> 
               { cartOnline &&
                    <span className="online-cart"></span>
               }
    
            </div>
        </nav>
        
    )
}
export default Nav;