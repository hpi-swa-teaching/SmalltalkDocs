import { baseURL } from '../config/constants';
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
  getClassesOfCategories
} from './apiHandler';

const sampleClassName = 'SampleClass';
const sampleCategorieName = 'Smaprat';

const sampleHelpClassInfoResponse = {
  bookName: 'Help on Help',
  priority: 9999
};

const sampleHelpClassPagesResponse = {
  pages: [
    {
      pageName: 'introduction',
      isGivenByClass: true
    },
    {
      pageName: 'HelpHowToHelpTopics',
      isGivenByClass: false
    },
    {
      pageName: 'HelpAPIDocumentation',
      isGivenByClass: false
    }
  ]
};

const sampleHelpPageResponse = {
  content:
    'WELCOME TO THE HELP SYSTEM\r\rThe help system is a simple user interface to display help contents to the user. It can be accessed from the world menu using "Tools" -> "Help Browser" or by evaluating \'HelpBrowser open\' in a workspace.\r\rThere is a predefined mechanism allowing you to have help contents stored as source code using methods in specific help provider classes. This allows you to manage the help texts using the standard development tools. But this is only one possible representation.\r',
  pageName: 'introduction',
  title: 'Introduction'
};

const sampleAllClassesResponse = {
  classes: ['RPTestClass', 'X509TBSCertificate', 'MetacelloAllowProjectUpgrade'],
  count: 3
};

const sampleCategoriesResponse = {
  categories: ['SmapratCore', 'SmapratAPI', 'SmapratApp'],
  count: 3
};

const sortedSampleAllClasses = [
  'MetacelloAllowProjectUpgrade',
  'RPTestClass',
  'X509TBSCertificate'
];

const sampleClassInfoResponse = {
  isHelpBook: true
};

const sampleMethodsOfClassResponse = {
  classMethods: ['newStarted', 'newStartedOn:'],
  count: { classMethods: 2, total: 12, instanceMethods: 10 },
  instanceMethods: [
    'getHelpPagesFrom:',
    'getClassMethodTextFrom:named:',
    'getInstanceMethodFrom:named:',
    'getMethods:',
    'getClasses',
    'getHelpPageFrom:at:',
    'helloWorld:',
    'getClassMethodFrom:named:',
    'getHelpBookFrom:',
    'getInstanceMethodTextFrom:named:'
  ]
};

const sampleClassMethods = sampleMethodsOfClassResponse.classMethods;
const sampleInstanceMethods = sampleMethodsOfClassResponse.instanceMethods;

const sampleMethodInfoResponse = {
  hasPrecodeComment: true,
  precodeComment:
    'This is the main entry point for the JSON parser. See also readFrom: on the class side.'
};

const sampleMethodCodeResponse = 'readFrom: aStream\n\t^ self new readFrom: aStream.';

describe('Help page system', () => {
  let fetchMock;
  afterEach(() => jest.clearAllMocks());

  // related API route: /help/<HelpClass>
  test('Fetch information about an help class', async () => {
    fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => sampleHelpClassInfoResponse
      })
    );
    const jsonResponse = await getBookInfo(sampleClassName);
    expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/help/${sampleClassName}`);
    expect(fetchMock).toBeCalledTimes(1);
    expect(jsonResponse).toEqual(sampleHelpClassInfoResponse);
  });

  // related API route: /help/<HelpClass>/pages
  test('Fetch pages of a sample book', async () => {
    fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => sampleHelpClassPagesResponse
      })
    );
    const jsonResponse = await getPagesOfBook(sampleClassName);
    expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/help/${sampleClassName}/pages`);
    expect(fetchMock).toBeCalledTimes(1);
    expect(jsonResponse).toEqual(['introduction']);
  });

  // related API route: /help/<HelpClass>/pages/<page_name>
  test('Fetch content of a sample page', async () => {
    fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => sampleHelpPageResponse
      })
    );
    const samplePageName = 'introduction';
    const jsonResponse = await getContentOfPage(sampleClassName, samplePageName);
    expect(fetchMock).toHaveBeenCalledWith(
      `${baseURL}/help/${sampleClassName}/pages/${samplePageName}`
    );
    expect(fetchMock).toBeCalledTimes(1);
    expect(jsonResponse).toEqual(sampleHelpPageResponse.content);
  });

  test('Fetch content of a sample book', async () => {
    const prefixPath = `${baseURL}/help/${sampleClassName}/pages`;
    fetchMock = jest.spyOn(global, 'fetch').mockImplementation(path => {
      if (path === prefixPath)
        return Promise.resolve({
          json: () => sampleHelpClassPagesResponse
        });
      return Promise.resolve({
        json: () => sampleHelpPageResponse
      });
    });
    const pageContents = await getContentOfBook(sampleClassName);
    expect(fetchMock).toHaveBeenCalledWith(prefixPath);
    expect(fetchMock).toHaveBeenCalledWith(`${prefixPath}/introduction`);
    expect(fetchMock).toBeCalledTimes(2);
    expect(pageContents).toEqual(sampleHelpPageResponse.content);
  });
});

// related path: /env/classes/<ClassName>/methods
describe('Fetch methods', () => {
  const path = `${baseURL}/env/classes/${sampleClassName}/methods`;
  let fetchMock;
  beforeAll(() => {
    fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => sampleMethodsOfClassResponse
      })
    );
  });
  afterEach(() => jest.clearAllMocks());

  test('Fetch methods overview of class', async () => {
    const fetchedOverview = await getAllMethodsOf(sampleClassName);
    expect(fetchMock).toBeCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(path);
    expect(fetchedOverview).toEqual(sampleMethodsOfClassResponse);
  });

  test('Fetch instance methods of class', async () => {
    const fetchedMethods = await getInstanceMethods(sampleClassName);
    expect(fetchMock).toBeCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(path);
    expect(fetchedMethods).toEqual(sampleInstanceMethods);
  });

  test('Fetch class methods of class', async () => {
    const fetchedMethods = await getClassMethods(sampleClassName);
    expect(fetchMock).toBeCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(path);
    expect(fetchedMethods).toEqual(sampleClassMethods);
  });
});

// related path: /env/classes/<ClassName>/methods/<instance|class>/<methodName>
describe('Fetch method info', () => {
  const sampleMethodName = 'aSampleMethod:';
  const path = `${baseURL}/env/classes/${sampleClassName}/methods/instance/${sampleMethodName}`;
  let fetchMock;
  beforeAll(() => {
    fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => sampleMethodInfoResponse
      })
    );
  });
  afterEach(() => jest.clearAllMocks());
  test('Fetch whole method info', async () => {
    const fetchedOverview = await getMethodInfo(sampleClassName, 'instance', sampleMethodName);
    expect(fetchMock).toBeCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(path);
    expect(fetchedOverview).toEqual(sampleMethodInfoResponse);
  });
});

// related path: /env/classes/<ClassName>/methods/<instance|class>/<methodName>/text
describe('Fetch method code', () => {
  const sampleMethodName = 'aSampleMethod:';
  const path = `${baseURL}/env/classes/${sampleClassName}/methods/instance/${sampleMethodName}/text`;
  let fetchMock;
  beforeAll(() => {
    fetchMock = jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => Promise.resolve({ text: () => sampleMethodCodeResponse }));
  });
  afterEach(() => jest.clearAllMocks());
  test('Fetch method code', async () => {
    const fetchedCode = await getMethodText(sampleClassName, 'instance', sampleMethodName);
    expect(fetchMock).toBeCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(path);
    expect(fetchedCode).toEqual(sampleMethodCodeResponse);
  });
});

// related path: env/categories
test('Fetch categories', async () => {
  const fetchMock = jest
    .spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({ json: () => sampleCategoriesResponse }));
  const fetchedCategories = await getCategories();
  expect(fetchMock).toBeCalledTimes(1);
  expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/env/categories`);
  expect(fetchedCategories).toEqual(sampleCategoriesResponse.categories);
});

// related path: /env/categories/<CategorieName>/classes
test('Fetch classes of categorie', async () => {
  const fetchMock = jest
    .spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({ json: () => sampleAllClassesResponse }));
  const fetchedClasses = await getClassesOfCategories(sampleCategorieName);
  expect(fetchMock).toBeCalledTimes(1);
  expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/env/categories/${sampleCategorieName}`);
  expect(fetchedClasses).toEqual(sampleAllClassesResponse.classes);
});

// related path: /env/classes
test('Fetch classes', async () => {
  const fetchMock = jest
    .spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({ json: () => sampleAllClassesResponse }));
  const fetchedClasses = await getClasses();
  expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/env/classes`);
  expect(fetchMock).toBeCalledTimes(1);
  expect(fetchedClasses).toEqual(sortedSampleAllClasses);
});

// related path: /env/classes/<ClassName>
test('Proof if class is help book', async () => {
  const fetchMock = jest
    .spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({ json: () => sampleClassInfoResponse }));
  const fetchedInfo = await isHelpBook(sampleClassName);
  expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/env/classes/${sampleClassName}`);
  expect(fetchMock).toBeCalledTimes(1);
  expect(fetchedInfo).toEqual(sampleClassInfoResponse.isHelpBook);
});

afterEach(() => jest.clearAllMocks());
