export const getPathToMethod = (aMethodName, aClassName, theSite) =>
  `/doku/classes/${aClassName}/methods/${theSite}/${aMethodName}`;
export const getPathToClass = aClassName => `/doku/classes/${aClassName}`;
export const getPathToDokuRoot = () => '/doku';
export const getPathToHelpClass = aClassName => `/doku/help/${aClassName}`;
export const getPathToRoot = () => '/';
export const getPathToStatisticsRoot = () => '/statistics';
export const getPathToMetrics = aMetrics => `/statistics/:${aMetrics}`;

const getURLParameterFromKey = key => `:${key}`;

const metricsKey = () => 'currentMetric';
const classKey = () => 'currentClass';
const methodKey = () => 'currentMethod';
const methodSideKey = () => 'methodSide';

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
