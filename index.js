// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    const modDrivers = drivers.slice(0, 2);
    return modDrivers;
}    
const returnLastTwoDrivers = function (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    const modDrivers = drivers.slice(2, 4);
    return modDrivers;
}    
const selectingDrivers = [
    returnFirstTwoDrivers,  
    returnLastTwoDrivers
]
function createFareMultiplier(num){
    return function (num2) {
        return num * num2;
      };
}
const fareDoubler = function createFareMultiplier(num){
    return num *2;
}
const fareTripler = function createFareMultiplier(num){
    return num *3;
}
function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers();
}
    