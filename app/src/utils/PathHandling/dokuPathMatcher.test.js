import { getSampleClassName, getSampleMethodName, getSampleSide } from '../../test-utils/apiMocks';
import {
  buildLocationObj,
  buildEmptyPathParamsObj,
  buildCurrentClassPathParamsObj,
  buildCurrentMethodPathParamsObj
} from '../../test-utils/buildHookObjects';
import { isClassRootPath, isHelpBookPath, isLandingPath, isMethodPath } from './dokuPathMatcher';
import {
  getPathToClass,
  getPathToDokuRoot,
  getPathToHelpClass,
  getPathToMethod
} from './pathMapper';

// TODO: think about descriptions
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
    expect(
      isHelpBookPath(
        buildLocationObj(getPathToHelpClass(getSampleClassName())),
        buildCurrentClassPathParamsObj()
      )
    ).toBeTruthy();
    expect(
      isHelpBookPath(buildLocationObj(getPathToDokuRoot()), buildCurrentClassPathParamsObj())
    ).toBeFalsy();
    expect(
      isHelpBookPath(
        buildLocationObj(getPathToHelpClass(getSampleClassName())),
        buildEmptyPathParamsObj()
      )
    ).toBeFalsy();
  });

  test('Test matcher for the page of a class', () => {
    expect(
      isClassRootPath(
        buildLocationObj(getPathToClass(getSampleClassName())),
        buildCurrentClassPathParamsObj()
      )
    ).toBeTruthy();
    expect(
      isClassRootPath(buildLocationObj(getPathToDokuRoot()), buildCurrentClassPathParamsObj())
    ).toBeFalsy();
    expect(
      isClassRootPath(
        buildLocationObj(getPathToClass(getSampleClassName())),
        buildEmptyPathParamsObj()
      )
    ).toBeFalsy();
  });

  test('Test matcher for the page of a method', () => {
    expect(
      isMethodPath(
        buildLocationObj(
          getPathToMethod(getSampleMethodName(), getSampleClassName(), getSampleSide())
        ),
        buildCurrentMethodPathParamsObj()
      )
    ).toBeTruthy();
    expect(
      isMethodPath(
        buildLocationObj(
          getPathToMethod(getSampleMethodName(), getSampleClassName(), getSampleSide())
        ),
        buildEmptyPathParamsObj()
      )
    ).toBeFalsy();
    expect(
      isMethodPath(buildLocationObj(getPathToDokuRoot()), buildCurrentMethodPathParamsObj())
    ).toBeFalsy();
  });
});
