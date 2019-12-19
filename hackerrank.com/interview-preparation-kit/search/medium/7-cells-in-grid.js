function connectedCell(matrix) {
  const len = matrix.length;
  const regions = [];

  const checkIfOnRegion = function(x, y, regionId = undefined) {
    if (!matrix[x]) return;
    const m = matrix[x][y];

    if (m) {
      matrix[x][y] = 0;
      if (undefined === regionId) {
        regionId = regions.length;
        regions.push([]);
      }
      regions[regionId].push([x, y]);
      checkIfOnRegion(x + 1, y + 1, regionId);
      checkIfOnRegion(x + 1, y, regionId);
      checkIfOnRegion(x + 1, y - 1, regionId);
      checkIfOnRegion(x, y + 1, regionId);
      checkIfOnRegion(x, y - 1, regionId);
      checkIfOnRegion(x - 1, y + 1, regionId);
      checkIfOnRegion(x - 1, y, regionId);
      checkIfOnRegion(x - 1, y - 1, regionId);
    }
  };
  for (let y = 0; y < len; y++) {
    for (let x = 0; x < len; x++) {
      checkIfOnRegion(x, y);
    }
  }

  let max = 0;
  for (let region of regions) {
    if (region.length > max) max = region.length;
  }

  return max;
}
