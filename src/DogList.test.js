import DogList from "./DogList";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

const TEST_DATA = [
  { name: "Testdog", age: 5, src: "testdog", facts: [1, 2, 3] },
  { name: "Testdog2", age: 6, src: "testdog2", facts: [2, 3, 4] },
];

it("mounts without crashing", function () {
  const { getByText } = render(
    <MemoryRouter>
      <DogList dogs={TEST_DATA} />
    </MemoryRouter>
  );

  const age = getByText(/5/i);
  const age2 = getByText(/5/i);

  expect(age).toBeInTheDocument();
  expect(age2).toBeInTheDocument();
});
