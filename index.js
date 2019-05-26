function driversWithRevenueOver(drivers, revenue){ 
    const filteredDrivers = drivers.filter(driver =>  driver["revenue"] > revenue);

    return filteredDrivers;
}

function driverNamesWithRevenueOver(drivers, revenue) {

    const newDrivers = drivers.filter(function(driver) {
        const correctDriver = driver["revenue"] > revenue
        
        return correctDriver;
    });

    const driversNamesOnly = newDrivers.map(driver => driver["name"])

    return driversNamesOnly;
}

function exactMatch(drivers, object) {
    const filteredDrivers = drivers.filter(function(driver){
        return (driver["name"] === object["name"] || driver["revenue"] === object["revenue"]);
    });

    return filteredDrivers;
}

function exactMatchToList(drivers, object) {
    const filteredDrivers = drivers.filter(function(driver){
        return (driver["name"] === object["name"] || driver["revenue"] === object["revenue"]);
    });

    const finishedDrivers = filteredDrivers.map(driver => driver["name"] )

    return finishedDrivers;
}