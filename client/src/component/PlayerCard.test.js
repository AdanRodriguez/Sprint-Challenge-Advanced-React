import React from 'react';
import { render } from "@testing-library/react";
import PlayerCard from './component/PlayerCard';



test("renders player name", () => {
    const{getByTestId} = render(<PlayerCard/>)
    getByTestId(/player-name/)
  });
  
  test("renders player country", () => {
    const{getByTestId} = render(<PlayerCard/>)
    getByTestId(/country-name/)
  });
  
  test("renders player number of searches", () => {
    const{getByTestId} = render(<PlayerCard/>)
    getByTestId(/google-searches/)
  });
  