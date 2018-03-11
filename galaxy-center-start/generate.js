// get the config from the param.js
const config = require('./param.json');

// get the functions to generate the random systems
const generateRandomSystem = require('./generateRandomSystem').generateSysCoords;
const randomSystems = generateRandomSystem(config);

// then generate the given special systems
const generateSpecialSystem = require('./generateSpecialSystem').generateSpeicalSystems;
const specialSystem = generateSpecialSystem(config, randomSystems.length);

// get the function that generate the final script code
const generateStaticScenario = require('./generateFinalStaticScenario').generateFinalStaticScenrio;
const finalScript = generateStaticScenario(config, 0, randomSystems.concat(specialSystem));

// then output the result to the setup_scenarios
const fs = require('fs');
const dataBuffer = new Buffer(finalScript);

const { scenariosToCreate } = config;

for (let index = 0; index < scenariosToCreate; index += 1) {
  fs.writeFile(
    `${__dirname}/map/setup_scenarios/test${index}.txt`,
    dataBuffer,
    (error, result) => {
      if (error) {
        console.log(`write fail: ${JSON.stringify(error)}`);
      } else {
        console.log('write success');
      }
    },
  );
}
