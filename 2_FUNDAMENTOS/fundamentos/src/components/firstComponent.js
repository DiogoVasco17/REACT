// arquivo de estilo
import MyComponent from "./MyComponent";

const FirstComponent = () => {
  // essa função faz isso

  /* 
    multi line
    */

  return (
    <div>
      {/* Algum Cmentário*/}
      <h1>Meu primeiro Componente</h1>
      <p className="teste">Meu Texto</p>
      <MyComponent />
    </div>
  );
};

export default FirstComponent;
