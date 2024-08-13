const name = "sarthak";
console.log(name);
const { Addfn, Subfn } = require("./Math"); //Either we can destructure it this way or we can do
/* const Math= require("./Math") */ //We can do like this also then we can use function like "(Math.Addfn())" this
console.log("Addition of 2 and 4 is ", Addfn(2, 4));
console.log("Subtraction of 8 and 4 is ", Subfn(8, 4));
