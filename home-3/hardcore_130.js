////Task_1

var date = new Date(),
    month = date.getMonth() + 1,
    day = date.getDay(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
if (hours > 12) {
    hours -= 12;
    hours += "PM"
} else
    hours += "AM";
console.log("Today is : %s.\n%s : %d : %d", days[day-1], hours, minutes, seconds);

////Task_2

//console.log(window.print());

////Task_3

//var data = date.getDate();
//console.log("%s-%s-%d", format(month), format(data), date.getFullYear());
//console.log("%s/%s/%d", format(month), format(data), date.getFullYear());
//console.log("%s-%s-%d", format(data), format(month), date.getFullYear());
//console.log("%s/%s/%d", format(data), format(month), date.getFullYear());
//function format(time) {
//    return time < 10 ? "0" + time : time;
//}

////Task_4

//var a = 5,
//    b = 6,
//    c = 7;
//var p = halfPerimetr(a, b, c);
//console.log("Square - %d", square(a, b, c, p));
//function square(a, b, c, p) {
//    return Math.sqrt(p * (p - a) * (p - b) * (p - c)); 
//}
//function halfPerimetr(a, b, c) {
//    return (a + b + c)/2;
//}

////Task_5

//function rotate() {
//    var str = document.getElementById("task5").value;
//    var result = (str.split("").reverse()).join("");
//    alert(result);
//}

////Task_6

//hightYear(2000);
//function hightYear(year) {
//    if (year % 4 == 0 && year % 100 != 0 || (year % 4 == 0 && year % 100 == 0 && year % 400 == 0))
//        alert("hightYear");
//    else
//        alert("Simple year");
//}

////Task_7

//findNewYearSundays();
//function findNewYearSundays() {
//    var year = 2014,
//        startDate = new Date(year, 0, 1),
//        endDate = new Date(2050, 0, 1),
//        find = false;
//    while (startDate < endDate) {
//        if (startDate.getDay() == 2) {
//            console.log(startDate);
//            find = true;
//        }
//        year++;
//        startDate = new Date(year, 0, 1);
//    }
//    alert("No matches");
//}

////Task_8

//function matcher() {
//    var magicNumber = randomer();
//    var guessNumber = document.getElementById("task8").value;
//    if (magicNumber == guessNumber)
//        alert("Well done");
//    else
//        alert("No way. Try again(");
//}
//
//function randomer() {
//    return Math.random(1, 10) * 100;
//}

////Task_9

//daysToChristmas();
//function daysToChristmas() {
//    var currentDate = new Date(),
//        nextChristmas = new Date(currentDate.getFullYear() + 1, 0, 7),
//        days = Math.floor((nextChristmas.getTime() - currentDate.getTime()) / 86400000);
//    alert(days);
//}

////Task_10

//function multiply() {
//    document.getElementById("result").innerHTML = document.getElementById("number1").value * document.getElementById("number2").value;
//}
//
//function divide() {
//    document.getElementById("result").innerHTML = document.getElementById("number1").value / document.getElementById("number2").value;
//}

////Task_11

//celsiiToFarengeit(60);
//function celsiiToFarengeit(celsii) {
//    alert(celsii / 5 * 9 + 32);
//}
//
//farengeitToCelsii(140);
//function farengeitToCelsii(farengeit) {
//    alert((farengeit - 32) / 9 * 5);
//}

////Task_12

//    alert(document.URL);

////Task_13

//var vova1 = "vova";
//var n = 120;
//this[vova1] = n;
//console.log(this[vova1] + " " + vova1);

////Task_14

//var filename = "index.html";
//console.log(filename.split(".").pop());

////Task_15

//var number = 23;
//if (number > 13)
//    console.log((number - 13) * 2);
//else
//    console.log(13 - number);

////Task_16

//var num1 = 10;
//var num2 = 10;
//
//if (num1 == num2) 
//    console.log(3*(num1 + num2));
//else
//    console.log(num1 + num2);

////Task_17

//var number = 20;
//if (number > 19) 
//    console.log((number - 19) * 3)
//else
//    console.log(19 - number);

////Task_18

//var num1 = 47,
//    num2 = 3;
//if (num1 == 50 || num2 == 50 || num1 + num2 == 50)
//    console.log(true);

////Task_19

//var num = 134;
//if (num > 20 && num < 100)
//    console.log("(20; 100)");
//else if (num > 20 && num > 100 && num < 400)
//    console.log("(20; 400)");

////Task_20

//var num1 = 3,
//    num2 = -2;
//if (num1 < 0 && num2 > 0 || num1 > 0 && num2 < 0)
//    console.log(true);
//else
//    console.log(false);

////Task_21

//var str = "ton"
//if (str === null || str === undefined || str.substring(0, 2) == "Py")
//    console.log(str);
//else
//    console.log("Py" + str);

////Task_22

//var str = "Vova",
//    position = 1;
//console.log(replace(str, position));
//function replace(str, position) {
//    return str.replace(str.charAt(position), "");
//}

////Task_23

//var str = "vova";
//console.log(stringSwap(str));
//
//function stringSwap(str) {
//    if (str.length >= 1) 
//        return str = str.charAt(str.length-1) + str.substring(1, str.length-1) + str.charAt(0);
//}

////Task_24

//var str = "Nova",
//    firstChar = str.charAt(0);
//console.log(firstChar + str + firstChar);

////Task_25

//var num = 21;
//if (num % 3 == 0 || num % 7 == 0)
//    console.log("Multiple on 3 and 7");

////Task_26

//var str = "NOVa";
//if (str.length >= 3)
//    console.log(str.substring(0, 3) + str + str.substring(0, 3));

////Task_27

//var str = "Javastring",
//    JAVA = "Java";
//if (str.substring(0, 4) === JAVA)
//    console.log(true);
//else
//    console.log(false);

////Task_28

//var num1 = 51,
//    num2 = 99;
//if (num1 > 50 && num1 <= 99 && num2 > 50 && num2 <= 99)
//    console.log(true);
//else
//    console.log(false);

////Task_29

//var num1 = 51,
//    num2 = 120,
//    num3 = 100;
//if (num1 > 50 && num1 <= 99 || num2 > 50 && num2 <= 99 || num3 > 50 && num3 <= 99)
//    console.log(true);
//else
//    console.log(false);

////Task_30

//var str = "striScriptstring",
//    SCRIPT = "Script";
//if (str.substring(4, SCRIPT.length + 4) === SCRIPT)
//    console.log(str.substring(0, 4) + str.substring(SCRIPT.length-1+4, str.length));

////Task_31

//var num1 = 51,
//    num2 = 120,
//    num3 = 100;
//if (num1 > num2 && num1 > num3)
//    console.log(num1);
//else if (num2 > num3 && num2 > num3)
//    console.log(num2);
//else
//    console.log(num3);

////Task_32

//var num1 = 51,
//    num2 = 120,
//    num3 = 99,
//    def1 = Math.abs(num1 - 100),
//    def2 = Math.abs(num2 - 100),
//    def3 = Math.abs(num3 - 100);
//if (def1 < def2 && def1 < def3)
//    console.log(num1);
//else if (def2 < def1 && def2 < def3)
//    console.log(num2);
//else
//    console.log(num3);

////Task_33

//var num1 = 83,
//    num2 = 85;
//if (num1 > 40 && num1 < 60 && num2 > 40 && num2 < 60 || num1 > 70 && num1 < 100 && num2 > 70 && num2 < 100)
//    console.log(true);

////Task_34

//var num1 = 44,
//    num2 = 50;
//if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60)
//    console.log(num1 > num2 ? num1 : num2);

////Task_35

//var str = "sttrsingttt";
//while (str.length > 0) {
//    var reg = new RegExp(str.charAt(0), "gi");
//    let matches = str.match(reg, "");
//    if (matches.length >= 2 && matches.length <= 4)
//        console.log(matches[0]);
//    str = str.replace(reg, "");
//}

////Task_36

//var num1 = 121,
//    num2 = 21,
//    num3 = 1,
//    lastDigit1 = new String(num1),
//    lastDigit2 = new String(num2),
//    lastDigit3 = new String(num3);
//if (lastDigit1.charAt(lastDigit1.length-1) === lastDigit2.charAt(lastDigit2.length-1) && lastDigit1.charAt(lastDigit1.length-1) === lastDigit3.charAt(lastDigit3.length-1))
//    console.log(true);
//else
//    console.log(false);

////Task_37

//var str = "STRING",
//    strStart = str.substring(0, 3).toLowerCase();
//if (str.length <= 3)
//    str = strStart;
//else
//    str = strStart + str.substring(3, str.length);
//console.log(str);

////Task_38

//var exams = {
//    math: 90,
//    science: 93,
//    language: 95,
//    english: 100
//};
//var finalExam = true,
//    result = false;
//if (graduate(exams, finalExam))
//    console.log("A+");
//function graduate(exams, type) {
//    if (type) {
//        for (var exam in exams) {
//            if (exams[exam] < 90) {
//                result = false;
//                break;
//            } else
//                result = true;
//        }
//    }
//    else {
//        for (var exam in exams) {
//            if (exam < 89) {
//                result = false;
//                break;
//            } else
//                result = true;
//        }
//    }
//    return result;
//}

////Task_39

//var num1 = 60,
//    num2 = 5,
//    sum = num1 + num2;
//if (sum > 50 && sum < 80)
//    console.log(65);
//else
//    console.log(60);

////Task_40

//var num1 = 4,
//    num2 = 4,
//    sum = num1 + num2,
//    dif = num1 - num2;
//if (num1 == 8 || num2 == 8 || sum == 8 || dif == 8)
//    console.log(true);
//else
//    console.log(false);

////Task_41

//var num1 = 30,
//    num2 = 10,
//    num3 = 0;
//if (num1 == num2 && num2 == num3)
//    console.log(30);
//else if (num1 == num2 || num2 == num3 || num1 == num3)
//    console.log(20);
//else
//    console.log(40);

////Task_42

//var num1 = 30,
//    num2 = 10,
//    num3 = 10,
//    strictMode = true;
//if (num1 > num2 && num2 > num3)
//    console.log(strictMode);
//else if (num1 >= num2 && num2 >= num3) {
//    strictMode = false;
//    console.log(strictMode);
//}

////Task_43

//var num1 = 10,
//    num2 = 10,
//    num3 = 10,
//    lastDigit1 = new String(num1),
//    lastDigit2 = new String(num2),
//    lastDigit3 = new String(num3);
//if (num1 > 0 && num2 > 0 && num3 > 0) {
//if (lastDigit1.charAt(lastDigit1.length-1) === lastDigit2.charAt(lastDigit2.length-1) || lastDigit1.charAt(lastDigit1.length-1) === lastDigit3.charAt(lastDigit3.length-1))
//    console.log(true);
//else
//    console.log(false);
//}

////Task_44

//var num1 = 40,
//    num2 = 25,
//    num3 = 20;
//if (num1 >= 20 && num1 < num2 || num1 < num3)
//    console.log(num1);
//if (num2 >= 20 && num2 < num1 || num2 < num3)
//    console.log(num2);
//if (num3 >= 20 && num3 < num1 || num3 < num2)
//    console.log(num3);

////Task_45

//var num1 = 10,
//    num2 = 5,
//    sum = num1 + num2;
//if (sum == 15 || num1 == 15 || num2 == 15)
//    console.log(true);
//else
//    console.log(false);

////Task_46

//var num1 = 10,
//    num2 = 7;
//if (num1 > 0 && num2 > 0 && (num1 % 7 == 0 || num1 % 11 == 0 || num2 % 7 == 0 || num2 % 11 == 0))
//    console.log(true);
//else
//    console.log(false);

////Task_47

//var num1 = 400,
//    num2 = 4000,
//    number = 40,
//    div1 = num1 / number,
//    div2 = num2 / number,
//    mod1 = num1 % number,
//    mod2 = num2 % number;
//if (num1 > 40 && num1 < 10000 && num2 > 40 && num2 < 10000 && div1 > 0 && div2 > 0 && mod1 == 0 && mod2 == 0)
//    console.log(true);
//else
//    console.log(false);

////Task_48

//var str = "string";
//console.log(str.split("").reverse().join(""));

////Task_49

//var char = 61,
//    str = "string",
//    newStr = [];
//for (let i = 0; i < str.length; i++)
//    newStr.push(String.fromCharCode(str.charCodeAt(i) + 1));
//console.log(newStr.join(""));

////Task_50

//var str = "string string string.";
//    array = str.split(" ");
//for (let i = 0; i < array.length; i++) {
//    let bigLetter = array[i].charAt(0).toUpperCase();
//    array[i] = array[i].replace(new RegExp(bigLetter.toLowerCase()), bigLetter);
//}
//console.log(array.join(" "));

////Task_51

//var number = 511,
//    hours = Math.floor(number / 60),
//    minutes = Math.floor(number % 60);
//console.log("%d hours %d minutes in number %d", hours, minutes, number);

////Task_52

//var str = "string",
//    array = str.split("");
//for (let i = 0; i < str.length; i++) 
//    array[i] = array[i].charCodeAt();
//array.sort();
//for (let i = 0; i < str.length; i++) 
//    array[i] = String.fromCharCode(array[i]);
//console.log(array.join(""));

////Task_53

//var str = "strastringbaatrb",
//    reg = new RegExp("a...b");
//console.log(str.match(reg));

////Task_54

//var str = "strastringbaatrb",
//    reg = new RegExp("[^aeiouy]", "g");
//str = str.replace(reg, "");
//console.log(str + " " + str.length);

////Task_55

//var str = "strastringbaatrbpp",
//    p = str.replace(/[^p]/g, "").length,
//    s = str.replace(/[^s]/g, "").length;
//if (p == s)
//    console.log("equals");

////Task_56

//var num1 = 111.0,
//    num2 = 2.0,
//    res = new String(num1/num2);
//res = res.replace(/\./, ",");
//console.log(res);

////Task_57

//var str = "string",
//    copies = 5;
//console.log(str.repeat(copies));

////Task_58

//var str = "string",
//    copies = 4;
//if (str.length > 3)
//    str = str.substring(str.length-3, str.length);
//console.log(str.repeat(copies));

////Task_59

//var str = "string";
//if (str.length % 2 == 0)
//    console.log(str.substring(0, str.length / 2));

////Task_60

//var str = "string";
//console.log(str.replace(/^.|.$/g, ""));

////Task_61

//var str = "string",
//    str2 = "regex";
//console.log(str.replace(/^./, "").concat(str2.replace(/^./, "")));

////Task_62

//var str = "string",
//    len = str.length;
//if (len >= 3)
//    console.log(str.substring(len-3, len) + str.replace(/.{3}$/, ""));

////Task_63

//var str = "stringi",
//    len = str.length;
//if (len >= 3 && len % 2 == 1)
//    console.log(str.substring(len/2 - 1, len/2 + 2));

////Task_64

//var str1 = "string",
//    str2 = "string2",
//    len1 = str1.length,
//    len2 = str2.length,
//    dif = len1 - len2;
//if (dif > 0)
//    console.log(str1.substring(0, len1 - dif) + str2);
//else if (dif < 0)
//    console.log(str1 + str2.substring(0, len2 - Math.abs(dif)));
//else
//    console.log(str1 + str2);

////Task_65

//var str = "stringSCRIPT";
//if (str.length >= 6)
//    if (str.match(/SCRIPT$/) != null)
//        console.log("this string ends with SCRIPT");
//    else
//        console.log("this string do not end with SCRIPT");

////Task_66

//var str = "Los Angeles",
//    str2 = "New York",
//    str3 = "Lviv";
//console.log(cityMatcher(str));
//console.log(cityMatcher(str2));
//console.log(cityMatcher(str3));
//function cityMatcher(city) {
//    if (city.length >= 3) {
//        if (city.match(/^New|^Los/) != null)
//            return city;
//        else
//            return "";
//    }
//}