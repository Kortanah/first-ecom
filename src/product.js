import { createContext, useContext, useEffect, useRef, useState, } from "react";
import ProductCard from "./ProductCard"
import Favorate from "./Favorate";
import FavorateCard from "./FavorateCard";
import ProductsContext from "./ProductsContext";
import { MdDisplaySettings } from "react-icons/md";




function Products (){

  

    // products data 

    

    const [showFilter, setShowFilter] = useState(false);
    const [filInput, setfilInput] = useState("");
    const [filterList, setFilterList] = useState(null);
    const [fIconShow,setfIconShow] = useState(false);
    const [fcategory,setCategory] = useState("");
    const [priceRTop,setPriceRTop] = useState(0);
    const [priceRDown,setPriceRDown] = useState(0);
    const [reload,setReload] = useState(0)

    const {products,setProducts} = useContext(ProductsContext)
    

   
    
    ///////filter 001
  
   
    function filterSearch(){
        let priceTrack = null;

        if(fcategory === ""){
            const newProductLists = products.filter((item)=> item.productName.toLowerCase().includes( filInput.toLowerCase().trim()) || item.productBrand.toLowerCase().includes( filInput.toLowerCase().trim()) )
            setFilterList(newProductLists)
            priceTrack = newProductLists;
        }
       else if (fcategory !== "" ){
        const newProductLists = products.filter((item)=> (item.productName.toLowerCase().includes( filInput.toLowerCase().trim()) || item.productBrand.toLowerCase().includes( filInput.toLowerCase().trim())) && item.category.toLowerCase().includes( fcategory.toLowerCase().trim()) )
            setFilterList(newProductLists)
            priceTrack = newProductLists;
        }

        
        if (priceTrack && priceRTop > priceRDown){
     
            const newProductLists = priceTrack.filter((item)=> item.price <= priceRTop && priceRDown >= 0);
            setFilterList(newProductLists);
            console.log(newProductLists)
        }
        else if (priceRTop > priceRDown){
            const newProductLists  = products.filter((item)=> item.price <= priceRTop && priceRDown >= 0);
            setFilterList(newProductLists);
            console.log(newProductLists)

        }

    }

 
    useEffect(()=>{

    },[reload])
   
    function filter(){

        setShowFilter(true);
        filterSearch();       
       
    }


    function cartHandler(index){
        const selectedProduct = products.findIndex((item)=>( item.id === index ))
        if(selectedProduct >= 0){
            products[selectedProduct].inCart = (products[selectedProduct].inCart ? false : true);
            setReload((e)=>e+=1)  

            const currentInCart  =  products[selectedProduct].inCart
            if( currentInCart === false){
                products[selectedProduct].productQty = 1
            }
            const newProList = [...products];
            try {
                setProducts(newProList);
            }
            catch {
                console.log("try again")
            }
           
        }
       
    }

    function filterHandler(e){
        setfilInput(e.target.value)
    }


    function filterIcon (){
      
        setfIconShow(()=>fIconShow ? false : true)
        console.log(fIconShow)
         
    }

    function favoriteHandler(index){
         const id = index -1;
         if(products){
            products[id].isFavorate =  products[id].isFavorate === false ? true : false;
            const newProList = [...products];
            try {
                setProducts(newProList);
            }
            catch {
                console.log("try again")
            }
              
         }
       
      
    }


////////////////////////////////////////////////
    return(
       
       <div>
        <div className="head-title"><h2>New Arrival</h2>
         <button className="icon-btn" style={{padding:"0 15px"}} onClick={filterIcon}><MdDisplaySettings fontSize={"2rem"} /></button>
         </div>

         {fIconShow &&
        <div className="filter-container">
            <div className="filterInput">
                 <input  onChange={filterHandler} value={filInput}/>

                <select value={fcategory} onChange={(e)=>setCategory(e.target.value)}>
                    <option value="">--Select--</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Children">Children</option>
                </select>
                <div className="price-filter">
                <label> from</label>
                <input onChange={(e)=>setPriceRDown(()=>parseInt(e.target.value))} value={isNaN(priceRDown) ? 0 : priceRDown}/>
                <label> to</label>
                <input onChange={(e)=>setPriceRTop(()=>parseInt(e.target.value))} value={isNaN(priceRTop) ? 0 : priceRTop}/>      
            </div>
        
            <button className="btn" style={{background:"black",color:"white"}} onClick={filter}>Filter</button>
         </div>
            
            
         
           
        </div>
           
      
         }

         <section className='products'>

        { !showFilter && products &&
            products.map((item, index)=>
                
            
                <ProductCard  key={index}
                keye = {index}
                pImage = {item.productImage}  
                pName = {item.productName}  
                pBrand = {item.productBrand}  
                pPrice = {item.price}  
                pId = {item.id}  
                pFavorate = {item.isFavorate}  
                favoriteHandler = {favoriteHandler} 
                pInCart = {item.inCart}
                productInCart = {cartHandler}
           
                /> 
              
            )
        }
        
        {  showFilter && products &&
            filterList.map((item, index)=>
                
                <ProductCard key={index}
                pImage = {item.productImage}  
                pName = {item.productName}  
                pBrand = {item.productBrand}  
                pPrice = {item.price}  
                pId = {item.id}  
                pFavorate = {item.isFavorate}  
                pInCart = {item.inCart}
                favoriteHandler = {favoriteHandler}
                />
              
           
            )
        }
   
        
    </section>
       </div>
    
        )


 
}
export default Products