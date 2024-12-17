import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);
  const [name, SetName] = useState("Diogo");
  return (
    <div>
      <h1>Isto será exibido?</h1>
      {x && <p>Se x for true, Sim!</p>}
      {!x && <p>Agora x é false</p>}
      <h1>Qual o nome?</h1>
      {name === "João" ? (
        <div>
          <p>O Nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>{" "}
        </div>
      )}
      <button onClick={() => SetName("João")}>Clica Aqui!</button>
    </div>
  );
};

export default ConditionalRender;
