
import nikeshoe from "../../images/nike-shoes.jpeg"

const Body = () => {
  return <div className="body">
    <div className="content">
      <h1 className="heading">YOUR FEET DESERVE THE BEST</h1>
      <p><em>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</em></p>
      <div className="shop-category-button">
        <button className="shop-button">Shop Now</button>
        <button className="category-button">Category</button>
      </div>
      <div>
        <h5>Also Available On</h5>
        <div className="flip-amazon">
          <h4>flipkart</h4>
          <h4>amazon</h4>
        </div>
      </div>
    </div>
    <div>
      <img alt="nikeshoe"className="nikeshoe" src={nikeshoe}></img>
    </div>
  </div>;
};

export default Body;