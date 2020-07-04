/* eslint-disable no-console */
import { baseURL } from '../config/constants';

export const getBookInfo = async helpClassName =>
  fetch(`${baseURL}/help/${helpClassName}`).then(response => response.json());

export const getPagesOfBook = async bookName =>
  fetch(`${baseURL}/help/${bookName}/pages`)
    .then(response => response.json())
    .then(jsonResult => jsonResult.pages)
    .then(pages => pages.filter(aPage => aPage.isGivenByClass))
    .then(pages => pages.map(aPage => aPage.pageName))
    .catch(error => console.log(error));

export const getContentOfPage = async (bookName, pageName) =>
  fetch(`${baseURL}/help/${bookName}/pages/${pageName}`)
    .then(response => response.json())
    .then(jsonResult => jsonResult.content)
    .catch(error => console.log(error));

export const getContentOfBook = async bookName =>
  getPagesOfBook(bookName)
    .then(pages => pages.map(aPage => getContentOfPage(bookName, aPage)))
    .then(pagePromises => Promise.all(pagePromises))
    .then(pageContents => pageContents.join(''))
    .catch(error => console.log(error));

export const getCategories = async () =>
  fetch(`${baseURL}/env/categories`)
    .then(response => response.json())
    .then(jsonObject => jsonObject.categories)
    .then(unsortedResult => unsortedResult.sort())
    .catch(error => console.log(error));

export const getClassesOfCategories = async aCategorieName =>
  fetch(`${baseURL}/env/categories/${aCategorieName}`)
    .then(response => response.json())
    .then(jsonObject => jsonObject.classes)
    .catch(error => console.log(error));

export const getClasses = async () =>
  fetch(`${baseURL}/env/classes`)
    .then(response => response.json())
    .then(jsonObj => jsonObj.classes)
    .then(classesArray => classesArray.sort())
    .catch(error => console.log(error));

export const getAllMethodsOf = async className =>
  fetch(`${baseURL}/env/classes/${className}/methods`)
    .then(response => response.json())
    .catch(error => console.log(error));

export const getInstanceMethods = async className =>
  getAllMethodsOf(className).then(response => response.instanceMethods);

export const getClassMethods = async className =>
  getAllMethodsOf(className).then(response => response.classMethods);

export const getMethodInfo = async (className, side, methodName) =>
  fetch(`${baseURL}/env/classes/${className}/methods/${side}/${methodName}`)
    .then(response => response.json())
    .catch(error => console.log(error));

export const getMethodText = async (className, side, methodName) =>
  fetch(`${baseURL}/env/classes/${className}/methods/${side}/${methodName}/text`)
    .then(response => response.text())
    .catch(error => console.log(error));

export const getClass = async className =>
  fetch(`${baseURL}/env/classes/${className}`)
    .then(response => response.json())
    .catch(error => console.log(error));

export const isHelpBook = async className => (await getClass(className)).isHelpBook;

export const searchForClasses = async searchKey =>
  fetch(`${baseURL}/env/search/classes/${searchKey}`)
    .then(response => response.json())
    .then(jsonObject => jsonObject.classes)
    .catch(error => console.log(error));

export const searchForMethods = async searchKey =>
  fetch(`${baseURL}/env/search/methods/${searchKey}`)
    .then(response => response.json())
    .then(jsonObject => jsonObject.methods)
    .catch(error => console.log(error));

export const getUndocumentedClasses = async () =>
  fetch(`${baseURL}/statistics/undocumented/classes`)
    .then(response => response.json())
    .then(jsonObject => jsonObject.classes)
    .catch(error => console.log(error));
