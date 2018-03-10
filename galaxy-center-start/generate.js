// get the config from the param.js
const config = require('./param.json');

// get the functions to generate the random systems
const generateRandomSystem = require('./generateRandomSystem').generateSysCoords;
const randomSystems = generateRandomSystem(config);

// get the function that generate the final script code
const generateStaticScenario = require('./generateFinalStaticScenario').generateFinalStaticScenrio;
const testResult = generateStaticScenario(config, 0, randomSystems);
console.log(testResult);
