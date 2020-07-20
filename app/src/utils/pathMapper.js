import { baseURL } from '../config/constants';

/*
 * a path is a full qualified location
 * a link is a location given relatively to the origin of the React app
 */

export const getLinkToClass = aClassName => `/doku/classes/${aClassName}`;

export const getLinkToMethod = (aMethodName, aClassName, theSite) =>
  `/doku/classes/${aClassName}/methods/${theSite}/${aMethodName}`;

export const getPathToMethod = (aMethodName, aClassName, theSite) =>
  `${baseURL}${getLinkToMethod(aMethodName, aClassName, theSite)}`;
