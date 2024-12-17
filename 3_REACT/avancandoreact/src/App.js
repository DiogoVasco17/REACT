import { useState } from "react";
import "./App.css";
import eldenring from "./assets/eldenring.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

function App() {
  const city = "Castelo Branco";
  const [userName] = useState("Diogo");

  const cars = [
    { id: 0, brand: "Ferrari", color: "Vermelho", newCar: true, km: 0 },
    { id: 1, brand: "Lamborghini", color: "Preto", newCar: false, km: 5000 },
    { id: 2, brand: "Tesla", color: "Branco", newCar: true, km: 0 },
  ];

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public*/}
      <div>
        <img src="/bloodborne.jpg" alt="Bloodborne" />
      </div>
      {/* Imagem em assets*/}
      <div>
        <img src={eldenring} alt="Elden Ring" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/*props*/}
      <ShowUserName name={userName} age={34} city={city} />
      {/*destructuring*/}
      <CarDetails brand="Peugeot" km={100000} color="Vermelho" newCar={false} />
      <CarDetails brand="Fiat" km={450000} color="Branco" newCar={false} />
      <CarDetails brand="BMW" km={0} color="Cinza" newCar={true} />
      {/*loop em arrays de objetos*/}
      {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}
    </div>
  );
}

export default App;
