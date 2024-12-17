const Challenge = () => {
  const valores = {
    A: 7,
    B: 11,
  };

  const somatorio = (e) => {
    console.log(valores.A + valores.B);
  };

  return (
    <div>
      <h1>Valor do A = {valores.A}</h1>
      <h1>Valor do B = {valores.B}</h1>
      <button onClick={somatorio}>Somatório</button>
    </div>
  );
};
export default Challenge;
