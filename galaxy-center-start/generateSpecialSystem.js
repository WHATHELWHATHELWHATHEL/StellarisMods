module.exports = {
  generateSpeicalSystems({ scenariosConfig: { specialSystems } }, indexSeed) {
    const baseIndex = indexSeed + 1;
    return specialSystems.map(
      ({ name, initializer, position: { x, y, z }, specialConfig }, index) => (
        `system = { id = \"${baseIndex + index}\" name = \"${name}\" initializer = ${initializer} position = { x = ${x} y = ${y} z=${z} } ${specialConfig || ''}}`
      )
    );
  },
};
