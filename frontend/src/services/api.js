// // CURRENTLY USING LOCAL JSON BACKUP
// import countriesData from "../data/countries.json";

// // Using local JSON temporarily
// export const getAllCountries = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ data: countriesData });
//     }, 500);
//   });
// };

// export const getCountryByName = (name) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const result = countriesData.filter((country) =>
//         country.name.common.toLowerCase().includes(name.toLowerCase())
//       );
//       resolve({ data: result });
//     }, 500);
//   });
// };

// export const getCountriesByRegion = (region) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const result = countriesData.filter(
//         (country) => country.region.toLowerCase() === region.toLowerCase()
//       );
//       resolve({ data: result });
//     }, 500);
//   });
// };

// export const getCountryByCode = (code) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const result = countriesData.find((country) => country.cca3 === code);
//       resolve({ data: result });
//     }, 500);
//   });
// };

// IF REAL API IS WORKING, UNCOMMENT BELOW CODE:

import axios from "axios";
const BASE_URL = "https://restcountries.com/v3.1";

export const getAllCountries = () => {
  return axios.get(`${BASE_URL}/all`);
};

export const getCountryByName = (name) => {
  return axios.get(`${BASE_URL}/name/${name}`);
};

export const getCountriesByRegion = (region) => {
  return axios.get(`${BASE_URL}/region/${region}`);
};

export const getCountryByCode = (code) => {
  return axios.get(`${BASE_URL}/alpha/${code}`);
};
