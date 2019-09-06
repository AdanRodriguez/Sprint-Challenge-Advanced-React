import React from 'react';
import App from './App';
import { render } from "@testing-library/react";


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


test("renders without crashing", () => {
  render(<App/>)
});

test("renders header", () => {
  const {getByText} = render(<App/>);
  getByText("Women's World Cup");
});


