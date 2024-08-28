
import { MdOutlineShoppingBag, MdFavoriteBorder, MdFavorite } from "react-icons/md";


function FavorateCard (props){

    function favoriteChanger(){
        props.favoriteHandler(props.pId)
       
      }

      function cart (){
        props.productInCart(props.pId)   
  }

    return(
        <>

        <div className='product-card'>
           <div className='product-img'>
               <img src={props.pImage} alt={props.pImage}/>
               <div className='fav-pos'>
                 <button onClick={favoriteChanger} className='icon-btn btn-favorite'> {props.pFavorate ? < MdFavorite/>  : < MdFavoriteBorder/> } </button>
            </div>
           </div>
         
   
         
   
       <div className='product-details'>
           <div className='product-np'>
           <p className='product-name'>{props.pName}</p>
           <p className='product-amt'>{props.pPrice}</p>
           </div>
   
           <div className='product-ct'>
               <span>{props.pBrand}</span>
               <button className='icon-btn btn-primary' onClick={cart}>{ props.pInCart ? <span style={{fontSize:"0.9rem", fontWeight:"bolder"}}>Added <MdOutlineShoppingBag/> </span> : <MdOutlineShoppingBag/>   }</button>
           </div>
            
       </div>
   
       </div>
   
       </>
    )
}
export default FavorateCard;