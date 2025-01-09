 const dayNamesEt = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
 const monthNamesEt = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];

 const dateFormatted = function(){
 let timeNow = new Date();
 let dateNow = timeNow.getDate();
 let monthNow = timeNow.getMonth ();
 let yearNow = timeNow.getFullYear();
 return timeNow + "." + dateNow + "." + monthNamesEt[monthNow] + "." + yearNow;
 }
 
 const weekDay = function(){
 let timeNow = new Date();
 let dayNow = timeNow.getDay();
 return dayNamesEt[dayNow];
 }
 
 const timeFormatted = function(){
 let hourNow = timeNow.getHours();
 let secNow = timeNow.getSeconds();
 let minuteNow = timeNow.getMinutes(); 
 return hourNow + "." + secNow + "." + minuteNow + ".";
 }

let dateEtNow = dateFormatted();
console.log("Täna on " + dateEtNow + "." + "Ja " + dayNamesEt[weekDay] + ".")


//School day / Working day:
let Monday = weekDay[1]
{if(weekDay[1]);
    let Monday = "You have a rest day!"; 
if(weekDay[1] >= 8 && Monday <= 12);
   let mondayHours = "You need to go in the gym";
if(weekDay[1] >= 12.01 && Monday <= 18);
    mondayHours = "You need to meet your friend";
    console.log(weekDay);
return weekDay[0];  
}

let {hourNow, dateEt} = dateFormatted();

function dateFormatted(){
     let timeNow = new Date();  
     let dateNow = timeNow.getDate();
     let monthNow = timeNow.getMonth ();
     let yearNow = timeNow.getFullYear();
     const dayNamesEt =["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
     let weekDayNow = timeNow.getDay();
     let hourNow = timeNow.getHours();
     let secNow = timeNow.getSeconds();
     let minuteNow = timeNow.getMinutes(); 
     const monthNamesEt = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
    
     let dateEt = dateNow + "." + monthNamesEt[monthNow] + "." + yearNow + "." + dayNamesEt[weekDayNow] + "." + hourNow + "." + minuteNow + "." + secNow;

let dayOfWeek;

{
const randomMajor = ["Web Programming", "DigiCourse", "DataSystem Design", "Programming of Basics", "Study in University", "Operation Systems", "Practical Math"];
let smthG = randomMajor.length;  
let randomIndex = Math.floor(Math.random() * smthG); 
let randomMath = randomMajor[randomIndex];   


///Sunday
if(weekDayNow === 0) {
    let sunday = "You have Rest Day!";
if(hourNow >= 8 && hourNow <= 12) {
    sunday = "Go to the gym.";
} else if(hourNow >12 && hourNow <= 18) {
   sunday = "You have meeting with your friend!";
} else if(hourNow >=20 && hourNow <= 24) {
   sunday = "You need to go sleep!";
} else {
   sunday = "Just rest:)";
 }
 dayOfWeek = sunday;
}
    

//Monday
if(weekDayNow === 1 ) {
    let monday = "You have a School Day!";
if(hourNow >= 8 && hourNow <= 12) {
    monday = "You are having a lesson " + randomMath;
} else if(hourNow >=12 && hourNow <= 18) {
   monday = "You are having a lesson " + randomMath;
} else if(hourNow >=20 && hourNow <= 24) {
   monday = "You need to go sleep!";
} else {
   monday = "Just relax:)";
 }
 dayOfWeek = monday;
}
    
//Tuesday, Wednesday
if(weekDayNow === 2 || weekDayNow === 3) {
    let tuesdWed = "You have a School Day!. Again.";
if(hourNow >= 10 && hourNow <= 11) {
    tuesdWed = "You are having a lesson " + randomMath;
} else if(hourNow >11 && hourNow <= 14) {
   tuesdWed = "You are having a lesson " + randomMath;
} else if(hourNow >14 && hourNow <= 20) {
   tuesdWed = "You need to meet your friend!";
} else {
   tuesdWed = "Just relax:)";
 }
 dayOfWeek = tuesdWed;
}
    
//Thursday
if(weekDayNow === 4) {
    let thursday = "You have a School Day!. Again.";
if(hourNow >= 8 && hourNow <= 12) {
    thursday = "You are having a lesson " + randomMath;
} else if(hourNow >=13 && hourNow <= 17) {
   thursday = "You are having a lesson " + randomMath;
} else if(hourNow >17 && hourNow <= 21) {
   thursday = "You need to go to the gym!";
} else {
   thursday = "Just relax:)";
 }
 dayOfWeek = thursday;
}
    
//Friday
if(weekDayNow === 5) {
    let friday = "You have a School Day!. Again.";
if(hourNow >= 10 && hourNow <= 13) {
    friday = "You are having a lesson " + randomMath;
} else if(hourNow >=14 && hourNow <= 16) {
   friday = "You are having a lesson " + randomMath;
} else if(hourNow >16 && hourNow <= 20) {
   friday = "You need to go to ride bicycle!";
} else {
   friday = "Just relax:)";
 }
 dayOfWeek = friday;
}
    
 //Saturday
if(weekDayNow === 6) {
    let saturday = "You have a Rest Day!.";
if(hourNow >= 9 && hourNow <= 11) {
    saturday = "You need to do yoga class.";
} else if(hourNow >11 && hourNow <= 14) {
   saturday = "You need to go to buy groceries.";
} else if(hourNow >14 && hourNow <= 20) {
   saturday = "You need to go to meet your family.";
} else {
   saturday = "Just relax:). Watch videos.";
 }
 dayOfWeek = saturday;
 }
}
return { dateEt, dayOfWeek, weekDayNow, hourNow };
}

let result = dateFormatted();
//let {hourNow, dateEt} = dateFormatted();

console.log("Today is " + result.dateEt + ". And " + result.dayOfWeek);

