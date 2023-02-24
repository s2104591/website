


// Developed By Mariano Rico 2021



function getGetMealCalories(mealid, mealdescription,
        calories01,calories02,calories03,calories04,calories05,calories06,calories07){
        var result=0;  
        var mealchoice=document.getElementById("meal"+mealid).value;


        if     (mealchoice=="choice01")  result=calories01;
        else if(mealchoice=="choice02")  result=calories02;
        else if(mealchoice=="choice03")  result=calories03;
        else if(mealchoice=="choice04")  result=calories04;
        else if(mealchoice=="choice05")  result=calories05;
        else if(mealchoice=="choice06")  result=calories06;
        else if(mealchoice=="choice07")  result=calories07;

        document.getElementById("description"+mealid).innerHTML=mealdescription+" calories: "+result;            

        return result;


} 

function calculateCalories(){
        var totalcalories=0;
        totalcalories+=getGetMealCalories("01","breakfastfast",0,250,210,280,180,150,120);
        totalcalories+=getGetMealCalories("02","lunch",0,400,300,450,400,350,160);
        totalcalories+=getGetMealCalories("03","dinner",0,400,500,550,150,400,300);
        totalcalories+=getGetMealCalories("04","dessert",0,200,300,400,400,500,200);

        document.getElementById("totalcalories").innerHTML="Total calories for the day is :  "+totalcalories; 

}
