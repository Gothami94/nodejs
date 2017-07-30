//file system module
var fs=require('fs');
fs.writeFileSync("hello.txt","Hello this is fs module");
console.log(fs.readFileSync("hello.txt").toString());

//path module
var path=require('path');
var website="Desktop/xaamp//htdocs/index.php";
var about="Desktop/xaamp/htdocs/about.php";

console.log(path.normalize(website));
console.log(path.dirname(about));
console.log(path.basename(about));
console.log(path.extname(about));


