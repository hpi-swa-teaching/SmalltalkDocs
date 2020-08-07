export const getPathToMethod = (aMethodName, aClassName, theSite) =>
  `/doku/classes/${aClassName}/methods/${theSite}/${aMethodName}`;
export const getPathToClass = aClassName => `/doku/classes/${aClassName}`;
export const getPathToDokuRoot = () => '/doku';
export const getPathToHelpClass = aClassName => `/doku/help/${aClassName}`;
export const getPathToRoot = () => '/';
export const getPathToMetricsRoot = () => '/statistics';
export const getPathToMetrics = aMetrics => `/statistics/${aMetrics}`;

const getURLParameterFromKey = key => `:${key}`;
export const metricsKey = () => 'currentMetrics';
export const classKey = () => 'currentClass';
export const methodKey = () => 'currentMethod';
export const methodSideKey = () => 'site';

export const getSpecificMetricsURLBluePrint = () =>
  getPathToMetrics(getURLParameterFromKey(metricsKey()));
export const getClassDocumentationURLBluePrint = () =>
  getPathToClass(getURLParameterFromKey(classKey()));
export const getMethodDocumentationURLBluePrint = () =>
  getPathToMethod(
    getURLParameterFromKey(methodKey()),
    getURLParameterFromKey(classKey()),
    getURLParameterFromKey(methodSideKey())
  );
export const getHelpClassURLBluePrint = () =>
  getPathToHelpClass(getURLParameterFromKey(classKey()));