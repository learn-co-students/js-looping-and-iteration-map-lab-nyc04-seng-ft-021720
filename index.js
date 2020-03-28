// Code your solution in this file.
function lowerCaseDrivers(drivers){
    return drivers.map(name => name.toLowerCase())
}

function nameToAttributes(names){
    return names.map(function(driver){
        const driversFirstName = driver.split(' ')[0];
        const driversLastName = driver.split(' ')[1];
        return {firstName: driversFirstName, lastName: driversLastName};
    });
}   


function attributesToPhrase(list){
    return list.map(function(driver){
       return `${driver.name} is from ${driver.hometown}`
    })


}