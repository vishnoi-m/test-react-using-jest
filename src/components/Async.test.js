import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "FirstPost" }],
    });
    render(<Async />);
    const listElements = await screen.findAllByRole(
      "listitem",
      {},
      { timeout: 2000 }
    ); //listitem is a predefined role to look for list
    expect(listElements).not.toHaveLength(0); //This means that the listElements is not Empty and items are available rendered.
  });
});
