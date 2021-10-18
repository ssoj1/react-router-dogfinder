import { NavLink } from "react-router-dom";
import { v4 as uuid } from 'uuid';

function Nav( { names } ) {
    return (
        <nav className="Nav">
        {names.map(name => (
        <NavLink exact to="/dogs/{name}" key={uuid()}>
          {name}
        </NavLink>
        ))}
      </nav>
    );
}

export default Nav;