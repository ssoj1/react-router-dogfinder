import { v4 as uuid } from "uuid";

/**  */
function DogList({ dogs }) {
  console.log("dogs are great", dogs);

  return (
    <div>
      {dogs.map(({ name, age, src, facts }) => (
        <div key={uuid()}>
          <h2>{name}</h2>
          <p>{age}</p>
          <img src={`/${src}.jpg`} alt={name} />
        </div>
      ))}
    </div>
  );
}

export default DogList;
