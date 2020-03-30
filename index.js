// Code your solution in this file.
function lowerCaseDrivers(driversArray){
  return driversArray.map(name => name.toLowerCase());
}

// driversArray = ["kevin clark", "miranda wang"]
function nameToAttributes(driversArray){
  return driversArray.map(function(driver){
    const nameArr = driver.split(" ");
      // nameArr = [["kevin", "clark"], ["miranda", "wang"]]
    return {firstName: nameArr[0], lastName: nameArr[1]};
  });
}

function attributesToPhrase(driversObjectsArray){
  return driversObjectsArray.map(function(driverObject){
    return `${driverObject["name"]} is from ${driverObject["hometown"]}`
  })
}