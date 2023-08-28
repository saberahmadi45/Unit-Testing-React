import { render, screen } from "@testing-library/react";

import Async from "./Async";

describe("Async Component", () => {
  test("renders posts if request succeds", async () => {
    window.fetch = jest.fn(); //Overide fetch with a Dummy-Function
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }],
    });

    render(<Async />);

    const listItmenElement = await screen.findAllByRole("listitem");
    expect(listItmenElement).not.toHaveLength(0);
  });
});
