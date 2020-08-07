import { classKey } from '../utils/PathHandling/pathMapper';
import { getSampleClassName } from './apiMocks';

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
