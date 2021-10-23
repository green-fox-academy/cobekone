var a = 24;
var output1 = 0;
if (a / a === 1) {
    output1++;
    console.log(output1);
}
var b = 25;
var output2 = '';
if (10 < b && b < 20) {
    output2 = 'Sweet!';
}
else if (b < 10) {
    output2 = 'Less!';
}
else {
    output2 = 'More!';
}
console.log(output2);
var c = 123;
var credits = 48;
var isBonus = false;
if (isBonus) {
}
else if (credits >= 50 && isBonus === false) {
    c = c - 2;
}
else if (credits < 50 && isBonus === false) {
    c--;
}
console.log(c);
var d = 8;
var time = 120;
var output3 = '';
if (d % 4 == 0 && time < 200) {
    output3 = 'check';
}
else if (time > 200) {
    output3 = 'Time out';
}
else {
    output3 = 'Run Forest Run!';
}
console.log(output3);
