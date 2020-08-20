/* Jest can test any JS app
describe() - test suite - not required
it() or test() - contain expect() / matchers
can add .skip to skip these tests

For coverage run `npm test -- --coverage`
results stored in /coverage folder

Should test any part of app that takes data and renders it - focus on how software is used

 */

// import React from 'react';
// import { render } from '@testing-library/react';
// import { create } from 'react-test-renderer';
// import App from '../App';

//*BOILER PLATE TEST*
// test.('renders learn react link', () => {
//     const { getByText } = render(<App />);
//     const linkElement = getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
//   });

//*SNAPSHOT TEST (no props/state)*
// describe(`snapshot test of app`, () => {
//     it(`should match the snapshot every time it is rendered`, () => {
//         const testInstanceAppSnapshot = create(<App />).toJSON();

//         expect(testInstanceAppSnapshot).toMatchSnapshot();
//     });
// });