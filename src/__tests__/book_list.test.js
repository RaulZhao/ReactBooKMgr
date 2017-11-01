import React from 'react';
import ReactDOM from 'react-dom';
import App, { Search, BookList } from '../App';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import mockData from '../dummy_book';

describe('BookList', () => {
  const props = {
    list: mockData.list,
    onDismiss: jest.fn(() => {
      props.list.pop();
      console.log(props.list);
    })
  };

  it('Book List', () => {
    const el = shallow(<BookList {...props}/>);

    expect(el.find('.book-row').length).toBe(4);
  });

  it('Click Dismiss Button', () => {
    const el = shallow(<BookList {...props}/>);

    el.find('button').at(3).simulate('click');
    expect(props.onDismiss).toHaveBeenCalled();
    expect(el.find('.book-row').length).toBeGreaterThan(3);
  })
});
