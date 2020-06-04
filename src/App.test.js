import React from "react";
import { render, waitFor } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import userEvent from "@testing-library/user-event";
import App from "./App";

//See this url from our fetch show to see list of episodes
//  https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes
jest.mock("./api/fetchShow");

const showData = {
  id: 1576470,
  name: "Stranger Things",
  runtime: 60,
  image: {
    medium:
      "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
    original:
      "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"
  },
  summary:
  "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
  _embedded: {
    episodes: [
      {
        id: 553946,
        name: "Chapter One: The Vanishing of Will Byers",
        season: 1,
        number: 1,
        runtime: 60,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
          original:
            "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
        }
      },
      {
        id: 578664,
        name: "Chapter Three: Holly, Jolly",
        season: 1,
        number: 3,
        runtime: 60,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg",
          original:
            "http://static.tvmaze.com/uploads/images/original_untouched/67/168920.jpg"
        }
      }
    ] //end of episodes
  } //end of embedded
};

//See docs: https://jestjs.io/docs/en/mock-function-api
//See also: https://testing-library.com/docs/react-testing-library/cheatsheet
test("Rendering and selecting...", async () => {
  mockFetchShow.mockResolvedValueOnce(showData);

  const {  getByText } = render(<App />)
  getByText(/Fetching Data/i)
  await waitFor(() => {
    getByText(/select a season/i);
  });
}); 
  
//   //const { findByText, queryAllByText } = render(<App />);

//   // await waitFor(() => {
//   //   //queryAllByText(/Select a season/i);
//   //   expect(findByText("Select a season")).toHaveLength(2);
//   //   expect(mockFetchShow).toHaveBeenCalledTimes(1);
//   // });

//   //test user selection of season
//   //userEvent.click(findByText("Select a season"));

//   //make sure we have data
//   //expect(findByText("Select a season")).toHaveLength(2);

//   //make sure our fetchShow is called
//   //expect(mockFetchShow).toHaveBeenCalledTimes(1);
// });