
import BlogPosts from "./components/BlogPosts/BlogPosts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"
import NewDishes from "./components/NewDishes/NewDishes";
import OrganicProducts from "./components/OrganicProducts/OrganicProducts";
import SpecialDish from "./components/SpecialDish/SpecialDish"
import Testmonial from "./components/Testimonial/Testmonial";
import VideoTile from "./components/VideoTile/VideoTile";



function App() {
  return (
    <div>
      <Header/>
      <SpecialDish/>
      <NewDishes/>
      <VideoTile/>
      <OrganicProducts/>
      <Testmonial/>
      <BlogPosts/>
      <Footer/>
    </div>
  );
}

export default App;
