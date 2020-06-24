import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import HelpView from './HelpView';
import { baseURL } from '../../config/constants';
import { cleanUpContainer, prepareContainer } from '../../test-utils/test-helper';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = prepareContainer(container);
});

afterEach(() => {
  // cleanup on exiting
  container = cleanUpContainer(container);
});

describe('ClassView', () => {
  it('should display fetched books', async () => {
    const prefixPath = `${baseURL}/help/test/pages`;

    const sampleHelpClassPagesResponse = {
      pages: [
        {
          pageName: 'introduction',
          isGivenByClass: true
        },
        {
          pageName: 'HelpHowToHelpTopics',
          isGivenByClass: false
        },
        {
          pageName: 'HelpAPIDocumentation',
          isGivenByClass: false
        }
      ]
    };

    const sampleHelpPageResponse = {
      content:
        'WELCOME TO THE HELP SYSTEM\r\rThe help system is a simple user interface to display help contents to the user. It can be accessed from the world menu using "Tools" -> "Help Browser" or by evaluating \'HelpBrowser open\' in a workspace.\r\rThere is a predefined mechanism allowing you to have help contents stored as source code using methods in specific help provider classes. This allows you to manage the help texts using the standard development tools. But this is only one possible representation.\r',
      pageName: 'introduction',
      title: 'Introduction'
    };

    jest.spyOn(global, 'fetch').mockImplementation(path => {
      if (path === prefixPath)
        return Promise.resolve({
          json: () => sampleHelpClassPagesResponse
        });
      return Promise.resolve({
        json: () => sampleHelpPageResponse
      });
    });

    await act(async () => {
      render(<HelpView bookName="testBookName" />, container);
    });

    expect(container.querySelector('h1')).toHaveTextContent('testBookName');

    global.fetch.mockRestore();
  });
});
