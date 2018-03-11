// get the config from the param.js
const config = require('./param.json');

// get the functions to generate the random systems
const generateRandomSystem = require('./generateRandomSystem').generateSysCoords;
const randomSystems = generateRandomSystem(config);

// get the function that generate the final script code
const generateStaticScenario = require('./generateFinalStaticScenario').generateFinalStaticScenrio;
const finalScript = generateStaticScenario(config, 0, randomSystems);

// then output the result to the setup_scenarios
const fs = require('fs');
const dataBuffer = new Buffer(finalScript);

fs.writeFile(
  `${__dirname}/map/setup_scenarios/test.txt`,
  dataBuffer,
  (error, result) => {
    if (error) {
      console.log(`write fail: ${JSON.stringify(error)}`);
    } else {
      console.log('write success');
    }
  },
);
