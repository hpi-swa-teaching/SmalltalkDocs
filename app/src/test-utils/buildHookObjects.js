import { classKey, methodKey, methodSideKey } from '../utils/PathHandling/pathMapper';
import { getSampleClassName, getSampleMethodName, getSampleSide } from './apiMocks';

export const buildLocationObj = aPathName => ({
  hash: '',
  key: '',
  pathname: aPathName,
  search: '',
  state: null
});

export const buildEmptyPathParamsObj = () => ({});

export const buildCurrentClassPathParamsObj = () => ({
  [classKey()]: getSampleClassName()
});

export const buildCurrentMethodPathParamsObj = () => ({
  [classKey()]: getSampleClassName(),
  [methodKey()]: getSampleMethodName(),
  [methodSideKey()]: getSampleSide()
});
