// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    let fullName = driver.split(" ");
    let firstName = fullName[0];
    let lastName = fullName[1];
    return {
      firstName: firstName,
      lastName: lastName
    };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(driver => `${driver.name} is from ${driver.hometown}`);
}

