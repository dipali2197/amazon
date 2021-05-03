import Product from './Product'
import './Home.css'

function Home(){
    return(
       <div className="home">
           <img className="home__image"
           src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Mayart21/GWRev/PCHero1x/MayART_PC_Days_1x._CB670367126_.jpg"
           alt=""  />

           <div className="home__row">
               <Product
               id="121314"
               price={200.32}
               rating={4}
               />
           </div>

           </div>
    )
}

export default Home