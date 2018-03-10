const createRandomSystem = (id, minR, gapR) => {
  const randDegree = parseInt(Math.random() * 360, 10);
  const randDegreeValue = parseInt((randDegree * Math.PI) / 180, 10);
  const randDistance = parseInt(
    minR + (gapR * Math.random() * Math.sqrt(Math.random())),
    10,
  );
  const x = parseInt(randDistance * Math.cos(randDegreeValue), 10);
  const y = parseInt(randDistance * Math.sin(randDegreeValue), 10);
  return `system = { id = \"${id}\" name = "" position = { x = ${x} y = ${y}  }  }`;
};

module.exports = {
  generateSysCoords: ({
    scenariosConfig: { minRadius: minR, maxRadius: maxR, totalSystem: sysCount },
  }) => {
    const loops = 'a'.repeat(sysCount).split('');
    const gapR = maxR - minR;
    return loops.map((e, index) => createRandomSystem(index + 1, minR, gapR))
  },
};
