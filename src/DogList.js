
import { Link } from "react-router-dom";

/** Component for rendering all dogs
 *
 * Props:
 * - dogs - an array of objects with dog info like:
 * [{name, age, src, facts}, ...]
 *
 * State:
 * - none
 *
 * Routes -> DogList
 */
function DogList({ dogs }) {
  console.log("DogList", dogs);

  return (
    <div>
      {dogs.map(({ name, age, src, facts }) => (
        <div key={name}>
          <h2>
            <Link to={`/dogs/${name.toLowerCase()}`}>{name}</Link>
          </h2>
          <p>Age: {age}</p>
          <img src={`/${src}.jpg`} alt={name} />
          <ul>
            Facts:{" "}
            {facts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default DogList;
