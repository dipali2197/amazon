import React,{useEffect,useState} from "react";
import './Product.css'
function Product({id,title,image,price,rating}){
    const [products, setProducts] = useState([]);

    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json()
            )
            .then((json) => setProducts(json))
            
    },[]);

    return(

        <div className="product__container">
        {
        products.map((item)=>(
            <div className ="product__style"><h5>{item.title}</h5>
            <img src={item.image}  />
            <button>Add to cart</button>
            <p className="product__price">
            <small>$</small>
              <strong>{item.price}</strong> 
        
               
            </p>
            
                        
            </div>

        ))
        
}
        </div>
        //  <div className="Product">
        // //     <div className="Product__info">
        // //         <p>{title}</p>
        // //         <p className="product__price">
        // //             <small>$</small>
        // //             <strong>{price}</strong>
        // //         </p>
        // //         
        // //                <div className="product__rating">
        // //             { Array(rating)
        // //                 .fill()
        // //                 .map((_) => (
        // //                 <p>*</p>

        // //                 ))
        // //             }
        // //         </div>
        // //     </div>
        // //     <img src={image} alt=""/>
        // //     <button>Add to Basket</button>
        // //             </div>
    )
}

export default Product;