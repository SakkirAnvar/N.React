import { render, screen } from "@testing-library/react";
import RestaurantCard from "../src/components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render Restaurant Card with Props", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Blue Tokai Coffee Roasters");

  expect(name).toBeInTheDocument();
});

it("should render restaurantCard with withPromotedLabel",()=>{
    //Homework...
})