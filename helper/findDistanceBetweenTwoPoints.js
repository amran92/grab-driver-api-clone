module.exports = function (firstCoordinate, secondCoordinate) {
  const horizontalDistance = secondCoordinate.x - firstCoordinate.x;
  const verticalDistance = secondCoordinate.y - firstCoordinate.y;

  const distanceSquared =
    Math.pow(horizontalDistance, 2) + Math.pow(verticalDistance, 2);

  const distance = Math.sqrt(distanceSquared);

  return distance;
};
