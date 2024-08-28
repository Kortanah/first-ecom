import React ,{ useContext, useEffect,useState } from 'react';
import ProductsContext from './ProductsContext';
import FavorateCard from './FavorateCard';
import Empty from './empty';





function Favorate() {
 
  const {products,setProducts} = useContext(ProductsContext);
  const productFav = products.filter((item)=> item.isFavorate === true)
  const [isFavorate, setIsFovorate] = useState(false)
  const [reload,setReload] = useState(0)


  useEffect(()=>{
  
    const favCheck  = products.find((item)=>item.isFavorate === true)
    if(favCheck !== undefined){
      setIsFovorate(true)
    }
    else{
      setIsFovorate(false)
    }
  
  },[products,reload])

  function favoriteHandler (index) {
    const id = index -1;
    products[id].isFavorate =  products[id].isFavorate === false ? true : false;  
    const newProList = [...products]; 
    try {
      setProducts(newProList);
  }
  catch {
      console.log("try again")
  }
 
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




  
  return (
    <>
    {!isFavorate &&
    <Empty/>
    }

    { isFavorate &&
        <div> 
        <h2 style={{marginLeft:"200px"}} >Favorate Products</h2>
        <div className='products'>
          
        { products &&
        productFav.map((item, index)=>
          
            <FavorateCard  key={index}
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
      
    </div>
   
 
</div>
    }
    </>
    
  )
}

export default Favorate;