const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <h1>Detalhes do Carro: </h1>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar ? <p>Carro Novo</p> : <p>Carro Usado</p>}
    </div>
  );
};

export default CarDetails;
