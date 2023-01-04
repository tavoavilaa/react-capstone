import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Dishes from "./components/Dishes";
import Footer from "./components/Footer";
import F1 from './img/food1.png'
import F2 from './img/food2.png'
import F3 from './img/food3.png'

function App() {
  const data = [
    {
      name: "Dish 1",
      image: F1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligen ipsam quas eum officia. Quas consequuntur unde modi sint iste, optio   recusandae quo. Aspernatur incidunt iusto id, assumenda inventore hic blanditiis",
      price: "$10.99",
      id: 1
    },
    {
      name: "Dish 2",
      image: F2,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligen ipsam quas eum officia. Quas consequuntur unde modi sint iste, optio   recusandae quo. Aspernatur incidunt iusto id, assumenda inventore hic blanditiis",
      price: "$11.99",
      id: 2
    },
    {
      name: "Dish 3",
      image: F3,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligen ipsam quas eum officia. Quas consequuntur unde modi sint iste, optio   recusandae quo. Aspernatur incidunt iusto id, assumenda inventore hic blanditiis",
      price: "$12.99",
      id: 3
    },
  ];


  return (
    <>
      <Navbar />
      <Header />
      <main className="main">
      <h2 className="main__title">This week specials!</h2>
      <div className="dishes">
        {
          data?.map((food) => (
            <Dishes key={food.id} name={food.name}  image={food.image} description={food.description} price={food.price}/>
          ))
        }
      </div>
      </main>
      <Footer/>
    </>
  );
}

export default App;
