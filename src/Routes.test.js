import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Routes from "./Routes";

const TEST_DATA = [
  { name: "Testdog", age: 5, src: "testdog", facts: [1, 2, 3] },
];

it("mounts without crashing", function () {
  const { getByText } = render(
    <MemoryRouter>
      <Routes dogs={TEST_DATA} />
    </MemoryRouter>
  );

  //   console.log(getByText, "Get By Text");
  //   console.log(render, "render");

  const dogLink = getByText(/dog/i);
  console.log(dogLink, "This is the dog link");
  expect(dogLink).toBeInTheDocument();
});

it("renders the dog list component", function () {
  const { debug, getByText } = render(
    <MemoryRouter initialEntries={["/dogs"]}>
      <Routes dogs={TEST_DATA} />
    </MemoryRouter>
  );

  const h2Text = getByText(/Testdog/i);
  expect(h2Text).toBeInTheDocument();
});

it("renders the dog detail component", function () {
  const { debug, getByText } = render(
    <MemoryRouter initialEntries={["/dogs/testdog"]}>
      <Routes dogs={TEST_DATA} />
    </MemoryRouter>
  );

  const h2Text = getByText(/Testdog/i);
  const age = getByText(/5/i);

  expect(age).toBeInTheDocument();
  expect(h2Text).toBeInTheDocument();
});

it("renders the redirect", function () {
  const { debug, getByText } = render(
    <MemoryRouter initialEntries={["/invalid/"]}>
      <Routes dogs={TEST_DATA} />
    </MemoryRouter>
  );

  const h2Text = getByText(/Testdog/i);
  expect(h2Text).toBeInTheDocument();
});
