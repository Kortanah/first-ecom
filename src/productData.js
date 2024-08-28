import React, { useEffect, useState } from 'react'
import ProductsContext from './ProductsContext'

function ProductData({children}) {

  function totalPrice (price, qty){
    const tpricer = price * qty
    return(tpricer)
  }

    
    const [products, setProducts] = useState( [
        { 
            id : 1,
            productName : "Black Gel Lyte",
            productBrand : "Nike",
            price : 150,
            category : "Men",
            productImage : "/images/m1.jpg",
            isFavorate : false,
            inCart : false,
            productQty : 1,
            tPrice : 150
         },
          { 
            id : 2,
            productName : "Zoom Pegasus",
            productBrand : "Nike",
            price : 200,
            category : "Women",
            productImage : "/images/w2.jpg",
            isFavorate : false,
            inCart : false,
            productQty : 1,
            tPrice : 200
         },
          { 
            id : 3,
            productName : "Alphabounce",
            productBrand : "Nike",
            price : 120,
            category : "Women",
            productImage :  "/images/w3.jpg",
            isFavorate : false,
            inCart : false,
            productQty : 1,
            tPrice : 120
         },
          { 
            id : 4,
            productName : "Ultraboost",
            productBrand : "Nike",
            price : 120,
            category : "Women",
            productImage :  "/images/w1.jpg",
            isFavorate : false,
            inCart : false,
            productQty : 1,
            tPrice : 120
         },
          { 
            id : 5,
            productName : "Black Gel Lyte",
            productBrand : "Nike",
            price : 150,
            category : "Men",
            productImage : "/images/m1.jpg",
            isFavorate : false,
            inCart : false,
            productQty : 1,
            tPrice : 150
         },
          { 
            id : 6,
            productName : "Swift Run",
            productBrand : "Bike",
            price : 200,
            category : "Children",
            productImage : "/images/m2.jpg",
             isFavorate : false,
             inCart : false,
            productQty : 1,
            tPrice : 200
         },
          { 
            id : 7,
            productName : "Air Jordan",
            productBrand : "Bike",
            price : 250,
            category : "Men",
            productImage : "/images/m2.jpg",
             isFavorate : false,
             inCart : false,
            productQty : 1,
            tPrice : 250
         },
          { 
            id : 8,
            productName : "Tubular Shadow",
            productBrand : "Nike",
            price : 1000,
            category : "Men",
            productImage :  "/images/m3.jpg",
             isFavorate : false,
             inCart : false,
            productQty : 1,
             tPrice : 1000
         },
          { 
            id : 9,
            productName : "Chuck Taylor All Star",
            productBrand : "Nike",
            price : 156,
            category : "Children",
            productImage :  "/images/c2.jpg",
             isFavorate : false,
             inCart : false,
             productQty : 1,
             tPrice : 156
         },
          { 
            id : 10,
            productName : "Yeezy Boost",
            productBrand : "Nike",
            price : 130,
            category : "Women",
            productImage :  "/images/w5.jpg",
             isFavorate : false,
             inCart : false,
             productQty : 1,
             tPrice : 130
         },
          { 
            id : 11,
            productName : "Gel Nimbuse",
            productBrand : "Nike",
            price : 220,
            category : "Children",
            productImage :  "/images/c3.jpg",
             isFavorate : false,
             inCart : false,
            productQty : 1,
             tPrice : 220
         },
         { 
          id : 12,
          productName : "New Balance",
          productBrand : "Nike",
          price : 160,
          category : "Men",
          productImage :  "/images/m4.jpg",
           isFavorate : false,
           inCart : false,
            productQty : 1,
           tPrice : 160
       },
       { 
        id : 13,
        productName : "New Balance",
        productBrand : "Nike",
        price : 180,
        category : "Children",
        productImage :  "/images/c5.jpg",
         isFavorate : false,
         inCart : false,
         productQty : 1,
         tPrice : 180
     },
     { 
      id : 14,
      productName : "New Balance",
      productBrand : "Nike",
      price : 120,
      category : "Men",
      productImage :  "/images/m3.jpg",
       isFavorate : false,
       inCart : false,
       productQty : 1,
     tPrice : 120
   },
   { 
    id : 15,
    productName : "New Balance",
    productBrand : "Nike",
    price : 620,
    category : "Children",
    productImage :  "/images/c4.jpg",
     isFavorate : false,
     inCart : false,
     productQty : 1,
     tPrice : 620
 },
    ])

    // products data 

  return (
    <ProductsContext.Provider value={{products,setProducts}}>
        {children}
    </ProductsContext.Provider>
  )
}

export default ProductData;