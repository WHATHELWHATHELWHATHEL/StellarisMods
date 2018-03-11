const createRandomSystem = (id, minR, gapR) => {
  const randDegree = parseInt(Math.random() * 360, 10);
  const randDegreeValue = (randDegree * 180) / Math.PI;
  const randDistance = parseInt(
    minR + (gapR * Math.random() * Math.pow(Math.random(), 1 / 5)),
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
