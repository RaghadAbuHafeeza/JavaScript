/*Q1*/
function myFunction1() {
var num = window.prompt("Enter Number : ");
/*alert(num); */    /*طريقة اخرى لطباعة الاوتبوت*/  
window.document.getElementById("demo").innerHTML=num;  
}
/*********************************************************************** */
/*Q2*/
function myFunction2() {
var i = window.prompt("number is: ")
if(i%3 == 0 && i%4 == 0){
    window.document.getElementById("demo1").innerHTML="Output Yes";
}
else{
    window.document.getElementById("demo1").innerHTML="Output No";
}   
}
/************************************************************************** */
/*Q3*/
function myFunction3() {
var num1 = Number(window.prompt("The First Number is : "))
var num2 = Number(window.prompt("The Second Number is : "))
if(num1>num2){ 
    /*window.console.log(num1);*/             
    window.document.getElementById("demo2").innerHTML=num1;
}
else{
    /*window.console.log(num2);*/          
    window.document.getElementById("demo2").innerHTML=num2;
}
}
/***************************************************************************** */
/*Q4*/
function myFunction4() {
var num = window.prompt("number is: ")
if(num<0){
    window.document.getElementById("demo3").innerHTML="Output negative";
}
else{
    window.document.getElementById("demo3").innerHTML="Output positive";
} 
}
/******************************************************************************* */
/*Q5*/
function myFunction5() {
var num1 = Number(window.prompt("The First Number is : "))
var num2 = Number(window.prompt("The Second Number is : "))
var num3 = Number(window.prompt("The Third Number is : "))
if(num1>num2 && num1>num3){ 
    window.document.getElementById("demo4").innerHTML="The Max Element is : " + num1;
}
else if(num2>num1 && num2>num3){
    window.document.getElementById("demo4").innerHTML="The Max Element is : " + num2;
}
else{
    window.document.getElementById("demo4").innerHTML="The Max Element is : " + num3;
}

if(num1<num2 && num1<num3){ 
    window.document.getElementById("demo5").innerHTML="The Min Element is : " + num1;
}
else if(num2<num1 && num2<num3){
    window.document.getElementById("demo5").innerHTML="The Min Element is : " + num2;
}
else{
    window.document.getElementById("demo5").innerHTML="The Min Element is : " + num3;
}
}
/************************************************************************************ */
/*َ6*/
function myFunction6() {
var num = window.prompt("Enter Integer Number : ")
if(num%2==0){ 
    window.document.getElementById("demo6").innerHTML="even";
}
else{
    window.document.getElementById("demo6").innerHTML="odd";
}
}
/************************************************************************************ */
/*Q7*/
function myFunction7() {
var char = window.prompt("Enter The Character : ")
if(char=="a" || char=="A" || char=="e" || char=="E" || char=="i" || char=="I" || char=="o" || char=="O" || char=="u" || char=="U" ){
    window.document.getElementById("demo7").innerHTML="vowel";
}
else{
    window.document.getElementById("demo7").innerHTML="consonant";
}
}
/************************************************************************************ */
/*Q8*/
function myFunction8() {
var num = window.prompt("Enter Number : ")
var data = "";
for(var i=1;i<=num-1;i++){
    data += i + ",";
}
data += num;
window.document.getElementById("demo8").innerHTML=data;
}
/************************************************************************************ */
/*Q9*/
function myFunction9() {
var num = window.prompt("Enter Number : ")
var data = "";
for(var i=0;i<=12;i++){
    data += num + " * " + i + "  =  " + " " + num*i + "<br>";
}
window.document.getElementById("demo9").innerHTML=data;
}
/*************************************************************************************** */
/*َ10*/
function myFunction10() {
var num = window.prompt("Enter Number : ")
var data = "";
for(var i=1;i<=num;i++){
    if(i%2==0)
    data += i + "   ";
}
window.document.getElementById("demo10").innerHTML=data;
}
/*************************************************************************************** */
/*َ11*/
function myFunction11() {
var n = window.prompt("Enter Number : ")
var m = window.prompt("Enter Power : ")
var result = 1;
for(var i=1;i<=m;i++){
    result *= n;
}
window.document.getElementById("demo11").innerHTML=result;
}
/************************************************************************************** */
/*َ12*/
function myFunction12() {
var m1 = Number(window.prompt("Enter Mark of the first subject : "))
var m2 = Number(window.prompt("Enter Mark of the second subject : "))
var m3= Number(window.prompt("Enter Mark of the third subject : "))
var m4 = Number(window.prompt("Enter Mark of the fourth subject : "))
var m5 = Number(window.prompt("Enter Mark of the fifth subject : "))

var sum = m1+m2+m3+m4+m5;
window.document.getElementById("demo12").innerHTML="Total of marks = " + sum;
window.document.getElementById("demo13").innerHTML="Average of marks = " + (m1+m2+m3+m4+m5)/5;
window.document.getElementById("demo14").innerHTML="Percentage of marks = " + ((m1+m2+m3+m4+m5)/500)*100;
}
/************************************************************************************** */
/*َ13*/
function myFunction13() {            
var month = window.prompt("Enter month number (1-12): ")
if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
    window.document.getElementById("demo15").innerHTML=("Days in Month: 31 days");
}
else if(month == 2){
    window.document.getElementById("demo15").innerHTML=("Days in Month: 28 or 29 days");
}                                                                           
else if(month == 4 || month == 6 || month == 9 || month == 11){
    window.document.getElementById("demo15").innerHTML=("Days in Month: 30 days");
}                                                                    
else{
    window.document.getElementById("demo15").innerHTML=("Invalid input! Please enter month number between (1-12).");
}
}
/***************************************************************************************** */
/*14*/
function myFunction14() {
var m1 = Number(window.prompt("Enter Mark of Physics, : "))
var m2 = Number(window.prompt("Enter Mark of Chemistry, : "))
var m3= Number(window.prompt("Enter Mark of Biology, : "))
var m4 = Number(window.prompt("Enter Mark of Mathematics : "))
var m5 = Number(window.prompt("Enter Mark of Computer : "))
var average = (m1+m2+m3+m4+m5)/5;
var percentage = average*(100/100);
if(average >= 90){
    window.document.getElementById("demo16").innerHTML="Percentage of marks = " + percentage + "         --->  " + "Grad A";
}
else if(average >= 80){
    window.document.getElementById("demo16").innerHTML="Percentage of marks = " + percentage + "         --->  " +  "Grad B";
}
else if(average >= 70){
    window.document.getElementById("demo16").innerHTML="Percentage of marks = " + percentage +  "         --->  " +  "Grad C";
}
else if(average >= 60){
    window.document.getElementById("demo16").innerHTML="Percentage of marks = " + percentage +  "         --->  " +  "Grad D";
}
else if(average >= 40){
    window.document.getElementById("demo16").innerHTML="Percentage of marks = " + percentage +  "         --->  " +  "Grad E";
}
else{
    window.document.getElementById("demo16").innerHTML="Percentage of marks = " + percentage +  "         --->  " +  "Grad F";
}
}
/********************************************************************************************* */
/*َ15*/
function myFunction15() {
var month = window.prompt("Enter month name: ")
switch(month){
    case "January":
        window.document.getElementById("demo17").innerHTML=("Days in Month: 31 days");
        break;
    case "February":
        window.document.getElementById("demo17").innerHTML=("Days in Month: 28 or 29 days");
        break;
    case "March":
        window.document.getElementById("demo17").innerHTML=("Days in Month: 31 days");
        break;
    case "April":
        window.document.getElementById("demo17").innerHTML=("Days in Month: 30 days");
        break;
    case "May":
        window.document.getElementById("demo17").innerHTML=("Days in Month: 31 days");
        break;
    case "June":
        window.document.getElementById("demo17").innerHTML=("Days in Month: 30 days");
        break;
    case "July":
        window.document.getElementById("demo17").innerHTML=("Days in Month: 31 days");
        break;
    case "August":
        window.document.getElementById("demo17").innerHTML=("Days in Month: 31 days");
        break;
    case "September":
        window.document.getElementById("demo17").innerHTML=("Days in Month: 30 days");
        break;
    case "October":
        window.document.getElementById("demo17").innerHTML=("Days in Month: 31 days");
        break;
    case "November":
        window.document.getElementById("demo17").innerHTML=("Days in Month: 30 days");
        break;
    case "December":
        window.document.getElementById("demo17").innerHTML=("Days in Month: 31 days");
        break;
    default:
        window.document.getElementById("demo17").innerHTML=("Invalid input");
}
}
/********************************************************************************************* */
/*Q16*/
function myFunction16() {
var char = window.prompt("Enter letter: ")
switch(char){
    case "a":
        window.document.getElementById("demo18").innerHTML="vowel";
        break;
    case "e":
        window.document.getElementById("demo18").innerHTML="vowel";
        break;
    case "i":
        window.document.getElementById("demo18").innerHTML="vowel";
        break;
    case "o":
        window.document.getElementById("demo18").innerHTML="vowel";
        break;
    case "u":
        window.document.getElementById("demo18").innerHTML="vowel";
        break;
    default:
        window.document.getElementById("demo18").innerHTML="consonant"; 
}
}
/******************************************************************************** */
/*َ17*/
function myFunction17() {
var num1 = Number(window.prompt("The First Number is : "))
var num2 = Number(window.prompt("The Second Number is : "))
switch(num1>num2){
    case true:
        window.document.getElementById("demo19").innerHTML="The Max Element is : " + num1;
        break;
    default:
    window.document.getElementById("demo19").innerHTML="The Max Element is : " + num2;
}
}
/********************************************************************************* */
/*Q18*/
function myFunction18() {
var num = Number(window.prompt("The First Number is : "))
switch(num%2==0){
    case true:
        window.document.getElementById("demo20").innerHTML="even";
        break;
    default:
        window.document.getElementById("demo20").innerHTML="odd";
}
}
/******************************************************************************** */
/*Q19*/
function myFunction19() {
var num = window.prompt("number is: ");
switch(true){
    case num>0:
        window.document.getElementById("demo21").innerHTML="Positive";
        break;
    case num<0:
        window.document.getElementById("demo21").innerHTML="Negative";
        break;
    default:
        window.document.getElementById("demo21").innerHTML="Zero"; 
} 
}
/********************************************************************************* */
/*َ20*/
function myFunction20() {
var num1 = Number(window.prompt("Enter first number : "));
var operator = window.prompt("Enter operator either (+) or (-) or (*) or (/) :")
var num2 = Number(window.prompt("Enter second number : "));
switch(true){
    case operator=="+" :
        window.document.getElementById("demo22").innerHTML= num1 + "+" + num2 + "=" + (num1+num2);   
        break;
    case operator=="-" :
        window.document.getElementById("demo22").innerHTML= num1 + "-" + num2 + "=" + (num1-num2);   
        break;
    case operator=="*" :
        window.document.getElementById("demo22").innerHTML= num1 + "*" + num2 + "=" + (num1*num2);   
        break;
    case operator=="/" :
        window.document.getElementById("demo22").innerHTML= num1 + "/" + num2 + "=" + (num1/num2);   
        break;
}
}
/************************************************************************************************* */



