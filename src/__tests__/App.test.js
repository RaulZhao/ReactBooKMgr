import React from 'react';
import ReactDOM from 'react-dom';
import App, { Search, BookList } from '../App';
import renderer from 'react-test-renderer';
import mockData from '../dummy_book';

describe('App Test', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App {...mockData}/>, div);
  });

  test('App snapshots', () => {
    const component = renderer.create(
      <App {...mockData}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
