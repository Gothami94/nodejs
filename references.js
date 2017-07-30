var myFavors={

    food:"Kottu",
    drink:"Avacado"
};

//just make a reference, not a copy
var boo=myFavors;

boo.food="Red rice";

console.log(myFavors);

console.log(boo);