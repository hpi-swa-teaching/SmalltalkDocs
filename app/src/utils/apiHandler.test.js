import { baseURL } from '../config/constants';
import {
  getHelpPageInfoMock,
  getUndocumentedMethodsOfClassAPIMock,
  getSampleClassName,
  getSampleHelpClassInfoResponse,
  getPagesOfBookMock,
  getContentOfPageMock,
  getSampleHelpPageResponse,
  getPrefixPathOfSampleBook,
  getFetchMethodsMock,
  getSampleMethodsOfClassResponse,
  getSampleInstanceMethods,
  getSampleClassMethods,
  getFetchMethodInfoMock,
  getSampleMethodInfoResponse,
  getFetchMethodCodeMock,
  getSampleMethodCodeResponse,
  getFetchCategoriesMock,
  getSampleCategoriesResponse,
  getFetchClassesOfCategoriesMock,
  getSampleCategoryName,
  getSampleAllClassesResponse,
  getFetchClassesMock,
  getIsHelpBookMock,
  getSampleClassInfoResponse,
  getSearchForClassMock,
  getSampleClassSearchTerm,
  getSampleClassSearchResponse,
  getSearchForMethodMock,
  getSampleMethodSearchTerm,
  getSampleMethodSearchResponse,
  getUndocumentedClassesAPIMock,
  getSampleUndocumentedClassesResponse,
  getSortedSampleAllClasses,
  getSampleHelpPagesGivenByClass,
  getContentOfBookMock,
  getSampleUndocumentedMethodsOfClassResponse
} from '../test-utils/apiMocks';
import {
  getContentOfBook,
  getContentOfPage,
  getInstanceMethods,
  getClassMethods,
  getPagesOfBook,
  getBookInfo,
  getAllMethodsOf,
  getMethodInfo,
  getMethodText,
  getClasses,
  isHelpBook,
  getCategories,
  getClassesOfCategories,
  searchForClasses,
  searchForMethods,
  getUndocumentedClasses,
  getUndocumentedMethodsOfClass
} from './apiHandler';

describe('Help page system', () => {
  afterEach(() => jest.clearAllMocks());

  // related API route: /help/<HelpClass>
  test('Fetch information about an help class', async () => {
    const fetchMock = getHelpPageInfoMock();
    const jsonResponse = await getBookInfo(getSampleClassName());
    expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/help/${getSampleClassName()}`);
    expect(fetchMock).toBeCalledTimes(1);
    expect(jsonResponse).toEqual(getSampleHelpClassInfoResponse());
  });

  // related API route: /help/<HelpClass>/pages
  test('Fetch pages of a sample book', async () => {
    const fetchMock = getPagesOfBookMock();
    const jsonResponse = await getPagesOfBook(getSampleClassName());
    expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/help/${getSampleClassName()}/pages`);
    expect(fetchMock).toBeCalledTimes(1);
    expect(jsonResponse).toEqual(getSampleHelpPagesGivenByClass());
  });

  // related API route: /help/<HelpClass>/pages/<page_name>
  test('Fetch content of a sample page', async () => {
    const fetchMock = getContentOfPageMock();
    const samplePageName = 'introduction';
    const jsonResponse = await getContentOfPage(getSampleClassName(), samplePageName);
    expect(fetchMock).toHaveBeenCalledWith(
      `${baseURL}/help/${getSampleClassName()}/pages/${samplePageName}`
    );
    expect(fetchMock).toBeCalledTimes(1);
    expect(jsonResponse).toEqual(getSampleHelpPageResponse().content);
  });

  test('Fetch content of a sample book', async () => {
    const fetchMock = getContentOfBookMock();
    const pageContents = await getContentOfBook(getSampleClassName());
    expect(fetchMock).toHaveBeenCalledWith(getPrefixPathOfSampleBook());
    expect(fetchMock).toHaveBeenCalledWith(`${getPrefixPathOfSampleBook()}/introduction`);
    expect(fetchMock).toBeCalledTimes(2);
    expect(pageContents).toEqual(getSampleHelpPageResponse().content);
  });
});

// related path: /env/classes/<ClassName>/methods
describe('Fetch methods', () => {
  const path = `${baseURL}/env/classes/${getSampleClassName()}/methods`;
  let fetchMock;
  beforeAll(() => {
    fetchMock = getFetchMethodsMock();
  });
  afterEach(() => jest.clearAllMocks());

  test('Fetch methods overview of class', async () => {
    const fetchedOverview = await getAllMethodsOf(getSampleClassName());
    expect(fetchMock).toBeCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(path);
    expect(fetchedOverview).toEqual(getSampleMethodsOfClassResponse());
  });

  test('Fetch instance methods of class', async () => {
    const fetchedMethods = await getInstanceMethods(getSampleClassName());
    expect(fetchMock).toBeCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(path);
    expect(fetchedMethods).toEqual(getSampleInstanceMethods());
  });

  test('Fetch class methods of class', async () => {
    const fetchedMethods = await getClassMethods(getSampleClassName());
    expect(fetchMock).toBeCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(path);
    expect(fetchedMethods).toEqual(getSampleClassMethods());
  });
});

// related path: /env/classes/<ClassName>/methods/<instance|class>/<methodName>
describe('Fetch method info', () => {
  const sampleMethodName = 'aSampleMethod:';
  const path = `${baseURL}/env/classes/${getSampleClassName()}/methods/instance/${sampleMethodName}`;
  afterEach(() => jest.clearAllMocks());
  test('Fetch whole method info', async () => {
    const fetchMock = getFetchMethodInfoMock();
    const fetchedOverview = await getMethodInfo(getSampleClassName(), 'instance', sampleMethodName);
    expect(fetchMock).toBeCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(path);
    expect(fetchedOverview).toEqual(getSampleMethodInfoResponse());
  });
});

// related path: /env/classes/<ClassName>/methods/<instance|class>/<methodName>/text
describe('Fetch method code', () => {
  const sampleMethodName = 'aSampleMethod:';
  const path = `${baseURL}/env/classes/${getSampleClassName()}/methods/instance/${sampleMethodName}/text`;
  afterEach(() => jest.clearAllMocks());
  test('Fetch method code', async () => {
    const fetchMock = getFetchMethodCodeMock();
    const fetchedCode = await getMethodText(getSampleClassName(), 'instance', sampleMethodName);
    expect(fetchMock).toBeCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(path);
    expect(fetchedCode).toEqual(getSampleMethodCodeResponse());
  });
});

// related path: /env/categories
test('Fetch categories', async () => {
  const fetchMock = getFetchCategoriesMock();
  const fetchedCategories = await getCategories();
  expect(fetchMock).toBeCalledTimes(1);
  expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/env/categories`);
  expect(fetchedCategories).toEqual(getSampleCategoriesResponse().categories.sort());
});

// related path: /env/categories/<CategorieName>/classes
test('Fetch classes of categorie', async () => {
  const fetchMock = getFetchClassesOfCategoriesMock();
  const fetchedClasses = await getClassesOfCategories(getSampleCategoryName());
  expect(fetchMock).toBeCalledTimes(1);
  expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/env/categories/${getSampleCategoryName()}`);
  expect(fetchedClasses).toEqual(getSampleAllClassesResponse().classes);
});

// related path: /env/classes
test('Fetch classes', async () => {
  const fetchMock = getFetchClassesMock();
  const fetchedClasses = await getClasses();
  expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/env/classes`);
  expect(fetchMock).toBeCalledTimes(1);
  expect(fetchedClasses).toEqual(getSortedSampleAllClasses());
});

// related path: /env/classes/<ClassName>
test('Proof if class is help book', async () => {
  const fetchMock = getIsHelpBookMock();
  const fetchedInfo = await isHelpBook(getSampleClassName());
  expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/env/classes/${getSampleClassName()}`);
  expect(fetchMock).toBeCalledTimes(1);
  expect(fetchedInfo).toEqual(getSampleClassInfoResponse().isHelpBook);
});

// related path: /env/search/classes/<SearchTerm>
test('Fetch class searchresult of given searchterm', async () => {
  const fetchMock = getSearchForClassMock();
  const fetchedSearchResults = await searchForClasses(getSampleClassSearchTerm());
  expect(fetchMock).toHaveBeenCalledWith(
    `${baseURL}/env/search/classes/${getSampleClassSearchTerm()}`
  );
  expect(fetchMock).toBeCalledTimes(1);
  expect(fetchedSearchResults).toEqual(getSampleClassSearchResponse().classes);
});

// related path: /env/search/methods/<SearchTerm>
test('Fetch method searchresult of given searchterm', async () => {
  const fetchMock = getSearchForMethodMock();
  const fetchedSearchResults = await searchForMethods(getSampleMethodSearchTerm());
  expect(fetchMock).toHaveBeenCalledWith(
    `${baseURL}/env/search/methods/${getSampleMethodSearchTerm()}`
  );
  expect(fetchMock).toBeCalledTimes(1);
  expect(fetchedSearchResults).toEqual(getSampleMethodSearchResponse().methods);
});

// related path: /statistics/undocumented/classes
test('Fetch undocumented classes', async () => {
  const fetchMock = getUndocumentedClassesAPIMock();
  const fetchedClasses = await getUndocumentedClasses();
  expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/statistics/undocumented/classes`);
  expect(fetchMock).toBeCalledTimes(1);
  expect(fetchedClasses).toEqual(getSampleUndocumentedClassesResponse().classes);
});

// related path: /statistics/undocumented/methods
test('Fetch undocumented methods', async () => {
  const fetchMock = getUndocumentedMethodsOfClassAPIMock();
  const fetchedMethods = await getUndocumentedMethodsOfClass(getSampleClassName());
  expect(fetchMock).toHaveBeenCalledWith(
    `${baseURL}/statistics/undocumented/methods/${getSampleClassName()}`
  );
  expect(fetchMock).toBeCalledTimes(1);
  expect(fetchedMethods).toEqual(getSampleUndocumentedMethodsOfClassResponse());
});

afterEach(() => jest.clearAllMocks());
