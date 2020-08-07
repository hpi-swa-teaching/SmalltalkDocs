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

describe("Test wether the documentation's path matchers detect as expected", () => {
  test('Test matching the landing page', () => {
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

  test('Test matching a help book', () => {
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

  test('Test matching a class page', () => {
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

  test('Test matching a method page', () => {
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
