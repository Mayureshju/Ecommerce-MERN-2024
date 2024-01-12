import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const addToCartHandler = () =>{

  }
  return (
    <div className="home">
      <section></section>
      <h1>Latest Products <Link className="findmore" to={'/search'}>More</Link></h1>
      <main>
        <ProductCard productId="ffdtyt" name="macbook" price={4500} stock={40} photo="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71f5Eu5lJSL._SX679_.jpg" handler={addToCartHandler} />
      </main>
    </div>
  );
};

export default Home;
