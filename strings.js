// Challenge #1
var friends = 4;
var sandwiches = 2;
var numOfSandwiches = friends * sandwiches;
console.log("numOfSandwiches", numOfSandwiches);

//Challenge #2
var name = "Amanda";
var string = ". How are you doing?"
console.log("Hello, " + name + string);

//Challenge #3
var DNA = "GCAT"
var RNA = DNA.replace(/T/g,'U');

console.log("RNA:", RNA); //SHOULD PRINT OUT "GCAU"


//CHALLENGE #4
//var animal = "Goat"; //should print out wide
var animal = "allIGator"; //should print out small

if (animal.toLowerCase() === "alligator") {
  console.log("small");
  // debugger;
}
else {
  console.log("wide");
}

//SEPARATE STUFF
var yarn = "the better string";
var domString = "<h4>" + yarn +"</h4>";
var myDiv = document.getElementById('basket');
// myDiv.innerHTML = domString;


// CHALLENGE 5
// var str = "IBMWLOVEbmwcatsbmw";
// var cStr = str.toLowerCase();
// var myStr = cStr.replace(/[bmw]/g, " ");
// console.log(myStr);
// document.getElementById("#basket").innerHTML("<h1>" + myStr + "</h1>");

var str = "IBMWLOVEbmwcatsbmw";
var cats = str.replace(/[BMWbmw]/g, '');
console.log("cats", cats);
var catStr = "<h1>" + cats + "</h1>";
var catElement = document.getElementById("basket");
catElement.innerHTML = catStr;


