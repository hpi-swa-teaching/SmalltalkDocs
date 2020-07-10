import { baseURL } from '../config/constants';

// eslint-disable-next-line import/prefer-default-export
export const getPathToMethod = (aMethodName, aClassName, theSite) =>
  `${baseURL}/doku/classes/${aClassName}/methods/${theSite}/${aMethodName}`;
