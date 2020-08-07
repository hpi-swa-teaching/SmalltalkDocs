import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/react';
import CategoriesList from './CategoriesList';
import { cleanUpContainer, prepareContainer } from '../../../test-utils/test-helper';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = prepareContainer(container);
});

afterEach(() => {
  // cleanup on exiting
  container = cleanUpContainer(container);
});

describe('Categories List', () => {
  it('should display CategoriesList', async () => {
    const categoryList = ['category1', 'category2', 'category3', 'category4'];

    await act(async () => {
      render(<CategoriesList categories={categoryList} />, container);
    });

    expect(container.querySelectorAll('li.categoriesList').length).toBe(4);
  });
  it('should trigger changeListDetails on Button click', async () => {
    const categoryList = ['category1'];

    await act(async () => {
      render(<CategoriesList categories={categoryList} />, container);
    });

    // expect the class list (ul) not to be shown
    expect(container.querySelector('ul')).toBeNull();

    // click button (open class list)
    fireEvent.click(container.querySelector('button.categoryButton'));

    // expect class list to be shown
    expect(container.querySelector('ul')).toBeInTheDocument();
  });
});
