var cvladi1 = 2; // გამყოფი 
var cvladi2 = 7; // გასაყოფი 
var shedegi = cvladi2 % cvladi1; // ნაშთაინი გაყოფა რომელიც აბრუნებს ნაშთს

console.log(shedegi) // ვბეჭდავთ მიღებულ შედეგს
var studentsAge = 18; 
    // studentsAge++; // studentsAge =  studentsAge + 1;
    // studentsAge--; // studentsAge = studentsAge - 1;
var years = 5;
// studentsAge += years; // studentsAge = studentsAge + years; 
// studentsAge *= years; //  studentsAge = studentsAge * years;
// studentsAge /= years; //  studentsAge = studentsAge / years; 
// studentsAge -= years; //  studentsAge = studentsAge - years; 
studentsAge %= years; //  studentsAge = studentsAge % years; 
console.log(studentsAge);
// &&  და
// || 
// !

var y = "ორშაბათი";
var currentDate = 26;
var currentDay = "ორშაბათი";
console.log(currentDate + ', ' +  currentDay)
var computerName = "Dell";

var month = 3;

if(month == 1) {
  console.log('ეხლანდელი თვე არის იანვარი')
} else {
  console.log('ეხლანდელი თვე არ ვიცი')
} 


switch(month) {
  case 1:
  case 13:
    console.log('ეხლანდელი თვე არის იანვარი');
  break;
  case 2: 
    console.log('ეხლანდელი თვე არის თებერვალი')
  break;
  case 3: 
    console.log('ეხლანდელი თვე არის მარტი')
  break;
  case 4: 
    console.log('ეხლანდელი თვე არის აპრილი')
  break;
  default: 
    console.log('ეხლანდელი თვე არ ვიცი')
}