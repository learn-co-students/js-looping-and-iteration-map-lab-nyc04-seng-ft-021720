function lowerCaseDrivers(drivers) {
    return drivers.map(name => name.toLowerCase())
}

function nameToAttributes(drivers){
    return drivers.map(function(driver){
        const driversFirstName = driver.split(' ')[0];
        const driversLastName = driver.split(' ')[1];
        return {firstName: driversFirstName, lastName: driversLastName};
    });
}  

function attributesToPhrase(drivers){
    return drivers.map(function(driver){
       return `${driver.name} is from ${driver.hometown}`
    })
}