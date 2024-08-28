import React, { useState, useContext, useEffect, useRef } from 'react'
import ProductsContext from './ProductsContext';
import Empty from './empty';
import { MdDeleteOutline} from "react-icons/md";



function ProductCart() {
    const {products,setProducts} = useContext(ProductsContext)
    const [cartProduct, setCartProducts] = useState();
    const [pCounter, setPCounter] = useState(0);
    const [inCart, setinCart] = useState(false)

   


  // const newProductLists = [...productsList]
  const productsList = products.filter((item)=>( item.inCart === true))
  
 

  useEffect(()=>{
   
    const cartCheck  = products.find((item)=>item.inCart === true)
    if(cartCheck !== undefined){
      setinCart(true)
    }
    else{
      setinCart(false)
    }
    try{
      setCartProducts(productsList)
    }
    catch(error){
      console.log(error)
    }
   
  },[pCounter,products])

 function addCounter(index){

  const cartId = cartProduct[index].id
  const selectedProductId =  products.findIndex((item)=>(item.id === cartId))

  if(selectedProductId  || selectedProductId === 0){
    products[selectedProductId].productQty = products[selectedProductId].productQty + 1
    products[selectedProductId].tPrice  = products[selectedProductId].price * products[selectedProductId].productQty   
    setPCounter((e)=>(e += 1))
  }
  
 }

 function subCounter(index){
  const cartId = cartProduct[index].id
  const selectedProductId =  products.findIndex((item)=>(item.id === cartId))

  if(products[selectedProductId].productQty !== 1){
    products[selectedProductId].productQty = products[selectedProductId].productQty - 1
    products[selectedProductId].tPrice  = products[selectedProductId].price * products[selectedProductId].productQty
   
    setPCounter((e)=>(e += 1))
  }

}

function closeHandler(index){
  const cartId = cartProduct[index].id
  const selectedProductId =  products.findIndex((item)=>(item.id === cartId))
  products[selectedProductId].inCart = false
  products[selectedProductId].productQty = 1
  const newProList = [...products];
  try {
      setProducts(newProList);
  }
  catch {
      console.log("try again")
  }
     
  setPCounter((e)=>(e += 1))

}


  return (
<>  
{!inCart &&
  <Empty/>
}

{cartProduct && inCart &&
    <div className='cart-container'>

   <table className="cart-container">
    <tr>
<th>Product</th>
<th>Price</th>
<th>Quality</th>
<th>Total Price</th>
</tr>

   {cartProduct.map((item,index)=>(
 
<tbody>


<tr>
 
<td className='cart-product-con'>
<div className='cart-img'>
  <img src={item.productImage} alt="" />
</div>
<div>
<h3>{item.productBrand}</h3>
<h2>{item.productName}</h2>
</div>

</td>

<td> <p>${item.price}</p></td>

<td className='qty-con'>
<div className='cart-counter'>

  {/* counter buttons */}
<button onClick={()=>subCounter(index)}>-</button>
<p>{item.productQty}</p>
<button onClick={()=>addCounter(index)}>+</button>
</div></td>


<td>
<div className='cart-amount'> ${item.tPrice} </div>
</td>   

<td><span className="del-cart-item" onClick={()=>closeHandler(index)}><MdDeleteOutline  fontSize={"40px"} color={"red"} /></span></td>
</tr>


</tbody>


   ))

   }


  

 </table>
 </div> }
    
     
    
   
    </> )
}

export default ProductCart