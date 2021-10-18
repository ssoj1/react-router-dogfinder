import DogDetails from "./DogDetails";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({ name: "testdog"}),
  }))

const TEST_DATA = [
    { name: "Testdog", age: 5, src: "testdog", facts: [1, 2, 3] },
    { name: "Testdog2", age: 6, src: "testdog2", facts: [2, 3, 4] },
];

// it("renders details of a dog", function () {

//     const { debug, getByText } = render(
//         <MemoryRouter initialEntries={["/dogs/testdog"]}>
//         <DogDetails dogs={TEST_DATA} />
//       </MemoryRouter>
//     );
    
//     const h2Text = getByText("Testdog");
//     expect(h2Text).toBeInTheDocument();
//   });

  it('mounts without crashing', function() {
    const { getByText } = render(
      <MemoryRouter>
        <DogDetails dogs={TEST_DATA} />
      </MemoryRouter>
    );
  

    const name = getByText("Testdog");
    expect(name).toBeInTheDocument();

  });