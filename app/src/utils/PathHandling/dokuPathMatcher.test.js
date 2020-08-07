import { getSampleClassName } from '../../test-utils/apiMocks';
import {
  buildLocationObj,
  buildEmptyPathParamsObj,
  buildCurrentClassPathParamsObj
} from '../../test-utils/buildHookObjects';
import { isHelpBookPath, isLandingPath } from './dokuPathMatcher';
import { getPathToClass, getPathToDokuRoot, getPathToHelpClass } from './pathMapper';

describe('Test path matchers for documentation', () => {
  test('Test matcher for exploration landing page', () => {
    expect(
      isLandingPath(buildLocationObj(getPathToDokuRoot()), buildEmptyPathParamsObj())
    ).toBeTruthy();
    expect(
      isLandingPath(
        buildLocationObj(getPathToClass(getSampleClassName())),
        buildEmptyPathParamsObj()
      )
    ).toBeFalsy();
    expect(
      isLandingPath(buildLocationObj(getPathToDokuRoot()), buildCurrentClassPathParamsObj())
    ).toBeFalsy();
  });

  test('Test matcher for page of a help book', () => {
    console.log(getPathToHelpClass(getSampleClassName()));
    console.log(buildCurrentClassPathParamsObj());
    expect(
      isHelpBookPath(getPathToHelpClass(getSampleClassName()), buildCurrentClassPathParamsObj())
    ).toBeTruthy();
  });
});
