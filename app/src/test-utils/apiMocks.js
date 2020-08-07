import { baseURL } from '../config/constants';

// mock results
export const getSampleClassName = () => 'SampleClass';
export const getSampleMethodName = () => 'getSmaprat';
export const getSampleSide = () => 'instance';
export const getSampleCategoryName = () => 'Smaprat';
export const getSampleClassSearchTerm = () => 'Smaprat%';
export const getSampleMethodSearchTerm = () => 'allSati%';
export const getSampleHelpClassInfoResponse = () => ({
  bookName: 'Help on Help',
  priority: 9999
});
export const getSampleHelpClassPagesResponse = () => ({
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
});
export const getSampleHelpPagesGivenByClass = () =>
  getSampleHelpClassPagesResponse()
    .pages.filter(aPage => aPage.isGivenByClass)
    .map(aPage => aPage.pageName);
export const getSampleHelpPageResponse = () => ({
  content:
    'WELCOME TO THE HELP SYSTEM\r\rThe help system is a simple user interface to display help contents to the user. It can be accessed from the world menu using "Tools" -> "Help Browser" or by evaluating \'HelpBrowser open\' in a workspace.\r\rThere is a predefined mechanism allowing you to have help contents stored as source code using methods in specific help provider classes. This allows you to manage the help texts using the standard development tools. But this is only one possible representation.\r',
  pageName: 'introduction',
  title: 'Introduction'
});
export const getPrefixPathOfSampleBook = () => `${baseURL}/help/${getSampleClassName()}/pages`;
export const getSampleAllClassesResponse = () => ({
  classes: ['RPTestClass', 'X509TBSCertificate', 'MetacelloAllowProjectUpgrade'],
  count: 3
});
export const getSampleCategoriesResponse = () => ({
  categories: ['SmapratCore', 'SmapratAPI', 'SmapratApp'],
  count: 3
});
export const getSortedSampleAllClasses = () => getSampleAllClassesResponse().classes.sort();
export const getSampleClassInfoResponse = () => ({
  isHelpBook: true
});
export const getSampleMethodsOfClassResponse = () => ({
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
});
export const getSampleClassMethods = () => getSampleMethodsOfClassResponse().classMethods;
export const getSampleInstanceMethods = () => getSampleMethodsOfClassResponse().instanceMethods;
export const getSampleMethodInfoResponse = () => ({
  hasPrecodeComment: true,
  precodeComment:
    'This is the main entry point for the JSON parser. See also readFrom: on the class side.'
});
export const getSampleMethodCodeResponse = () =>
  'readFrom: aStream\n\t^ self new readFrom: aStream.';
export const getSampleClassSearchResponse = () => ({
  classes: ['SmapratAPI', 'SmapratMockClass', 'SmapratTests'],
  count: 3
});
export const getSampleMethodSearchResponse = () => ({
  methods: [
    {
      className: 'Collection',
      methodName: 'allSatisfy:',
      side: 'instance'
    },
    {
      className: 'UiItemModelFinder',
      methodName: 'allSatisfy:',
      side: 'instance'
    },
    {
      className: 'UiItemModelFinder',
      methodName: 'allSatisfy:startingAt:',
      side: 'instance'
    },
    {
      className: 'UiListWidget',
      methodName: 'allSatisfy:',
      side: 'instance'
    },
    {
      className: 'GitSetWrapper',
      methodName: 'allSatisfy:',
      side: 'instance'
    }
  ]
});
export const getSampleUndocumentedClassesResponse = () => ({
  classes: ['GitHelp', 'SWAFrogz', 'SmapratMockClass'],
  count: 3
});
export const getSampleUndocumentedMethodsOfClassResponse = () => ({
  classMethods: ['fromSton:'],
  count: {
    classMethods: 1,
    total: 24,
    instanceMethods: 23
  },
  instanceMethods: ['addInstVarNames:', 'asClassDefinition', 'asHelpTopic', 'withClassVersion:']
});
export const getSampleClassResponse = () => ({
  count: { classMethods: 2, total: 12, instanceMethods: 10 },
  hasClassComment: true,
  classComment: 'this is a class comment'
});

// mock implementations
export const getHelpPageInfoMock = () =>
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => getSampleHelpClassInfoResponse()
    })
  );

export const getPagesOfBookMock = () =>
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => getSampleHelpClassPagesResponse()
    })
  );

export const getContentOfPageMock = () =>
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => getSampleHelpPageResponse()
    })
  );

export const getContentOfBookMock = () =>
  jest.spyOn(global, 'fetch').mockImplementation(path => {
    if (path === getPrefixPathOfSampleBook())
      return Promise.resolve({
        json: () => getSampleHelpClassPagesResponse()
      });
    return Promise.resolve({
      json: () => getSampleHelpPageResponse()
    });
  });

export const getFetchMethodsMock = () =>
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => getSampleMethodsOfClassResponse()
    })
  );

export const getFetchMethodInfoMock = () =>
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => getSampleMethodInfoResponse()
    })
  );

export const getFetchMethodCodeMock = () =>
  jest
    .spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({ text: () => getSampleMethodCodeResponse() }));

export const getFetchCategoriesMock = () =>
  jest
    .spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({ json: () => getSampleCategoriesResponse() }));

export const getFetchClassesOfCategoriesMock = () =>
  jest
    .spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({ json: () => getSampleAllClassesResponse() }));

export const getFetchClassesMock = () =>
  jest
    .spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({ json: () => getSampleAllClassesResponse() }));

export const getIsHelpBookMock = () =>
  jest
    .spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({ json: () => getSampleClassInfoResponse() }));

export const getSearchForClassMock = () =>
  jest
    .spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({ json: () => getSampleClassSearchResponse() }));

export const getSearchForMethodMock = () =>
  jest
    .spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({ json: () => getSampleMethodSearchResponse() }));

export const getUndocumentedClassesAPIMock = () =>
  jest
    .spyOn(global, 'fetch')
    .mockImplementation(() =>
      Promise.resolve({ json: () => getSampleUndocumentedClassesResponse() })
    );

export const getUndocumentedMethodsOfClassAPIMock = () =>
  jest
    .spyOn(global, 'fetch')
    .mockImplementation(() =>
      Promise.resolve({ json: () => getSampleUndocumentedMethodsOfClassResponse() })
    );

export const getClassMock = () =>
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => getSampleClassResponse()
    })
  );
