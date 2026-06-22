const { render, screen, fireEvent } = require("@testing-library/react");
import Body from "../src/components/Body";
import MOCK_DATA from "../mocks/resListMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: {
          cards: [
            {},
            {},
            {},
            {},
            {
              card: {
                card: {
                  gridElements: {
                    infoWithStyle: {
                      restaurants: MOCK_DATA,
                    },
                  },
                },
              },
            },
          ],
        },
      }),
  }),
);

it("should render the body component with search by changing the text value coffee", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>,
  );

  const searchBtn = await screen.findByRole("button", {
    name: /search/i,
  });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, {
    target: { value: "coffee" },
  });

  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(1);
});

it("should render the body component with top rated restaurant", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>,
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard")

  expect(cardsBeforeFilter.length).toBe(8)

  const topRatedBtn = screen.getByRole("button",{name: "Top Rating restaurant"})

  fireEvent.click(topRatedBtn)

  const filteredCard = screen.getAllByTestId("resCard")

  expect(filteredCard.length).toBe(2)
});

