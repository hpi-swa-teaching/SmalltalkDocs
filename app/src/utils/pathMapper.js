import { baseURL } from '../config/constants';

export const getPathToMethod = (aMethodName, aClassName, theSite) =>
  `${baseURL}/doku/classes/${aClassName}/methods/${theSite}/${aMethodName}`;

export const getPathToClass = aClassName => `/doku/classes/${aClassName}`;

export const getPathToDokuRoot = () => '/doku';

export const getPathToHelpClass = aClassName => `/doku/help/${aClassName}`;
