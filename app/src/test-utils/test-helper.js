import { unmountComponentAtNode } from 'react-dom';

export function prepareContainer(container) {
  // eslint-disable-next-line no-param-reassign
  container = document.createElement('div');
  document.body.appendChild(container);
  return container;
}

export function cleanUpContainer(container) {
  unmountComponentAtNode(container);
  container.remove();
  // eslint-disable-next-line no-param-reassign
  container = null;
  jest.clearAllMocks();
  return container;
}
