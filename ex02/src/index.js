var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];
function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];
    for (var i=0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            newTemps *= arr[i][j];
        }
    }
    return averageDayTemp;
}

console.log(myArrayFunction(temps));
module.exports = myArrayFunction;