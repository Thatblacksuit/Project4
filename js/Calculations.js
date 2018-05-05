window.onload = function(){
    var rate = document.getElementById('timescale').value;
    var section2 = document.getElementById('section2');
    var section3 = document.getElementById('overtimeform');
    var OThours = document.getElementById('OvertimeHours');
    var OTwage = document.getElementById('OvertimeWage');
    var taxtotal = 0;
    var regtotal = 0;
    var years = document.getElementById('year-range').value;
    var grandtotal = 0;
    
if(rate == "8760"){
    section2.style.display = "block";
} else {
    section2.style.display = "none";
};
    
        var section3 = document.getElementById('overtimeform');
    var OThours = document.getElementById('OvertimeHours');
    var OTwage = document.getElementById('OvertimeWage');
    
    if(document.getElementById("overtime").checked == true){
       section3.style.display = "block";
   } else {
       section3.style.display = "none";
        OThours.value = "";
        OTwage.value = "";
   }
}

function disablesection2() {
var rate = document.getElementById('timescale').value;
var section2 = document.getElementById('section2');

if(rate == "8760"){
    section2.style.display = "block";
} else {
    section2.style.display = "none";
};
};


function disableovertime() {
    var section3 = document.getElementById('overtimeform');
    var OThours = document.getElementById('OvertimeHours');
    var OTwage = document.getElementById('OvertimeWage');
    
    if(document.getElementById("overtime").checked == true){
       section3.style.display = "block";
   } else {
       section3.style.display = "none";
        OThours.value = "";
        OTwage.value = "";
   }
};

function calculate() {
    var salary = document.getElementById('salary').value;
var rate = document.getElementById('timescale').value;
var totalhours = document.getElementById('HoursWorked').value;
var totaldays = document.getElementById('DaysWorked').value;
var OThours = document.getElementById('OvertimeHours').value;
var OTwage = document.getElementById('OvertimeWage').value;
var years = document.getElementById('year-range').value;
    

var OTtotal = OTwage * OThours;
    
if (rate == 8760){
    regtotal = ((salary * totalhours) * totaldays) * 52;
} else {
    regtotal = (salary * rate);
}   

if (years == 2011){
   if (regtotal <= 35000) {
    taxtotal = regtotal * 0.8;
} else if (regtotal > 35000 && regtotal <= 150000){
    taxtotal = regtotal * 0.6; 
} else {
    taxtotal = regtotal * 0.5;
} 
}
    
    else if (years == 2012){
    if (regtotal <= 34370) {
    taxtotal = regtotal * 0.8;
} else if (regtotal > 34370 && regtotal <= 150000){
    taxtotal = regtotal * 0.6; 
} else {
    taxtotal = regtotal * 0.5;
}   
}    
    
        else if (years == 2013){
    if (regtotal <= 32010) {
    taxtotal = regtotal * 0.8;
} else if (regtotal > 32010 && regtotal <= 150000){
    taxtotal = regtotal * 0.6; 
} else {
    taxtotal = regtotal * 0.5;
}   
}
        else if (years == 2014){
    if (regtotal <= 31865) {
    taxtotal = regtotal * 0.8;
} else if (regtotal > 31865 && regtotal <= 150000){
    taxtotal = regtotal * 0.6; 
} else {
    taxtotal = regtotal * 0.55;
}   
}
    
        else if (years == 2015){
    if (regtotal <= 31785) {
    taxtotal = regtotal * 0.8;
} else if (regtotal > 31785 && regtotal <= 150000){
    taxtotal = regtotal * 0.6; 
} else {
    taxtotal = regtotal * 0.55;
}   
}
    
        else if (years == 2016){
    if (regtotal <= 32000) {
    taxtotal = regtotal * 0.8;
} else if (regtotal > 32000 && regtotal <= 150000){
    taxtotal = regtotal * 0.6; 
} else {
    taxtotal = regtotal * 0.55;
}   
}
    
        else if (years == 2017){
    if (regtotal <= 33500) {
    taxtotal = regtotal * 0.8;
} else if (regtotal > 33500 && regtotal <= 150000){
    taxtotal = regtotal * 0.6; 
} else {
    taxtotal = regtotal * 0.55;
}   
}
    
    else {
if (regtotal <= 34500) {
    taxtotal = regtotal * 0.8;
} else if (regtotal > 34500 && regtotal <= 150000){
    taxtotal = regtotal * 0.6; 
} else {
    taxtotal = regtotal * 0.55;
}
}
    
    
grandtotal = regtotal + OTtotal;   
    window.alert("Your salary yearly salary before tax is " + regtotal +"\n\nYour salary this year including overtime is :" + grandtotal +"\n\nYour total salary after tax: " + taxtotal);
    Document.getElementById("inputs").reset();
};

