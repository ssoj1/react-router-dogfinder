import Nav from "./Nav";
import { MemoryRouter } from "react-router";
import { render } from "@testing-library/react";

const TEST_DATA = ["Testdog", "Testdog2"];

it('mounts without crashing', function() {
    const { getByText } = render(
      <MemoryRouter>
        <Nav names={TEST_DATA} />
      </MemoryRouter>
    );
  
    const name = getByText("Testdog");
    expect(name).toBeInTheDocument();

    const name2 = getByText("Testdog2");
    expect(name2).toBeInTheDocument();
  });