var myPetsArray = ["Dog", "Cat"];
function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
myPets = myNewPets.push("Bird", "Fish");


myNewPets.unshift("Lion");
}
console.log(myArrayFunction(myNewPets));
module.exports = myArrayFunction;
