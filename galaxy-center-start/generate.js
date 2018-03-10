// get the config from the param.js
const config = require('./param.json');

// get the functions to generate the random systems
const generateRandomSystem = require('./generateRandomSystem').generateSysCoords;
const randomSystems = generateRandomSystem(config);

console.log(randomSystems);
