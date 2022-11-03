var eng = +prompt("Enter your marks in English");
console.log("English " + eng);
var urd = +prompt("Enter your marks in Urdu");
console.log("Urdu " + urd);
var sind = +prompt("Enter your marks in Sindhi");
console.log("Sindhi " + sind);
var mth = +prompt("Enter your marks in Maths");
console.log("Maths " + mth);
var com = +prompt("Enter your marks in Computer");
console.log("Computer " + com);
var bio = +prompt("Enter your marks in Biology");
console.log("Biology " + bio);
var che = +prompt("Enter your marks in Chemistry");
console.log("Chemistry " + che);
var phy = +prompt("Enter your marks in Physics");
console.log("Physics " + phy);
var isl = +prompt("Enter your marks in Islamiyat");
console.log("Islamiyat " + isl);
var pst = +prompt("Enter your marks in Pakistan Studies");
console.log("Pakistan Studies " + pst);
var total = eng + urd + sind + mth + com + bio + che + phy + isl + pst;
console.log(total)
var perc = (total * 100) / 1000;

if (perc <= 100 && perc >= 88) {
    console.log("Your Grade is A+ " + perc + "%")
} else if (perc <= 87 && perc >= 71) {
    console.log("Your Grade is A " + perc + "%")
} else if (perc <= 70 && perc >= 56) {
    console.log("Your Grade is B " + perc + "%")
} else if (perc <= 55 && perc >= 42) {
    console.log("Your Grade is C " + perc + "%")
} else if (perc <= 41 && perc >= 33) {
    console.log("Your Grade is D " + perc + "%")
} else {
    console.log("You are failed")
}

//Chapter 9 Prompt
var spec = prompt("Your species?", "human");
var question = "Your species?";
var defaultAnswer = "human";
var spec = prompt(question, defaultAnswer);
var numberOfCats = prompt("How many cats?");
var tooManyCats = numberOfCats + 1;
console.log(tooManyCats);

//Chapter 10 if statement
var x = prompt("Where does the pope live?");
if (x === "Vatican") {
    alert("Correct");
}
var correctAnswer = "Vatican";
if (x === correctAnswer) {
    alert("Correct");
}
var correctAnswer = "Vatican";
if (x === correctAnswer) {
    score++;
    userIQ = "genius";
    alert("Correct");
}

//Chapter 11 Comparison Operators
var yourTicketNumber = prompt("Enter your ticket number")
if (yourTicketNumber !== 487208) {
    alert("Better luck next time");
}
// if (1 > 0) {
// if (0 < 1) {
// if (1 >= 0) {
// if (1 >= 1) {
// if (0 <= 1) {
// if (1 <= 1) {

// Chapter 12 if...esle and else if statement
var x = prompt("Where does the pope live?");
if (x === "Vatican") {
    alert("Correct");
}
var x = prompt("Where does the pope live?");
if (x === "Vatican") {
    alert("Correct")
}
if (x !== "Vatican") {
    alert("Wrong Answer")
}
if (x === "Vatican") {
    alert("Correct!");
}
else {
    alert("Wrong Answer")
}
var correctAnswer = "Vatican";
if (x === correctAnswer) {
    alert("Correct");
}
else {
    score--;
    userIQ = "problematic";
    alert("Incorrect")
}
if (x === correctAnswer) {
    alert("Correct");
}
else if (x === "Rome") {
    alert("Incorrect but close")
}
else {
    alert("Incorrect")
}

//Chapter 13 Testing Sets Of Conditions
var weight = "300";
var time = "6";
var age = "18";
var gender = "male"
var weight = prompt("Weight")
var time = prompt("Time")
var age = prompt("Age")
var gender = prompt("Gender")
if (weight > 300 && time < 6) {
    alert("Come to our tryout!")
}
else {
    alert("Come to our cookout!")
}
if (weight > 300 && time < 6 && age > 17 && gender === "male") {
    alert("Come to our tryout!")
}
else {
    alert("Come to our cookout!")
}
var SAT = "50";
var avg = "40";
var GPA = "2.6";
var sport = "football";
var SAT = prompt("SAT")
var GPA = prompt("GPA")
var sport = prompt("Sport")
if (SAT > avg || GPA > 2.5 || sport === "football") {
    alert("Welcome to Bubba State")
}
else {
    alert("Have you looked into appliance repair?")
}
// if (age > 65 || age < 21 && res === "U.S"){
// if ((age > 65 || age < 21) && res === "U.S"){
// if (age > 65 || (age < 21 && res === "U.S")){

//Chapter 14 if Statments Nested
if (x === y || a === b && c === d) {
    g = h;
}
else {
    e = f;
}
if (c === d) {
    if (x === y) {
        g = h;
    }
    else if (a === b) {
        g = h;
    }
    else {
        e = f;
    }
}
else {
    e = f;
}