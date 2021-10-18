import { useParams } from "react-router";

/** Component for Dog Details
 * 
 * Props:
 * - dogs - an array of objects with dog info like:
 * [{name, age, src, facts}, ...]
 * 
 * State:
 * - none
 * 
 * Routes -> DogDetails
 */
function DogDetails({ dogs }) {
    console.log("DogDetails", dogs);

    const { name } = useParams();
    console.log("name is ", name)

    const dog = dogs.find(dog => dog.name.toLowerCase() === name );

    return (
        <div>
            <h2>{dog.name}</h2>
            <p>Age: {dog.age}</p>
            <ul>Facts: {dog.facts.map((fact, index) => 
                <li key={index}>{fact}</li>)}
            </ul>
            <img src={`/${dog.src}.jpg`} alt={name} />
        </div>
    );

};

export default DogDetails;