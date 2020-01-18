function getAllRouteDistances(cur, routes, seen = new Set(), distance = 0) {
  const distances = [];

  const destinations = cur ? routes[cur] : createStartingRoutes(routes);
  seen.add(cur);

  for (let dest of destinations) {
    if (seen.has(dest.name)) {
      continue;
    }

    const childDistances = getAllRouteDistances(
      dest.name,
      routes,
      new Set(seen),
      dest.distance
    );

    if (childDistances.length) {
      distances.push(...childDistances);
    } else {
      distances.push(childDistances);
    }
  }

  if (distances.length) {
    return distances.map(d => d + distance);
  }
  return distance;
}

function buildGraph(distances) {
  const graph = {};

  for (let i = 0; i < distances.length; i++) {
    const route = distances[i];
    const [from, toAndDistance] = route.split(" to ");
    const [to, distance] = toAndDistance.split(" = ");

    if (!graph[from]) {
      graph[from] = [];
    }

    if (!graph[to]) {
      graph[to] = [];
    }

    graph[from].push({ name: to, distance: Number(distance) });
    graph[to].push({ name: from, distance: Number(distance) });
  }

  return graph;
}

function createStartingRoutes(routes) {
  return Object.keys(routes).map(s => ({ name: s, distance: 0 }));
}

module.exports = {
  getAllRouteDistances,
  buildGraph
};
