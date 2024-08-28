import { useParams } from "react-router-dom";
import "./productDetails.css";
import { MdOutlineShoppingBag, MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import ProductsContext from './ProductsContext';

function ProductDetails(){
    const [reload, setReload] = useState(0) 

    const {products,setProducts} = useContext(ProductsContext);
    const {id} = useParams()
    const pId = id-1
    let item;
    try{
       item = products[pId];
    }
    catch{
        console.log("item not loaded")
    }
 

useEffect(()=>{
    
},[reload])

function favHandler(){
    item.isFavorate = item.isFavorate ? false : true;
    setReload((e)=> e+=1)

    const newProList = [...products];
    try {
        setProducts(newProList);
    }
    catch {
        console.log("try again")
    }
}

function inCartHandler(){
    item.inCart = item.inCart ? false : true;
     const newProList = [...products];
        try {
            setProducts(newProList);
        }
        catch {
            console.log("try again")
        }
    setReload((e)=> e+=1)
    
    if(item.inCart === true){
        
        item.productQty = 1
        const newProList = [...products];
        try {
            setProducts(newProList);
        }
        catch {
            console.log("try again")
        }
    } 
    else {
        const newProList = [...products];
        try {
            setProducts(newProList);
        }
        catch {
            console.log("try again")
        }
    }
}

    return(
        <>
        <div className="head-title">
        <h2>Product Detail</h2>
        </div>
        
        <div className="productD-con">      
            <div className="productD-img">
                <img src={item.productImage} alt=""/>
            </div>

            <div className="productD">
                <p>{item.productBrand}</p>
                <h2>{item.productName}</h2>

                <h2>${item.price}</h2>

                <div>
                    <h3>Description</h3>
                    <p>By understanding these phases in the context of compiler construction, 
                        you can appreciate the underlying processes that the Arduino IDE performs 
                        to transform your high-level code into a runnable program on the Arduino hardware.</p>
                </div>
                
             
                
                <div className="btn-cart"> 
                <button onClick={inCartHandler} className="btn btn-black" >{item.inCart ? <span style={{marginRight:"5px", color:"#C8E968"}}>  Already in Cart <MdOutlineShoppingBag fontSize={"1.5rem"}/></span>   : <span style={{marginRight:"5px"}}> Added to Cart <MdOutlineShoppingBag fontSize={"1.5rem"}/> </span>  } </button>
               <button onClick={favHandler}  className="icon-btn" style={{marginLeft:"5px", padding:"5px 8px", background:"white"}}> {item.isFavorate ? < MdFavorite  fontSize={"1.5rem"}/> : < MdFavoriteBorder fontSize={"1.5rem"}/>  } </button> 
                </div>
            </div>

        </div>
        
        </>
    )
}
export default ProductDetails;
