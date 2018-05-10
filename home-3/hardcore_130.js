//Task_1
//var date = new Date(),
//    month = date.getMonth() + 1,
//    day = date.getDay(),
//    hours = date.getHours(),
//    minutes = date.getMinutes(),
//    seconds = date.getSeconds();
//var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//if (hours > 12) {
//    hours -= 12;
//    hours += "PM"
//} else
//    hours += "AM";
//console.log("Today is : %s.\n%s : %d : %d", days[day-1], hours, minutes, seconds);

//Task_2
//console.log(window.print());

//Task_3
//var data = date.getDate();
//console.log("%s-%s-%d", format(month), format(data), date.getFullYear());
//console.log("%s/%s/%d", format(month), format(data), date.getFullYear());
//console.log("%s-%s-%d", format(data), format(month), date.getFullYear());
//console.log("%s/%s/%d", format(data), format(month), date.getFullYear());
//
//function format(time) {
//    return time < 10 ? "0" + time : time;
//}
//
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