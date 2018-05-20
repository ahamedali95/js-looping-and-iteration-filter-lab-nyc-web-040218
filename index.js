

function findMatching(drivers, string) {
  return drivers.filter(function(driverName) {
    return driverName === string || driverName === string.toLowerCase();
  });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(driverName) {
    return driverName[driverName.length - 1] !== string && driverName.indexOf(string) !==  Math.floor(driverName.length / 2) && driverName.indexOf(string) !== -1;
  });
}


function matchName(drivers, string) {
  return drivers.filter(function(driverObj) {
    return driverObj.name === string;
  });
}
