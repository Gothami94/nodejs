var testingModule= require('./module1');

//testingModule.moduleTesting();

testingModule.printModule1();
testingModule.printModule2();

console.log(testingModule.variable);


require('./sharedModule1');
require('./sharedModule2');

require('./objectRefactory2');
require('./objectRefactory1');