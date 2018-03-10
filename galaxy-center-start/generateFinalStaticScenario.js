module.exports = {
  generateFinalStaticScenrio: (
    { scenariosUniversalName }, scenarioIndex, systemsCoord
  ) => {
    return `
    static_galaxy_scenario = {
      name = \"${scenariosUniversalName}_${scenarioIndex}\"
      colonizable_planet_odds = 1.0
      priority = 0
      default = yes
      num_empires = { min = 1 max = 32 }
      num_empire_default = 1
      num_hyperlanes = { min = 0.25 max = 5 }
      num_hyperlanes_default = 5
      advanced_empire_default = 0
      fallen_empire_default = 0
      fallen_empire_max = 0
      random_hyperlanes = yes
      ${systemsCoord.join('\n      ')}
    }
    `;
  },
};
