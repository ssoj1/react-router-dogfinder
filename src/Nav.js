import { NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";

/** Component for navigating
 *
 * Props:
 * - names - an array of names like:
 * ["Name", ...]
 *
 * State:
 * - none
 *
 * App -> Nav
 */
function Nav({ names }) {
  console.log("Nav", names);

  return (
    <nav className="Nav">
      {names.map((name) => (
        <NavLink exact to={`/dogs/${name.toLowerCase()}`} key={name}>
          {name}
        </NavLink>
      ))}
    </nav>
  );
}
// To Do: Change where UUID is created - can't be in map

export default Nav;
