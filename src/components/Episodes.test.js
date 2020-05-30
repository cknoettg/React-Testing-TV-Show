import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, wait } from '@testing-library/react';
import Episodes from './Episodes';

//API documentation:
// http://www.tvmaze.com/api
// Example: http://api.tvmaze.com/episodes/1

const episodes = [
  {
    id: 1,
    image: {
      medium: "http://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg",
      original: "http://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg"
    },
    name: "Pilot",
    season: 1,
    number: 1,
    summary: "<p>When the residents of Chester's Mill find themselves trapped under a massive transparent dome with no way out, they struggle to survive as resources rapidly dwindle and panic quickly escalates.</p>",
    runtime: 60
  },
  {
    id: 2,
    image: {
      medium: "http://static.tvmaze.com/uploads/images/medium_landscape/1/4389.jpg",
      original: "http://static.tvmaze.com/uploads/images/original_untouched/1/4389.jpg"
    },
    name: "The Fire",
    season: 1,
    number: 2,
    summary: "<p>While the residents of Chester's Mill face the uncertainty of life in the dome, panic is heightened when a house goes up in flames and their fire department is outside of the dome.</p>",
    runtime: 60
  },
]

test('Rendering episode...', () => {
  const { queryAllByTestId, rerender } = render(<Episodes episodes={[]} />)

  //test zero length
  expect(queryAllByTestId(/episodes/i)).toHaveLength(0)

  //render again
  rerender(<Episodes episodes={episodes} />)

  //test that there are two episodes
  expect(queryAllByTestId(/episodes/i)).toHaveLength(2)
})
