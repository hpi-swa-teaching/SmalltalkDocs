export const getLinkToClass = aClassName => `/doku/classes/${aClassName}`;

export const getLinkToMethod = (aMethodName, aClassName, theSite) =>
  `/doku/classes/${aClassName}/methods/${theSite}/${aMethodName}`;

export const getPathToClass = aClassName => `/doku/classes/${aClassName}`;

export const getPathToDokuRoot = () => '/doku';

export const getPathToHelpClass = aClassName => `/doku/help/${aClassName}`;
