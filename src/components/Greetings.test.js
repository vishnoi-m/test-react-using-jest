import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";

describe("Greeting Component", () => {
  test("render Hello World text", () => {
    //Arrange
    render(<Greetings />);

    //Act
    // ... nothing for this Test case

    //Assert
    const textElement = screen.getByText("Hello World", { exact: false });
    expect(textElement).toBeInTheDocument();
  });

  test("renders 'good to be alive' if button was NOT clicked", () => {
    render(<Greetings />);
    const textElement = screen.getByText("good to be alive", { exact: false });
    expect(textElement).toBeInTheDocument();
  });

  test("render 'Text Changed' if button was clicked", () => {
    //Arrange
    render(<Greetings />);

    //Act
    const buttonElement = screen.getByRole("button"); //You can also get by text.
    userEvent.click(buttonElement);

    //Assert
    const textElement = screen.getByText("Text Changed", { exact: true });
    expect(textElement).toBeInTheDocument();
  });

  test("does not render 'good to be alive' if button clicked", () => {
    render(<Greetings />);
    //Act
    const buttonElement = screen.getByRole("button"); //You can also get by text.
    userEvent.click(buttonElement);
    const textElement = screen.queryByText("good to be alive", {
      exact: false,
    });
    expect(textElement).toBeNull();
  });
});
