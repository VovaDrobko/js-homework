//Task1

var STRING = "Назва Львів xxxx дана місту на xxxx честь князя Лева Даниловича xxxx, сина polytica засновника Львова xxxx Данила Галицького.";
var MIN_LENGTH = 0;
var MAX_VALUE = STRING.length;
var maxlength = Math.random() * (MAX_VALUE - MIN_LENGTH) + MIN_LENGTH;
alert(truncate(STRING, maxlength));
function truncate(str, maxlength) {
    var END_DOTS = "...";
    return str.substring(0, maxlength) + END_DOTS; 
}

//Task 2

var counter = 0;
var i = 0;
for (i = 0; i < STRING.length; i++) {
    i = STRING.indexOf("а", i);
    if(i != -1) {
        counter++;
    } else {
        break;
    }
}
alert(counter);

//Task3
var XXXX = /xxxx/g;
var POLYTICA = /polytica/g;

var resultString = stringFilter(stringFilter(STRING, XXXX), POLYTICA);
alert(resultString);

function stringFilter(str, deleteStr) {
    return str.replace(deleteStr, "");
}

//Task4

var STRING_4 = "іва 24 уц ац34434ауку";
var REGEX_PATTERN = /[0-9]/g;
var result = STRING_4.replace(REGEX_PATTERN, "");
alert(result);
