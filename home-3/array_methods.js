alert("Array_Methods");
//Task 1
var testArray = [1,2435,544,4545, 4, 6, 7 ,23];
var newArray = testArray.map(x=>x * 2);
alert(newArray);

//Task2
newArray = testArray.filter((element, index) => index % 2 ? 0 : element);
alert(newArray);

//Task3
var sum = testArray.reduce((prevElem, currentElem, index, array) => prevElem + currentElem);
alert(sum/testArray.length);