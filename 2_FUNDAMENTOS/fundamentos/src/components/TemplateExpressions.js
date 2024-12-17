const TemplateExpressions = () => {
  const name = "Diogo";
  const data = {
    age: 34,
    job: "Progamador",
  };
  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atua como: {data.job}</p>
      <p>{4 * 9}</p>
      <p>{console.log("informação DV")}</p>
    </div>
  );
};

export default TemplateExpressions;
