import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

/**  */
function DogList({ dogs }) {
  console.log("dogs are great", dogs);

  return (
    <div>
      {dogs.map(({ name, age, src }) => (
        <div key={uuid()}>
          <h2>{name}</h2>
          <p>Age: {age}</p>
          <img src={`/${src}.jpg`} alt={name} />
          {/* Add link to dog detail */}
        </div>
      ))}
    </div>
  );
}

export default DogList;
