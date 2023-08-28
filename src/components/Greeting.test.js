import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
  //First Test
  test('renders "Hello World" as a text', () => {
    //Arrange
    render(<Greeting />);

    //Act
    //... nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  //Second Test
  test('renders "good to see you" if the button was NOT Clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    //... nothing

    //Assert
    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  //Third Test
  test('renders "Changed!" if the button was CLICKED', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  //4th Test
  test('does not render "good to see you" if the button was CLICKED', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
