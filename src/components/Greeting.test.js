import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe('Greeting Component', () => {

    //First Test
    test("renders Hello World as a text", () => {
        //Arrange
        render(<Greeting />);
      
        //Act
        //... nothing
      
        //Assert
        const helloWorldElement = screen.getByText("Hello World", {exact: false});
        expect(helloWorldElement).toBeInTheDocument();
      });

       //Second Test
    test("renders KABUL as a text", () => {
        //Arrange
        render(<Greeting />);
      
        //Act
        //... nothing
      
        //Assert
        const helloWorldElement = screen.getByText("Hello KABUL", {exact: false});
        expect(helloWorldElement).toBeInTheDocument();
      });

})



