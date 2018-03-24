// get the config from the param.js
const config = require('./param.json');

// get the functions to generate the random systems
const generateRandomSystem = require('./generateRandomSystem').generateSysCoords;

// then generate the given special systems
const generateSpecialSystem = require('./generateSpecialSystem').generateSpeicalSystems;

// get the function that generate the final script code
const generateStaticScenario = require('./generateFinalStaticScenario').generateFinalStaticScenrio;

// generate all the random scenes
const { scenariosToCreate } = config;
const finalScripts = 'a'.repeat(scenariosToCreate).split('').map((e, index) => {
  // get random systems
  const randomSystems = generateRandomSystem(config);
  // then generate the special systems
  const specialSystem = generateSpecialSystem(config, randomSystems.length);
  return generateStaticScenario(config, index, randomSystems.concat(specialSystem));
});

// then output the result to the setup_scenarios
const fs = require('fs');

finalScripts.map((finalScript, index) => {
  const dataBuffer = new Buffer(finalScript);
  fs.writeFile(
    `${__dirname}/map/setup_scenarios/test${index}.txt`,
    new Buffer(finalScript),
    (error, result) => {
      if (error) {
        console.log(`write fail: ${JSON.stringify(error)}`);
      } else {
        console.log(`${index} write success`);
      }
    },
  );
});
