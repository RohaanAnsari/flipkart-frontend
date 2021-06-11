const baseURL = 'https://flipkartbackend.herokuapp.com';

export const api = `${baseURL}/api`;

export const generatePublicUrl = (fileName) => {
  return `${baseURL}/public/${fileName}`;
}