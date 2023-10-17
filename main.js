
var yourName = prompt ("what is your name ?");
var crushName = prompt ("what is your crush's name ? "); 
var lovePercentage = Math.random()*100;
var lovePercentage1 = Math.floor(lovePercentage)+1;
if (lovePercentage1>=90) 

{
  alert("Congratulations! You and " + crushName +" are " + lovePercentage1 + "% match,you are coding soulmates ");
  
}
if (lovePercentage1>=80 && lovePercentage1<90 ) {
  alert("Congratulations! You and " + crushName +" are " + lovePercentage1 + "% match,you are coding companions ");
  
}
  if (lovePercentage1>=70 && lovePercentage1<80 ) {
    alert("Congratulations! You and " + crushName +" are " + lovePercentage1 + "% match,you are coding buddies ");
    ''
  }
if (lovePercentage1>=60 && lovePercentage1<70 ) {
  alert("Congratulations! You and " + crushName +" are " + lovePercentage1+ "% match,you are coding acquaintances");}
if (lovePercentage1<60 ) 
{
  alert("Congratulations! You and " + crushName +" are " +lovePercentage1+ "% match,better keep coding solo ");
  
}

