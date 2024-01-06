import Destination from "./pages/Destination";
import Footer from "./pages/Footer";
import Middle from "./pages/Middle";
import Navbarr from "./pages/Navbarr";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Reviews from "./pages/Reviews";
import Questions from "./pages/Questions";
import Subscribe from "./pages/Subscribe";

const App = () => {
  return (
    <div>
      <header>
        <Navbarr />
      </header>
      <main>
        <Home />
        <Middle />
        <Destination />
        <Portfolio/>
        <Reviews/>
        <Questions/>
        <Subscribe/>
      </main>
      <footer>
          <Footer/>
        </footer>
    </div>
  );
};

export default App;
