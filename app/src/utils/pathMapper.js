export const getLinkToClass = aClassName => `/doku/classes/${aClassName}`;

export const getLinkToMethod = (aMethodName, aClassName, theSite) =>
  `/doku/classes/${aClassName}/methods/${theSite}/${aMethodName}`;
