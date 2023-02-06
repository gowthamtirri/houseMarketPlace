import { Link } from "react-router-dom";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import Slider from "../components/Slider";

function Explore() {
  return (
    <div className="explore">
      <a href="https://github.com/gowthamtirri" className="copyright">
        Built with ❤️ by <strong> Gowtham Tirri</strong>
      </a>
      <header>
        <p className="pageHeader">Explore</p>
      </header>

      <main>
        {/* Slider */}
        <Slider />

        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img
              src={rentCategoryImage}
              className="exploreCategoryImg"
              alt="rent"
            />
            <p>Places For Rent</p>
          </Link>
          <Link to="/category/sale">
            <img
              src={sellCategoryImage}
              className="exploreCategoryImg"
              alt="sell"
            />
            <p>Places For sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Explore;
