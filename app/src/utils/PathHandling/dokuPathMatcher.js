import { classKey, methodKey, methodSideKey } from './pathMapper';

// TODO: write tests for matchers

/*
locationObj & paramsObj represent the returning values of built-in React hooks
 */

export const isLandingPath = (locationObj, paramsObj) =>
  /^\/doku$/.test(locationObj.pathname) && paramsObj[classKey()] == null;

export const isHelpBookPath = (locationObj, paramsObj) =>
  /^\/doku\/help\//.test(locationObj.pathname) && paramsObj[classKey()] != null;

export const isClassRootPath = (locationObj, paramsObj) =>
  /^\/doku\/classes\/\w*$/.test(locationObj.pathname) && paramsObj[classKey()] != null;

export const isMethodPath = (locationObj, paramsObj) =>
  /^\/doku\/classes\/\S*\/methods\/(instance|class)\//.test(locationObj.pathname) &&
  paramsObj[classKey()] != null &&
  paramsObj[methodKey()] != null &&
  paramsObj[methodSideKey()] != null;
