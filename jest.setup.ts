import '@testing-library/jest-dom';

global.structuredClone = (val) => {
  return JSON.parse(JSON.stringify(val));
};
