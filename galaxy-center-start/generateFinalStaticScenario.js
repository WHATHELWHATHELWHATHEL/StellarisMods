module.exports = {
  generateFinalStaticScenrio: (
    { scenariosUniversalName }, scenarioIndex, systemsCoord
  ) => {
    return `
    static_galaxy_scenario = {
      name = \"${scenariosUniversalName} ${scenarioIndex}\"
      colonizable_planet_odds = 1.0
      priority = 0
      default = yes
      num_empires = { min = 1 max = 32 }
      num_empire_default = 32
      num_hyperlanes = { min = 0.25 max = 5 }
      num_hyperlanes_default = 5
      advanced_empire_default = 32
      fallen_empire_default = 5
      fallen_empire_max = 5
      marauder_empire_default = 3
      marauder_empire_max = 3
      random_hyperlanes = yes
      core_radius = 1
      ${systemsCoord.join('\n      ')}
    }
    `;
  },
};
