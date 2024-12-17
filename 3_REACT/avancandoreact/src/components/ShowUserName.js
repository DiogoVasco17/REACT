const ShowUserName = (props) => {
  return (
    <div>
      <h2>O nome do User: {props.name}</h2>
      <ul>
        <li>Idade: {props.age}</li>
        <li>Cidade: {props.city}</li>
      </ul>
    </div>
  );
};

export default ShowUserName;
